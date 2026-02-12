// src/components/admin/BlogManager.tsx
import React, { useState, useEffect, useRef } from 'react';
import { blogAPI } from '@/lib/apiClient';
import { 
  Plus, Pencil, Trash2, Loader2, X, Check, Eye, Edit, Save,
  Upload, Image as ImageIcon, Calendar, CheckCircle, AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string | null;
  featured_image_url?: string | null;
  category?: string | null;
  author?: string | null;
  published_at: string;
  status: 'draft' | 'published';
  reading_time?: number | null;
  created_at: string;
}

interface BlogManagerProps {
  onPostSaved?: () => void;
}

export default function BlogManager({ onPostSaved }: BlogManagerProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // ✅ Upload d'image
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Formulaire
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [author, setAuthor] = useState('Vibecro');
  const [publishedAt, setPublishedAt] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  // Charger les articles au montage
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await blogAPI.getAll();
      const postsData = response.data.data || response.data || [];
      setPosts(Array.isArray(postsData) ? postsData : []);
    } catch (err: any) {
      setError('Impossible de charger les articles');
      console.error('❌ Erreur fetch posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Gestion de l'upload d'image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validation du type
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
    setError(null);

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

  // ✅ Soumission du formulaire avec FormData
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Validations
    if (!title.trim()) {
      setError('Le titre est obligatoire');
      return;
    }
    if (!content.trim()) {
      setError('Le contenu est obligatoire');
      return;
    }
    if (!excerpt.trim()) {
      setError('L\'extrait est obligatoire');
      return;
    }

    try {
      setIsSubmitting(true);

      // ✅ Créer FormData pour l'upload
      const formData = new FormData();
      
      formData.append('title', title.trim());
      formData.append('excerpt', excerpt.trim());
      formData.append('content', content.trim());
      formData.append('category', category.trim() || 'Non catégorisé');
      formData.append('status', status);
      formData.append('published_at', publishedAt);
      formData.append('author', author.trim());

      // ✅ Ajouter l'image si elle existe
      if (imageFile) {
        formData.append('featured_image', imageFile);
      }

      let response;
      
      if (editingPost) {
        // Mode édition
        response = await blogAPI.update(editingPost.id, formData);
        setSuccessMessage('✅ Article modifié avec succès !');
      } else {
        // Mode création
        response = await blogAPI.create(formData);
        setSuccessMessage('✅ Article créé avec succès !');
      }

      console.log('✅ Réponse:', response.data);

      setFormOpen(false);
      resetForm();
      await fetchPosts();
      onPostSaved?.();

    } catch (err: any) {
      console.error('❌ Erreur submit:', err);
      
      // Gestion détaillée des erreurs
      if (err.response?.data?.errors) {
        const errors = Object.values(err.response.data.errors).flat();
        setError(errors.join(', '));
      } else {
        setError(err.response?.data?.message || err.message || 'Erreur lors de la sauvegarde');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cet article ? Cette action est irréversible.')) return;
    
    try {
      await blogAPI.delete(id);
      setSuccessMessage('✅ Article supprimé avec succès');
      await fetchPosts();
      
      // Effacer le message après 3 secondes
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: any) {
      setError('Erreur lors de la suppression');
      console.error('❌ Erreur delete:', err);
    }
  };

 const startEdit = (post: BlogPost) => {
  setEditingPost(post);
  setTitle(post.title);
  setExcerpt(post.excerpt || '');
  setContent(post.content);
  setCategory(post.category || '');
  setAuthor(post.author || 'Vibecro');
  setStatus(post.status);
  
  // ✅ CORRIGÉ : Gère le cas où published_at est null
  if (post.published_at) {
    setPublishedAt(post.published_at.split('T')[0]);
  } else {
    // Si pas de date, on met la date d'aujourd'hui
    setPublishedAt(new Date().toISOString().split('T')[0]);
  }
  
  // ✅ Utiliser featured_image_url pour l'aperçu
  setImagePreview(post.featured_image_url || post.featured_image || null);
  setImageFile(null);
  setFormOpen(true);
};

  const resetForm = () => {
    setEditingPost(null);
    setTitle('');
    setExcerpt('');
    setContent('');
    setCategory('');
    setAuthor('Vibecro');
    setStatus('draft');
    setImageFile(null);
    setImagePreview(null);
    setPublishedAt(new Date().toISOString().split('T')[0]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-[#e38f00]" />
        <p className="ml-4 text-slate-400">Chargement des articles...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Messages d'erreur et de succès */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="flex-1">{error}</span>
          <button onClick={() => setError(null)} className="text-red-300 hover:text-red-100">
            <X size={18} />
          </button>
        </motion.div>
      )}

      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="flex-1">{successMessage}</span>
          <button onClick={() => setSuccessMessage(null)} className="text-green-300 hover:text-green-100">
            <X size={18} />
          </button>
        </motion.div>
      )}

      {/* En-tête */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Gestion du Blog</h2>
          <p className="text-slate-400 mt-1">
            {posts.length} article{posts.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <button
          onClick={() => {
            resetForm();
            setFormOpen(true);
          }}
          className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#e38f00]/30 transition-all flex items-center gap-2"
        >
          <Plus size={18} />
          Nouvel article
        </button>
      </div>

      {/* Formulaire d'ajout/modification */}
      {formOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">
              {editingPost ? 'Modifier l\'article' : 'Nouvel article'}
            </h3>
            <button 
              onClick={() => setFormOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={20} className="text-slate-400 hover:text-white" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ✅ Upload d'image */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image à la une
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
                        onClick={removeImage}
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

                {/* Bouton de sélection */}
                <div className="flex-1">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    className="hidden"
                    id="blog-image-upload"
                  />
                  <label
                    htmlFor="blog-image-upload"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer w-fit"
                  >
                    <Upload size={18} />
                    {imageFile ? 'Changer l\'image' : 'Choisir une image'}
                  </label>
                  {imageFile && (
                    <p className="text-sm text-green-400 mt-2 flex items-center gap-1">
                      <CheckCircle size={14} />
                      {imageFile.name} ({(imageFile.size / 1024).toFixed(1)} Ko)
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    JPG, PNG, GIF, WebP • Max 5 Mo
                  </p>
                </div>
              </div>
            </div>

            {/* Titre */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Titre <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30"
                placeholder="Titre de l'article"
              />
            </div>

            {/* Extrait */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Extrait (résumé) <span className="text-red-400">*</span>
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30"
                placeholder="Court résumé de l'article..."
              />
            </div>

            {/* Contenu */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contenu <span className="text-red-400">*</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={12}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 font-mono"
                placeholder="Contenu de l'article (HTML supporté)..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Vous pouvez utiliser du HTML pour la mise en forme.
              </p>
            </div>

            {/* Catégorie, Auteur, Statut, Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Catégorie
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00]"
                  placeholder="IoT, IA, Web..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Auteur
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00]"
                  placeholder="Nom de l'auteur"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Statut
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00]"
                >
                  <option value="draft">Brouillon</option>
                  <option value="published">Publié</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Date de publication
                </label>
                <input
                  type="date"
                  value={publishedAt}
                  onChange={(e) => setPublishedAt(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#e38f00]"
                />
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    {editingPost ? 'Mettre à jour' : 'Publier'}
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Liste des articles */}
      <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-xl font-semibold text-white">
            Tous les articles ({posts.length})
          </h3>
        </div>

        {posts.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <ImageIcon className="w-10 h-10 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg mb-2">Aucun article pour le moment</p>
            <p className="text-gray-500 mb-6">Commencez par créer votre premier article</p>
            {!formOpen && (
              <button
                onClick={() => {
                  resetForm();
                  setFormOpen(true);
                }}
                className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <Plus size={18} />
                Créer un article
              </button>
            )}
          </div>
        ) : (
          <div className="divide-y divide-gray-800">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Image miniature */}
                  <div className="lg:w-32 h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                    {(post.featured_image_url || post.featured_image) ? (
                      <img 
                        src={post.featured_image_url || post.featured_image || ''} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const fallback = parent.querySelector('.image-fallback');
                            if (fallback) fallback.classList.remove('hidden');
                          }
                        }}
                      />
                    ) : null}
                    <div className={`image-fallback w-full h-full flex items-center justify-center ${(post.featured_image_url || post.featured_image) ? 'hidden' : ''}`}>
                      <ImageIcon className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>

                  {/* Infos article */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.status === 'published' 
                          ? 'bg-green-600/20 text-green-300 border border-green-500/30'
                          : 'bg-yellow-600/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {post.status === 'published' ? 'Publié' : 'Brouillon'}
                      </span>
                      {post.category && (
                        <span className="bg-[#e38f00]/10 text-[#e38f00] px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      )}
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.published_at)}
                      </span>
                      {post.reading_time && (
                        <span className="text-gray-500 text-xs">
                          {post.reading_time} min de lecture
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-2 hover:text-[#e38f00] transition-colors">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e38f00] hover:text-[#d48500] text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        <Eye size={16} />
                        Voir l'article
                      </a>
                      
                      <button
                        onClick={() => startEdit(post)}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        <Edit size={16} />
                        Modifier
                      </button>
                      
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        <Trash2 size={16} />
                        Supprimer
                      </button>
                    </div>
                  </div>

                  {/* Slug */}
                  <div className="lg:w-48 text-right">
                    <p className="text-xs text-gray-500 mb-1">Slug</p>
                    <p className="text-sm text-gray-400 font-mono truncate">
                      {post.slug}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}