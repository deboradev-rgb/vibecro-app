// src/components/admin/ProjectsManager.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { handleApiError } from '../../lib/apiClient';
import {
  Save, X, AlertCircle, Upload, CheckCircle, Plus, Loader2,
  Edit, Trash2, Image as ImageIcon, Calendar, Link as LinkIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || 'https://newvibecroapi.vibecro.com/api';

interface ProjectFormData {
  title: string;
  technologies: string;
  image: File | null;
  lien: string;
  status: 'en_cours' | 'realise';
  description: string;
}

interface Project {
  id: number;
  title: string;
  technologies: string | null;
  image: string | null;
  image_url?: string;
  lien?: string;
  status: 'en_cours' | 'realise';
  description?: string;
  created_at: string;
}

// ← Ajout important : typage des props (résout l'erreur IntrinsicAttributes)
interface ProjectsManagerProps {
  onProjectAdded?: () => void;
}

export default function ProjectsManager({ onProjectAdded }: ProjectsManagerProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    technologies: '',
    image: null,
    lien: '',
    status: 'en_cours',
    description: '',
  });

  const apiClient = axios.create({
    baseURL: API_URL,
    headers: { Accept: 'application/json' },
  });

  apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setError('Image trop volumineuse (max 2 Mo)');
      return;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Format non supporté (JPG, PNG, GIF, WebP)');
      return;
    }

    setFormData((prev) => ({ ...prev, image: file }));

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title.trim());
      formDataToSend.append('link', formData.lien.trim()); // attention : backend attend "link" ?
      formDataToSend.append('status', formData.status);
      formDataToSend.append('description', formData.description.trim());

      if (formData.technologies.trim()) {
        const techs = formData.technologies
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean);
        formDataToSend.append('technologies', techs.join(', '));
      }

      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      if (editingId) {
        // Laravel accepte souvent POST + _method=PUT
        formDataToSend.append('_method', 'PUT');
        await apiClient.post(`/projects/${editingId}`, formDataToSend);
        setSuccessMessage('Projet modifié avec succès !');
      } else {
        await apiClient.post('/projects', formDataToSend);
        setSuccessMessage('Projet ajouté avec succès !');
        onProjectAdded?.(); // ← Appel de la prop quand un projet est créé
      }

      await fetchProjects();
      resetForm(true);
    } catch (err: any) {
      const errMsg = handleApiError?.(err) ?? 'Erreur lors de la sauvegarde';
      setError(errMsg);
      console.error('Erreur submit projet:', err);
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      technologies: project.technologies || '',
      image: null,
      lien: project.lien ||'',
      status: project.status,
      description: project.description || '',
    });
    setImagePreview(project.image_url || null);
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce projet ?')) return;

    try {
      await apiClient.delete(`/projects/${id}`);
      setSuccessMessage('Projet supprimé');
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
      description: '',
    });
    setImagePreview(null);
    setEditingId(null);
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-10 h-10 animate-spin text-[#e38f00]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
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

      {/* En-tête + bouton nouveau */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Gestion des projets</h2>
          <p className="text-gray-400 mt-1">
            {projects.length} projet{projects.length !== 1 ? 's' : ''}
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
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Technologies (séparées par virgule)
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React, Laravel, Tailwind..."
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Statut</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
              >
                <option value="en_cours">En cours</option>
                <option value="realise">Réalisé</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description du projet
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez le projet, ses objectifs, résultats obtenus..."
                rows={5}
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all resize-y"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Image du projet</label>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                  {imagePreview ? (
                    <>
                      <img src={imagePreview} alt="Aperçu" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1.5 hover:bg-red-700"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-500" />
                    </div>
                  )}
                </div>

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
                    Choisir une image
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    JPG, PNG, GIF, WebP • Max 2 Mo
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6">
              <button
                type="button"
                onClick={() => resetForm(true)}
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Save size={18} />
                {editingId ? 'Modifier' : 'Ajouter'}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {projects.length === 0 ? (
        <div className="text-center py-16 bg-gray-900/50 border border-gray-800 rounded-2xl">
          <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <p className="text-gray-400 mb-4">Aucun projet ajouté pour le moment</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#e38f00]/30 transition-all"
          >
            Ajouter un projet
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl overflow-hidden hover:border-[#e38f00]/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-600" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">{project.title}</h4>

                <div className="flex items-center justify-between mb-4">
                  {getStatusBadge(project.status)}
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    {new Date(project.created_at).toLocaleDateString('fr-FR')}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description || 'Aucune description disponible'}
                </p>

                <p className="text-gray-400 text-sm mb-4">
                  {project.technologies || 'Aucune technologie spécifiée'}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 py-2 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Edit size={16} />
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-900/30 hover:bg-red-800/50 text-red-300 py-2 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} />
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