import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, BookOpen, Share2, Linkedin, Twitter, Facebook, AlertCircle } from 'lucide-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { blogAPI } from '@/lib/apiClient'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image?: string | null
  featured_image_url?: string | null
  author?: string | null
  category?: string | null
  status: 'draft' | 'published'
  published_at: string
  reading_time?: number | null
  created_at: string
  updated_at: string
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return
      
      try {
        setIsLoading(true)
        setError(null)
        const response = await blogAPI.getBySlug(slug)
        const postData = response.data.data || response.data
        setPost(postData)
        
        // Mettre à jour le titre de la page
        document.title = `${postData.title} - Vibecro Blog`
      } catch (err) {
        console.error('❌ Erreur chargement article:', err)
        setError('Impossible de charger l\'article. Il a peut-être été supprimé.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()

    // Cleanup
    return () => {
      document.title = 'Vibecro - Blog'
    }
  }, [slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const shareArticle = (platform: string) => {
    const url = window.location.href
    const title = post?.title || 'Article Vibecro'
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('🔗 Lien copié dans le presse-papier !')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#e38f00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Chargement de l'article...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center bg-red-50/50 dark:bg-red-950/30 rounded-3xl border border-red-200 dark:border-red-800/40 p-10"
        >
          <AlertCircle className="w-16 h-16 mx-auto text-red-500 dark:text-red-400 mb-6" />
          <h1 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
            Article non trouvé
          </h1>
          <p className="text-red-600 dark:text-red-400 mb-6">
            {error || "L'article que vous recherchez n'existe pas ou a été supprimé."}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black">
      
      {/* Hero Section avec image */}
      <section className="relative pt-20 pb-16">
        <div className="w-4/5 mx-auto max-w-7xl">
          
          {/* Bouton retour */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#e38f00] dark:hover:text-[#f44d0b] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Retour au blog
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Image de l'article */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              {post.featured_image_url || post.featured_image ? (
                <img
                  src={post.featured_image_url || post.featured_image}
                  alt={post.title}
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    console.error('❌ Erreur chargement image:', e.currentTarget.src)
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      const fallback = parent.querySelector('.image-fallback')
                      if (fallback) fallback.classList.remove('hidden')
                    }
                  }}
                />
              ) : null}
              
              {/* Fallback si pas d'image */}
              <div className={`image-fallback w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-[#e38f00]/20 to-[#d48500]/20 dark:from-[#f44d0b]/20 dark:to-[#e3440a]/20 flex items-center justify-center ${post.featured_image_url || post.featured_image ? 'hidden' : ''}`}>
                <BookOpen className="w-24 h-24 text-[#e38f00]/40 dark:text-[#f44d0b]/40" />
              </div>
              
              {/* Catégorie en overlay */}
              {post.category && (
                <div className="absolute top-6 left-6 bg-[#e38f00] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {post.category}
                </div>
              )}
            </motion.div>

            {/* Métadonnées et titre */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{post.author || 'Équipe Vibecro'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{formatDate(post.published_at)}</time>
                </div>
                {post.reading_time && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.reading_time} min de lecture</span>
                  </div>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-[#e38f00] pl-6">
                  {post.excerpt}
                </p>
              )}

              {/* Boutons de partage */}
              <div className="pt-6">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                  Partager cet article :
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => shareArticle('twitter')}
                    className="p-3 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-white rounded-xl transition-all"
                    title="Partager sur Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareArticle('linkedin')}
                    className="p-3 bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white rounded-xl transition-all"
                    title="Partager sur LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareArticle('facebook')}
                    className="p-3 bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white rounded-xl transition-all"
                    title="Partager sur Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={copyLink}
                    className="p-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-xl transition-all"
                    title="Copier le lien"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-16 lg:py-24 bg-white dark:bg-black/50">
        <div className="w-4/5 mx-auto max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-slate dark:prose-invert max-w-none"
          >
            {/* Affichage du contenu HTML */}
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="blog-content"
            />
          </motion.article>

          {/* Footer de l'article */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Publié le {formatDate(post.published_at)}
              </div>
              
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[#e38f00] dark:text-[#f44d0b] font-medium hover:gap-3 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voir tous les articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Styles CSS pour le contenu du blog */}
      <style>{`
        .blog-content {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #1e293b;
        }
        .dark .blog-content {
          color: #e2e8f0;
        }
        .blog-content h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 1.75rem;
          margin-bottom: 0.875rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content a {
          color: #e38f00;
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 2px;
        }
        .blog-content a:hover {
          color: #d48500;
        }
        .blog-content blockquote {
          border-left: 4px solid #e38f00;
          padding-left: 1rem;
          font-style: italic;
          color: #64748b;
          margin: 1.5rem 0;
        }
        .dark .blog-content blockquote {
          color: #94a3b8;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 1rem;
          margin: 1.5rem 0;
        }
        .blog-content code {
          background: #f1f5f9;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        .dark .blog-content code {
          background: #1e293b;
        }
        .blog-content pre {
          background: #0f172a;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  )
}