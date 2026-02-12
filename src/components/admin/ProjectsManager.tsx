// src/components/admin/ProjectsManager.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { handleApiError } from '../../lib/apiClient';
import {
  Save, X, AlertCircle, Upload, CheckCircle, Plus, Loader2,
  Edit, Trash2, Image as ImageIcon, Calendar, Link as LinkIcon,
  Smartphone, Globe, Cpu, Monitor, Grid, ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || 'https://newvibecroapi.vibecro.com/api';

// Types pour les catégories
type ProjectCategory = 'mobile' | 'web' | 'desktop' | 'iot' | 'other';

interface ProjectFormData {
  title: string;
  technologies: string;
  image: File | null;
  lien: string;
  status: 'en_cours' | 'realise';
  category: ProjectCategory;
  description: string;
  progress?: number;
  start_date?: string;
  deadline?: string;
}

interface Project {
  id: number;
  title: string;
  technologies: string | null;
  image: string | null;
  image_url?: string;
  link?: string;
  lien?: string;
  status: 'en_cours' | 'realise';
  category: ProjectCategory;
  category_text?: string;
  category_class?: string;
  category_icon?: string;
  description?: string;
  progress?: number;
  start_date?: string;
  deadline?: string;
  created_at: string;
}

interface ProjectsManagerProps {
  onProjectAdded?: () => void;
}

// Configuration des catégories
const CATEGORIES = [
  { 
    id: 'mobile' as ProjectCategory, 
    label: 'Application Mobile', 
    icon: Smartphone, 
    color: 'bg-blue-500', 
    hoverColor: 'hover:bg-blue-600',
    lightColor: 'bg-blue-100 text-blue-800',
    darkColor: 'dark:bg-blue-900 dark:text-blue-300',
    borderColor: 'border-blue-500/30'
  },
  { 
    id: 'web' as ProjectCategory, 
    label: 'Application Web', 
    icon: Globe, 
    color: 'bg-purple-500', 
    hoverColor: 'hover:bg-purple-600',
    lightColor: 'bg-purple-100 text-purple-800',
    darkColor: 'dark:bg-purple-900 dark:text-purple-300',
    borderColor: 'border-purple-500/30'
  },
  { 
    id: 'desktop' as ProjectCategory, 
    label: 'Application Desktop', 
    icon: Monitor, 
    color: 'bg-indigo-500', 
    hoverColor: 'hover:bg-indigo-600',
    lightColor: 'bg-indigo-100 text-indigo-800',
    darkColor: 'dark:bg-indigo-900 dark:text-indigo-300',
    borderColor: 'border-indigo-500/30'
  },
  { 
    id: 'iot' as ProjectCategory, 
    label: 'Solution IoT', 
    icon: Cpu, 
    color: 'bg-teal-500', 
    hoverColor: 'hover:bg-teal-600',
    lightColor: 'bg-teal-100 text-teal-800',
    darkColor: 'dark:bg-teal-900 dark:text-teal-300',
    borderColor: 'border-teal-500/30'
  },
  { 
    id: 'other' as ProjectCategory, 
    label: 'Autre', 
    icon: Grid, 
    color: 'bg-gray-500', 
    hoverColor: 'hover:bg-gray-600',
    lightColor: 'bg-gray-100 text-gray-800',
    darkColor: 'dark:bg-gray-700 dark:text-gray-300',
    borderColor: 'border-gray-500/30'
  }
];

export default function ProjectsManager({ onProjectAdded }: ProjectsManagerProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('web');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    technologies: '',
    image: null,
    lien: '',
    status: 'en_cours',
    category: 'web',
    description: '',
    progress: 0,
    start_date: '',
    deadline: '',
  });

  const apiClient = axios.create({
    baseURL: API_URL,
    headers: { 
      'Accept': 'application/json',
      // Ne PAS mettre Content-Type ici, axios le fera automatiquement avec FormData
    },
  });

  apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log pour debug
    if (config.data instanceof FormData) {
      console.log('📤 Envoi FormData avec fichier');
      for (let pair of (config.data as FormData).entries()) {
        if (pair[0] === 'image') {
          console.log(`  - ${pair[0]}: ${(pair[1] as File).name} (${(pair[1] as File).size} bytes)`);
        } else {
          console.log(`  - ${pair[0]}: ${pair[1]}`);
        }
      }
    }
    
    return config;
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await apiClient.get('/projects');

      const data = response.data;
      const list = Array.isArray(data?.data)
        ? data.data
        : Array.isArray(data)
          ? data
          : [];

      setProjects(list);
    } catch (err) {
      console.error('Erreur fetch projects:', err);
      setError('Impossible de charger les projets');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  // CORRECTION: Gestion correcte du fichier
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Vérifications
    if (file.size > 2 * 1024 * 1024) {
      setError('Image trop volumineuse (max 2 Mo)');
      return;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Format non supporté (JPG, PNG, GIF, WebP)');
      return;
    }

    // Stocker le fichier, PAS l'URL
    setFormData((prev) => ({ ...prev, image: file }));
    
    // Créer un aperçu local
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    setError(null);
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
    // Réinitialiser l'input file
    const fileInput = document.getElementById('project-image-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleCategorySelect = (categoryId: ProjectCategory) => {
    setFormData((prev) => ({ ...prev, category: categoryId }));
    setSelectedCategory(categoryId);
  };

  // CORRECTION: Submit avec upload de fichier
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setUploadProgress(0);

    // Validation
    if (!formData.title.trim()) {
      setError('Le titre est obligatoire');
      return;
    }

    if (!formData.lien.trim()) {
      setError('Le lien est obligatoire');
      return;
    }

    try {
      const formDataToSend = new FormData();
      
      // Champs obligatoires
      formDataToSend.append('title', formData.title.trim());
      formDataToSend.append('link', formData.lien.trim());
      formDataToSend.append('status', formData.status);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('description', formData.description.trim());

      // Technologies
      if (formData.technologies.trim()) {
        const techs = formData.technologies
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean);
        formDataToSend.append('technologies', techs.join(', '));
      }

      // IMPORTANT: Vérifier que c'est bien un fichier
      if (formData.image && formData.image instanceof File) {
        console.log('✅ Upload du fichier:', formData.image.name);
        formDataToSend.append('image', formData.image);
      }

      // Champs optionnels
      if (formData.status === 'en_cours') {
        if (formData.progress !== undefined) {
          formDataToSend.append('progress', formData.progress.toString());
        }
        if (formData.start_date) {
          formDataToSend.append('start_date', formData.start_date);
        }
        if (formData.deadline) {
          formDataToSend.append('deadline', formData.deadline);
        }
      }

      // Pour la modification
      if (editingId) {
        formDataToSend.append('_method', 'PUT');
        console.log('📝 Modification projet ID:', editingId);
        
        await apiClient.post(`/projects/${editingId}`, formDataToSend, {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(percent);
            }
          },
        });
        
        setSuccessMessage('Projet modifié avec succès !');
      } else {
        console.log('➕ Création nouveau projet');
        
        await apiClient.post('/projects', formDataToSend, {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(percent);
            }
          },
        });
        
        setSuccessMessage('Projet ajouté avec succès !');
        onProjectAdded?.();
      }

      await fetchProjects();
      resetForm(true);
    } catch (err: any) {
      console.error('❌ Erreur complète:', err);
      
      // Gestion détaillée des erreurs
      if (err.response) {
        console.error('Réponse serveur:', err.response.data);
        
        if (err.response.status === 422) {
          // Erreurs de validation
          const validationErrors = err.response.data.errors;
          if (validationErrors) {
            const messages = Object.values(validationErrors).flat();
            setError(messages.join(', '));
          } else {
            setError(err.response.data.message || 'Erreur de validation');
          }
        } else if (err.response.status === 401) {
          setError('Non authentifié. Veuillez vous reconnecter.');
        } else if (err.response.status === 413) {
          setError('Fichier trop volumineux pour le serveur');
        } else {
          setError(err.response.data.message || 'Erreur lors de la sauvegarde');
        }
      } else if (err.request) {
        setError('Aucune réponse du serveur. Vérifiez votre connexion.');
      } else {
        setError('Erreur: ' + err.message);
      }
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      technologies: project.technologies || '',
      image: null, // Ne pas mettre l'URL ici, c'est un File
      lien: project.link || project.lien || '',
      status: project.status,
      category: project.category || 'web',
      description: project.description || '',
      progress: project.progress || 0,
      start_date: project.start_date || '',
      deadline: project.deadline || '',
    });
    setSelectedCategory(project.category || 'web');
    setImagePreview(project.image_url || null);
    setEditingId(project.id);
    setShowForm(true);
    setShowAdvancedOptions(project.status === 'en_cours');
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce projet ?')) return;

    try {
      await apiClient.delete(`/projects/${id}`);
      setSuccessMessage('Projet supprimé avec succès');
      await fetchProjects();
    } catch (err) {
      setError('Erreur lors de la suppression');
      console.error('Erreur delete:', err);
    }
  };

  const resetForm = (shouldClose = true) => {
    setFormData({
      title: '',
      technologies: '',
      image: null,
      lien: '',
      status: 'en_cours',
      category: 'web',
      description: '',
      progress: 0,
      start_date: '',
      deadline: '',
    });
    setSelectedCategory('web');
    setImagePreview(null);
    setEditingId(null);
    setUploadProgress(0);
    setShowAdvancedOptions(false);
    
    // Réinitialiser l'input file
    const fileInput = document.getElementById('project-image-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
    
    if (shouldClose) setShowForm(false);
  };

  const getStatusBadge = (status: string) => {
    return status === 'en_cours' ? (
      <span className="inline-flex px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full">
        En cours
      </span>
    ) : (
      <span className="inline-flex px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30 rounded-full">
        Réalisé
      </span>
    );
  };

  const getCategoryBadge = (category: string, category_text?: string) => {
    const cat = CATEGORIES.find(c => c.id === category);
    const Icon = cat?.icon || Grid;
    
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${cat?.lightColor} ${cat?.darkColor}`}>
        <Icon className="w-3 h-3" />
        {category_text || cat?.label || 'Autre'}
      </span>
    );
  };

  // Filtrer les projets
  const filteredProjects = projects.filter(project => {
    if (filterCategory !== 'all' && project.category !== filterCategory) return false;
    if (filterStatus !== 'all' && project.status !== filterStatus) return false;
    return true;
  });

  // Statistiques par catégorie
  const statsByCategory = CATEGORIES.map(cat => ({
    ...cat,
    total: projects.filter(p => p.category === cat.id).length,
    en_cours: projects.filter(p => p.category === cat.id && p.status === 'en_cours').length,
    realise: projects.filter(p => p.category === cat.id && p.status === 'realise').length,
  }));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-10 h-10 animate-spin text-[#e38f00]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Messages d'erreur et succès */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {error}
        </motion.div>
      )}

      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          {successMessage}
        </motion.div>
      )}

      {/* Statistiques par catégorie */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {statsByCategory.map((cat) => {
          const Icon = cat.icon;
          return (
            <div 
              key={cat.id}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-xl p-4 hover:border-[#e38f00]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${cat.color} bg-opacity-20`}>
                  <Icon className={`w-4 h-4 ${cat.color.replace('bg-', 'text-')}`} />
                </div>
                <span className="text-white font-medium text-sm truncate">{cat.label}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{cat.total}</span>
                <div className="text-xs">
                  {cat.en_cours > 0 && (
                    <span className="text-yellow-400 mr-2">{cat.en_cours} en cours</span>
                  )}
                  {cat.realise > 0 && (
                    <span className="text-green-400">{cat.realise} réalisés</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* En-tête + filtres */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Gestion des projets</h2>
            <p className="text-gray-400 mt-1">
              {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} affiché{filteredProjects.length !== 1 ? 's' : ''}
              {projects.length !== filteredProjects.length && ` (sur ${projects.length} total)`}
            </p>
          </div>

          <button
            onClick={() => (showForm ? resetForm(true) : setShowForm(true))}
            className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#e38f00]/30 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            {showForm ? (
              <>
                <X size={18} /> Annuler
              </>
            ) : (
              <>
                <Plus size={18} /> Nouveau projet
              </>
            )}
          </button>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800/50">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-medium text-gray-400 mb-1">Filtrer par catégorie</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#e38f00]"
            >
              <option value="all">Toutes les catégories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-medium text-gray-400 mb-1">Filtrer par statut</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#e38f00]"
            >
              <option value="all">Tous les statuts</option>
              <option value="en_cours">En cours</option>
              <option value="realise">Réalisé</option>
            </select>
          </div>

          {(filterCategory !== 'all' || filterStatus !== 'all') && (
            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterCategory('all');
                  setFilterStatus('all');
                }}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all flex items-center gap-2"
              >
                <X size={16} />
                Réinitialiser
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Formulaire d'ajout/modification */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            {editingId ? 'Modifier le projet' : 'Nouveau projet'}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Titre */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Titre du projet <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="ex: Application de livraison mobile"
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
              />
            </div>

            {/* Catégorie */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Catégorie du projet <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`
                        p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
                        ${isSelected 
                          ? `${cat.color} bg-opacity-20 border-${cat.color} text-white` 
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-500'}
                      `}
                    >
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : ''}`} />
                      <span className="text-xs font-medium text-center">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lien */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Lien du projet <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="url"
                  name="lien"
                  value={formData.lien}
                  onChange={handleChange}
                  required
                  placeholder="https://..."
                  className="w-full px-5 py-4 pl-12 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
                />
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Technologies (séparées par virgule)
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React, Laravel, Tailwind, Node.js..."
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
              />
              <p className="text-xs text-gray-500 mt-1">
                Exemple: React 18, TypeScript, Tailwind CSS
              </p>
            </div>

            {/* Statut */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Statut</label>
              <select
                name="status"
                value={formData.status}
                onChange={(e) => {
                  handleChange(e);
                  setShowAdvancedOptions(e.target.value === 'en_cours');
                }}
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
              >
                <option value="en_cours">En cours de développement</option>
                <option value="realise">Projet réalisé / terminé</option>
              </select>
            </div>

            {/* Options avancées pour projets en cours */}
            {formData.status === 'en_cours' && showAdvancedOptions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700"
              >
                <h4 className="text-sm font-medium text-gray-300">Options avancées</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Progression ({formData.progress}%)
                  </label>
                  <input
                    type="range"
                    name="progress"
                    min="0"
                    max="100"
                    value={formData.progress}
                    onChange={handleNumberChange}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#e38f00]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0%</span>
                    <span className="text-[#e38f00] font-bold">{formData.progress}%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Date de début
                    </label>
                    <input
                      type="date"
                      name="start_date"
                      value={formData.start_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Date de fin prévue
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      min={formData.start_date}
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description du projet
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez le projet, ses objectifs, les résultats obtenus, les défis relevés..."
                rows={5}
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all resize-y"
              />
            </div>

            {/* CORRECTION: Upload d'image */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image du projet
              </label>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Aperçu de l'image */}
                <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                  {imagePreview ? (
                    <>
                      <img 
                        src={imagePreview} 
                        alt="Aperçu" 
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1.5 hover:bg-red-700 transition-all"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-500 mb-2" />
                      <span className="text-xs text-gray-500">Aucune image</span>
                    </div>
                  )}
                </div>

                {/* Bouton de sélection de fichier */}
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    onChange={handleFileChange}
                    className="hidden"
                    id="project-image-upload"
                  />
                  <label
                    htmlFor="project-image-upload"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl items-center gap-2 transition-all cursor-pointer inline-flex"
                  >
                    <Upload size={18} />
                    {formData.image ? 'Changer l\'image' : 'Sélectionner une image'}
                  </label>
                  
                  {/* Nom du fichier sélectionné */}
                  {formData.image && formData.image instanceof File && (
                    <div className="mt-2">
                      <p className="text-sm text-green-400 flex items-center gap-1">
                        <CheckCircle size={14} />
                        Fichier: {formData.image.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Taille: {(formData.image.size / 1024).toFixed(1)} Ko
                      </p>
                    </div>
                  )}
                  
                  {/* Barre de progression upload */}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Upload en cours...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-full transition-all"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-500 mt-2">
                    JPG, PNG, GIF, WebP • Max 2 Mo
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={() => resetForm(true)}
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={uploadProgress > 0 && uploadProgress < 100}
                className="px-8 py-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploadProgress > 0 && uploadProgress < 100 ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Upload en cours...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    {editingId ? 'Modifier le projet' : 'Ajouter le projet'}
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Liste des projets */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-gray-900/50 border border-gray-800 rounded-2xl">
          <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <p className="text-gray-400 text-lg mb-2">Aucun projet trouvé</p>
          <p className="text-gray-500 mb-6">
            {filterCategory !== 'all' || filterStatus !== 'all' 
              ? 'Essayez de modifier vos filtres' 
              : 'Ajoutez votre premier projet'}
          </p>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#e38f00]/30 transition-all"
            >
              Ajouter un projet
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl overflow-hidden hover:border-[#e38f00]/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gray-800">
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      console.error('Erreur chargement image:', project.image_url);
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.image-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }
                    }}
                  />
                ) : null}
                
                {/* Fallback si l'image ne charge pas */}
                <div className={`image-fallback absolute inset-0 flex flex-col items-center justify-center ${project.image_url ? 'hidden' : ''}`}>
                  <ImageIcon className="w-12 h-12 text-gray-600 mb-2" />
                  <span className="text-xs text-gray-500">Image non disponible</span>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10">
                  {getCategoryBadge(project.category, project.category_text)}
                </div>
                <div className="absolute top-3 right-3 z-10">
                  {getStatusBadge(project.status)}
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">{project.title}</h4>

                {/* Progression pour les projets en cours */}
                {project.status === 'en_cours' && project.progress !== undefined && project.progress > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progression</span>
                      <span className="text-[#e38f00] font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description || 'Aucune description disponible'}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(project.created_at).toLocaleDateString('fr-FR')}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#e38f00] hover:underline flex items-center gap-1"
                    >
                      Voir le projet <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies?.split(',').slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                      {tech.trim()}
                    </span>
                  ))}
                  {project.technologies && project.technologies.split(',').length > 3 && (
                    <span className="text-xs bg-gray-800 text-gray-500 px-2 py-1 rounded-full">
                      +{project.technologies.split(',').length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 py-2 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Edit size={14} />
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-900/30 hover:bg-red-800/50 text-red-300 py-2 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Trash2 size={14} />
                    Supprimer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}