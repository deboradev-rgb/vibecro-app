// src/pages/BlogPage.tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, BookOpen, AlertCircle, CheckCircle as CheckCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogAPI } from '@/lib/apiClient'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content?: string
  featured_image?: string | null
  author?: string | null
  category?: string | null
  published_at: string
  reading_time?: number | null
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Deux images plus adaptées au thème "blog" : ambiance rédaction / contenu / inspiration
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Plume et carnet moderne – ambiance blog créatif et écriture"
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Ordinateur avec contenu digital – inspiration blog et rédaction"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // changement toutes les 5 secondes
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await blogAPI.getAll()
        const postsData = response.data.data || response.data || []
        setPosts(postsData)
      } catch (err) {
        console.error('Erreur chargement blog:', err)
        setError('Impossible de charger les articles pour le moment. Veuillez réessayer plus tard.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <>
      <div className="relative min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black ">

        {/* Hero Section – exactement comme Contact */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative pt-20 pb-16 overflow-hidden"
        >
          <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Gauche : Carrousel d'images blog */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    src={heroImages[activeImageIndex].url}
                    alt={heroImages[activeImageIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </AnimatePresence>

                {/* Overlay gradient animé */}
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/40 via-transparent to-black/40 z-[2]"
                />
                
                {/* Icônes flottantes */}
                <motion.div
                  animate={{ y: [0, -30, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-10 right-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-[3]"
                >
                  <BookOpen className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 30, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-10 left-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-[3]"
                >
                  <ArrowRight className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>

              {/* Droite : Texte */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
                  <BookOpen className="w-5 h-5 text-[#e38f00]" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Blog</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                  Notre <span className="text-[#e38f00] dark:text-[#f44d0b]">Blog</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
                  Actualités, conseils experts, études de cas et nouveautés sur l'IoT, l'IA, le développement web et la transformation digitale.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Articles publiés régulièrement',
                    'Conseils concrets et applicables',
                    'Focus sur l\'innovation en Afrique'
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-[#e38f00] flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Liste des articles */}
        <motion.section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/30 dark:to-black/50">
          <div className="w-4/5 mx-auto">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white dark:bg-black/30 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10 animate-pulse h-[480px]"
                    />
                  ))}
                </div>
              ) : error ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 bg-red-50/50 dark:bg-red-950/30 rounded-3xl border border-red-200 dark:border-red-800/40 p-10"
                >
                  <AlertCircle className="w-16 h-16 mx-auto text-red-500 dark:text-red-400 mb-6" />
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
                    Une erreur est survenue
                  </h3>
                  <p className="text-red-600 dark:text-red-400 mb-6 max-w-xl mx-auto">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    Réessayer
                  </button>
                </motion.div>
              ) : posts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-24"
                >
                  <BookOpen className="w-20 h-20 mx-auto text-slate-400 dark:text-slate-600 mb-6" />
                  <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">
                    Aucun article pour le moment
                  </h2>
                  <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Nous préparons du contenu de qualité pour vous. Revenez bientôt !
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group bg-white dark:bg-black/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-slate-200/50 dark:border-white/10 flex flex-col h-full"
                    >
                      {post.featured_image ? (
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        </div>
                      ) : (
                        <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#f44d0b]/10 dark:to-[#e3440a]/10 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-[#e38f00]/30 dark:text-[#f44d0b]/30" />
                        </div>
                      )}

                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-5">
                          {post.category && (
                            <span className="bg-[#e38f00]/10 dark:bg-[#f44d0b]/20 text-[#e38f00] dark:text-[#f44d0b] px-3 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          )}
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <time>{formatDate(post.published_at)}</time>
                          </div>
                          {post.reading_time && (
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              <span>{post.reading_time} min</span>
                            </div>
                          )}
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#e38f00] dark:group-hover:text-[#f44d0b] transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3 flex-grow">
                          {post.excerpt || (post.content ? post.content.substring(0, 140) + '...' : 'Découvrez les détails dans l’article complet.')}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/70 dark:border-white/10">
                          {post.author && (
                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                          )}

                          <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e38f00] hover:text-[#d48500] text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        Voir l'article
                        <ArrowRight className="w-5 h-5 transition-transform hover:translate-x-1" />
                      </a>

                          
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* CTA final */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 lg:py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Envie d'en savoir plus ?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos projets IoT, IA, web ou transformation digitale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#e38f00] text-[#e38f00] dark:text-[#f44d0b] font-bold py-4 px-8 rounded-2xl hover:bg-[#e38f00]/10 transition-all"
              >
                <span>Contactez-nous</span>
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}