// src/components/admin/TeamManager.tsx
import React, { useState, useEffect, useRef } from 'react';
import { teamAPI } from '@/lib/apiClient';
import { Upload, X, User, Loader2, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image?: string;        // ⚠️ Chemin interne (ne pas utiliser pour affichage)
  image_url?: string;    // ✅ URL publique à utiliser pour l'affichage
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface TeamManagerProps {
  onMemberAdded?: () => void;
}

export default function TeamManager({ onMemberAdded }: TeamManagerProps) {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    twitter: '',
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setIsLoading(true);
      setError('');
      const response = await teamAPI.getAll();
      
      // Debug: voir ce que renvoie l'API
      console.log('📥 Réponse API TeamMembers:', response.data);
      
      // La structure peut être response.data.data ou response.data
      const membersData = response.data?.data || response.data || [];
      setMembers(Array.isArray(membersData) ? membersData : []);
      
    } catch (err: any) {
      setError('Erreur lors du chargement des membres');
      console.error('❌ Erreur fetchMembers:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validation du type de fichier
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Format non supporté (JPEG, PNG, GIF, WebP)');
      return;
    }

    // Validation de la taille (max 5 Mo)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image trop volumineuse (max 5 Mo)');
      return;
    }

    setImageFile(file);
    setError('');

    // Créer un aperçu local
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!formData.name.trim() || !formData.position.trim()) {
      setError('Le nom et le poste sont obligatoires');
      return;
    }

    try {
      setIsUploading(true);

      const formDataToSend = new FormData();
      
      // Ajouter tous les champs du formulaire
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });
      
      // Ajouter l'image si elle existe
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      const isNewMember = !editingId;

      if (editingId) {
        // Mode édition
        await teamAPI.update(editingId, formDataToSend);
        setSuccessMessage('Membre modifié avec succès !');
      } else {
        // Mode création
        await teamAPI.create(formDataToSend);
        setSuccessMessage('Membre ajouté avec succès !');
      }

      // Notifier le parent si nécessaire
      if (isNewMember && onMemberAdded) {
        onMemberAdded();
      }

      // Rafraîchir la liste
      await fetchMembers();
      resetForm();

    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || 'Erreur lors de l\'enregistrement';
      setError(msg);
      console.error('❌ Erreur submit:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Confirmer la suppression de ce membre ?')) return;

    try {
      await teamAPI.delete(id);
      setSuccessMessage('Membre supprimé avec succès');
      await fetchMembers();
    } catch (err: any) {
      setError('Erreur lors de la suppression');
      console.error('❌ Erreur delete:', err);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setFormData({
      name: member.name,
      position: member.position,
      email: member.email || '',
      phone: member.phone || '',
      linkedin: member.linkedin || '',
      github: member.github || '',
      twitter: member.twitter || '',
    });
    
    // ✅ Utiliser image_url pour l'aperçu (pas image)
    setImagePreview(member.image_url || null);
    setImageFile(null);
    setEditingId(member.id);
    setShowForm(true);
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setImageFile(null);
    setImagePreview(null);
    setFormData({
      name: '',
      position: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      twitter: '',
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-[#e38f00]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Messages de feedback */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 flex items-center gap-3"
        >
          <X className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{successMessage}</span>
        </motion.div>
      )}

      {/* En-tête */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Gestion de l'équipe</h2>
          <p className="text-gray-400 mt-1">
            {members.length} membre{members.length !== 1 ? 's' : ''}
          </p>
        </div>

        <button
          onClick={() => (showForm ? resetForm() : setShowForm(true))}
          className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#e38f00]/30 transition-all flex items-center gap-2 disabled:opacity-50"
          disabled={isUploading}
        >
          {showForm ? (
            <>
              <X size={18} /> Annuler
            </>
          ) : (
            <>
              <User size={18} /> Ajouter un membre
            </>
          )}
        </button>
      </div>

      {/* Formulaire d'ajout/modification */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            {editingId ? 'Modifier le membre' : 'Nouveau membre'}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Photo */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Photo du membre
              </label>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Aperçu de l'image */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                  {imagePreview ? (
                    <>
                      <img 
                        src={imagePreview} 
                        alt="Aperçu" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error('❌ Erreur chargement aperçu:', imagePreview);
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23374151\'/%3E%3Ctext x=\'50\' y=\'50\' font-size=\'14\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%239ca3af\'%3EErreur%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1.5 hover:bg-red-700 transition-all"
                        disabled={isUploading}
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <User className="w-12 h-12 text-gray-500 mb-2" />
                      <span className="text-xs text-gray-500">Aucune photo</span>
                    </div>
                  )}
                </div>

                {/* Bouton de sélection */}
                <div className="flex-1">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    className="hidden"
                    id="team-image-upload"
                  />
                  <label
                    htmlFor="team-image-upload"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Upload size={18} />
                    {imageFile ? 'Changer la photo' : 'Choisir une photo'}
                  </label>
                  
                  {/* Nom du fichier sélectionné */}
                  {imageFile && (
                    <p className="text-sm text-green-400 mt-2 flex items-center gap-1">
                      <CheckCircle size={14} />
                      {imageFile.name}
                    </p>
                  )}
                  
                  <p className="text-sm text-gray-500 mt-2">
                    JPG, PNG, GIF, WebP • Max 5 Mo
                  </p>
                </div>
              </div>
            </div>

            {/* Champs texte - 2 colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 outline-none transition-all"
                  placeholder="Ex: Jean Dupont"
                  required
                  disabled={isUploading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Poste / Rôle <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={e => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 outline-none transition-all"
                  placeholder="Ex: Développeur Full Stack"
                  required
                  disabled={isUploading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 outline-none transition-all"
                  placeholder="jean@exemple.com"
                  disabled={isUploading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 outline-none transition-all"
                  placeholder="+33 6 12 34 56 78"
                  disabled={isUploading}
                />
              </div>
            </div>

            {/* Réseaux sociaux - 3 colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 outline-none transition-all"
                  disabled={isUploading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">GitHub</label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={e => setFormData({ ...formData, github: e.target.value })}
                  placeholder="https://github.com/..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 outline-none transition-all"
                  disabled={isUploading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Twitter / X</label>
                <input
                  type="url"
                  value={formData.twitter}
                  onChange={e => setFormData({ ...formData, twitter: e.target.value })}
                  placeholder="https://twitter.com/..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 outline-none transition-all"
                  disabled={isUploading}
                />
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={resetForm}
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all disabled:opacity-50"
                disabled={isUploading}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  <>
                    {editingId ? 'Mettre à jour' : 'Ajouter le membre'}
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Liste des membres - CORRIGÉ avec fallback sans placeholder externe */}
      {members.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Membres de l'équipe</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl overflow-hidden hover:border-[#e38f00]/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    {/* Photo - avec fallback intégré (pas de requête externe) */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700 flex-shrink-0">
                      {member.image_url ? (
                        <>
                          <img 
                            src={member.image_url} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error('❌ Erreur chargement image:', member.image_url);
                              // Cacher l'image en erreur
                              e.currentTarget.style.display = 'none';
                              // Afficher le fallback
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                const fallback = parent.querySelector('.image-fallback');
                                if (fallback) {
                                  fallback.classList.remove('hidden');
                                }
                              }
                            }}
                          />
                          {/* Fallback qui s'affiche en cas d'erreur */}
                          <div className="image-fallback absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800 hidden">
                            <User className="w-8 h-8 text-gray-500" />
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="w-8 h-8 text-gray-500" />
                        </div>
                      )}
                    </div>

                    {/* Infos membre */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-white truncate">{member.name}</h4>
                      <p className="text-[#e38f00] text-sm truncate">{member.position}</p>
                      {member.email && (
                        <p className="text-gray-400 text-sm truncate mt-1">{member.email}</p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(member)}
                        className="p-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 rounded-lg transition-all"
                        disabled={isUploading}
                        title="Modifier"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(member.id)}
                        className="p-2 bg-red-600/20 hover:bg-red-600/40 text-red-300 rounded-lg transition-all"
                        disabled={isUploading}
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* État vide */}
      {members.length === 0 && !isLoading && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 bg-gray-900/50 border border-gray-800 rounded-2xl"
        >
          <User className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <p className="text-gray-400 text-lg mb-2">Aucun membre dans l'équipe</p>
          <p className="text-gray-500 mb-6">Commencez par ajouter votre premier membre</p>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#e38f00]/30 transition-all"
            >
              Ajouter un membre
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}