import { motion } from 'framer-motion'
import { ExternalLink, Sparkles, TrendingUp, ArrowRight, Loader2, Image as ImageIcon, Smartphone, Globe, Cpu, Monitor, Filter, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'https://newvibecroapi.vibecro.com/api'

interface Project {
  id: number
  title?: string
  technologies?: string | null
  image_url?: string | null
  link?: string | null
  status?: 'en_cours' | 'realise'
  category?: 'mobile' | 'web' | 'desktop' | 'iot' | 'other'
  category_text?: string
  category_class?: string
  category_icon?: string
  status_text?: string
  status_class?: string
  description?: string
  progress?: number
  start_date?: string
  deadline?: string
  created_at?: string
  updated_at?: string
}

interface ProjectStats {
  total: number
  mobile: {
    total: number
    en_cours: number
    realise: number
  }
  web: {
    total: number
    en_cours: number
    realise: number
  }
  other: {
    total: number
    en_cours: number
    realise: number
  }
}

export default function RealisationPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [stats, setStats] = useState<ProjectStats | null>(null)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const filters = [
    { id: 'all', label: 'Tous les projets', icon: '📊', color: 'bg-gray-500' },
    { id: 'mobile', label: 'Applications mobiles', icon: '📱', color: 'bg-blue-500' },
    { id: 'web', label: 'Applications web', icon: '🌐', color: 'bg-purple-500' },
    ]

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const params: any = {}
        if (activeFilter !== 'all') {
          if (activeFilter === 'mobile' || activeFilter === 'web') {
            params.category = activeFilter
          } else if (activeFilter === 'en_cours' || activeFilter === 'realise') {
            params.status = activeFilter === 'en_cours' ? 'en_cours' : 'realise'
          } else if (activeFilter.includes('_')) {
            params.filter = activeFilter
          }
        }

        const response = await axios.get(`${API_URL}/projects`, { params })
        
        let projectList: Project[] = []
        if (Array.isArray(response.data?.data)) {
          projectList = response.data.data
        } else if (response.data && typeof response.data === 'object' && 'data' in response.data) {
          projectList = Array.isArray(response.data.data) ? response.data.data : []
        } else {
          projectList = Array.isArray(response.data) ? response.data : []
        }

        // Tri par date (plus récent en premier)
        projectList.sort((a: Project, b: Project) => {
          const dateA = a.created_at ? new Date(a.created_at).getTime() : 0
          const dateB = b.created_at ? new Date(b.created_at).getTime() : 0
          return dateB - dateA
        })

        setProjects(projectList)
        
        // Récupérer les statistiques
        if (response.data.stats) {
          setStats(response.data.stats)
        }
      } catch (err) {
        setError('Impossible de charger les projets')
        console.error('Erreur:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [activeFilter])

  // Filtrer les projets selon le filtre actif
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'mobile') return project.category === 'mobile'
    if (activeFilter === 'web') return project.category === 'web'
    return true
  })

  const getFilterLabel = (filterId: string) => {
    const filter = filters.find(f => f.id === filterId)
    return filter ? filter.label : 'Tous les projets'
  }

  // Témoignages réels
  const testimonials = [
    {
      company: 'Entreprise X',
      name: 'Sophie Lacroix',
      role: 'Directeur des Operations Translogistiques',
      quote: 'Solution de Tracking innovante. Une visibilité parfaite sur nos actifs et des alertes précieuses pour optimiser nos tournées.'
    },
    {
      company: 'Start-up Y',
      name: 'Thomas Martin',
      role: 'Directeur Marketing Maison Berger',
      quote: 'Refonte complète de notre site et identité visuelle. Un résultat qui allie design percutant et expérience utilisateur fluide.'
    },
    {
      company: 'Société Z',
      name: 'Lea Lopez',
      role: 'DRH, Groupe Santé Plus',
      quote: 'L\'automatisation de nos processus RH est révolutionnaire. Gain de temps considérable et prise de décisions éclairées par l\'IA.'
    },
    {
      company: 'Entreprise X',
      name: 'Philippe Morceau',
      role: 'Directeur Général, Hôtel les Cyprès',
      quote: 'Plateforme sur mesure pour notre hôtellerie. Gestion fluidifiée de la réservation à la facturation pour un service premium.'
    },
    {
      company: 'Start-up Y',
      name: 'Catherine Leroy',
      role: 'Gérante, FraisMarket',
      quote: 'Outils de gestion et de fidélité client idéal. Réduction des ruptures de stock et augmentation significative du panier moyen.'
    },
    {
      company: 'Société Z',
      name: 'Marc Dubois',
      role: 'Directeur Financier, Invest & Consult',
      quote: 'Service conciergerie haut de gamme pour nos voyages. Gestion impeccable des visas, de la logistique et des imprévus.'
    }
  ]

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Modern Glassmorphism Hero */}
      <motion.section className="relative pt-20 pb-32 overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-[#e38f00]/10 rounded-full blur-3xl dark:bg-[#e38f00]/5"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#d48500]/10 rounded-full blur-3xl dark:bg-[#d48500]/5"
        />

        <div className="w-4/5 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Animated Grid of Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-full min-h-96"
            >
              {/* Animated grid background */}
              <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-30">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      borderColor: [
                        'rgba(227, 143, 0, 0.3)',
                        'rgba(227, 143, 0, 0.6)',
                        'rgba(227, 143, 0, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                    className="border-2 rounded-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/5 dark:from-[#e38f00]/5 dark:to-[#d48500]/5 backdrop-blur-sm"
                  />
                ))}
              </div>

              {/* Featured showcase cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: [0 + i * 120, 360 + i * 120],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      className="absolute inset-0"
                      style={{
                        width: 200 + i * 40,
                        height: 200 + i * 40,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="w-full h-full border-2 border-[#e38f00]/20 dark:border-[#e38f00]/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                        {i === 0 && <Sparkles className="w-12 h-12 text-[#e38f00]" />}
                        {i === 1 && <TrendingUp className="w-12 h-12 text-[#d48500]" />}
                        {i === 2 && <ArrowRight className="w-12 h-12 text-[#e38f00]" />}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6"
                >
                  <TrendingUp className="w-5 h-5 text-[#e38f00]" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Cas de Succès</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                  Nos <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">Réalisations</span>
                </h1>
              </div>

              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg">
                Découvrez comment nous avons transformé les visions de nos clients en solutions innovantes et performantes qui dépassent les attentes.
              </p>

              {/* Statistiques rapides */}
              {stats && (
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.mobile.total}</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Apps Mobiles</p>
                    <div className="flex gap-1 text-xs">
                      <span className="text-green-600">{stats.mobile.realise} réalisés</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-yellow-600">{stats.mobile.en_cours} en cours</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.web.total}</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Apps Web</p>
                    <div className="flex gap-1 text-xs">
                      <span className="text-green-600">{stats.web.realise} réalisés</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-yellow-600">{stats.web.en_cours} en cours</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filtres + Projects Grid */}
      <div className="w-4/5 mx-auto mb-20">
        {/* En-tête avec titre et compteur */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
              Nos <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">Réalisations</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              {getFilterLabel(activeFilter)} • {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''}
            </p>
          </div>
          
          {/* Bouton filtre mobile */}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
          >
            <Filter className="w-5 h-5" />
            <span>Filtres</span>
            {activeFilter !== 'all' && (
              <span className="bg-[#e38f00] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {filters.find(f => f.id === activeFilter)?.icon}
              </span>
            )}
          </button>
        </div>

        {/* Filtres Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                group px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300
                flex items-center gap-2 min-w-[140px] justify-center
                ${activeFilter === filter.id
                  ? `${filter.color.replace('bg-', 'bg-')} text-white shadow-lg scale-105`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
            </button>
          ))}
        </div>

        {/* Filtres Mobile (modal) */}
        {showMobileFilters && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filtrer les projets</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id)
                      setShowMobileFilters(false)
                    }}
                    className={`
                      p-4 rounded-xl text-center transition-all duration-300
                      flex flex-col items-center gap-2
                      ${activeFilter === filter.id
                        ? `${filter.color} text-white shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}
                    `}
                  >
                  </button>
                ))}
              </div>
              
              {stats && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-3">Statistiques</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="font-bold">{stats.mobile.total}</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Apps Mobile</span>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="font-bold">{stats.web.total}</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Apps Web</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Grille des projets */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-16 h-16 animate-spin text-[#e38f00] mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Chargement des projets...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <p className="text-red-600 dark:text-red-400 font-medium mb-2">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-[#e38f00] hover:underline"
            >
              Réessayer
            </button>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <span className="text-2xl">📭</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">Aucun projet trouvé</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">
              Essayez de changer de filtre ou revenez plus tard
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-2 bg-[#e38f00] text-white rounded-lg hover:bg-[#d48500] transition-colors"
            >
              Voir tous les projets
            </button>
          </div>
        ) : (
          <>
            {/* Barre de statistiques */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-bold text-2xl">{stats?.mobile.total || 0}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Applications mobiles</span>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 dark:text-green-400 font-semibold">
                      {stats?.mobile.realise || 0} réalisés
                    </div>
                    <div className="text-yellow-600 dark:text-yellow-400 text-sm">
                      {stats?.mobile.en_cours || 0} en cours
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="font-bold text-2xl">{stats?.web.total || 0}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Applications web</span>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 dark:text-green-400 font-semibold">
                      {stats?.web.realise || 0} réalisés
                    </div>
                    <div className="text-yellow-600 dark:text-yellow-400 text-sm">
                      {stats?.web.en_cours || 0} en cours
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="font-bold text-2xl">{stats?.other.total || 0}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Autres projets</span>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 dark:text-green-400 font-semibold">
                      {stats?.other.realise || 0} réalisés
                    </div>
                    <div className="text-yellow-600 dark:text-yellow-400 text-sm">
                      {stats?.other.en_cours || 0} en cours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grille des projets */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id || `project-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-black/30 backdrop-blur rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  {/* En-tête avec catégorie et statut */}
                  <div className="p-4 border-b border-gray-100 dark:border-white/10">
                    <div className="flex justify-between items-center">
                     
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${project.status_class || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'}`}>
                        {project.status === 'realise' ? '✅ Réalisé' : '🔄 En cours'}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title || 'Projet'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                        <ImageIcon className="w-12 h-12 mb-2" />
                        <span className="text-xs">Pas d'image disponible</span>
                      </div>
                    )}
                    
                    {/* Overlay avec titre */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white font-bold text-lg truncate">
                        {project.title || 'Projet sans titre'}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {project.title || 'Projet sans titre'}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 min-h-[4.5rem]">
                      {project.description 
                        ? project.description.length > 150 
                          ? project.description.substring(0, 150) + '...' 
                          : project.description
                        : 'Aucune description disponible pour ce projet.'}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies?.split(',').map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                          >
                            {tech.trim()}
                          </span>
                        )) || <span className="text-xs text-gray-500">Aucune technologie spécifiée</span>}
                      </div>
                    </div>

                    {/* Barre de progression pour les projets en cours */}
                    {project.status === 'en_cours' && project.progress && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                          <span>Progression</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-[#e38f00] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Bouton Voir le projet */}
                    <div className="flex justify-between items-center">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#e38f00] font-bold hover:gap-4 transition-all group/link"
                        >
                          <span>Voir le projet</span>
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <span className="text-gray-500 text-sm">Projet interne</span>
                      )}
                      
                      {/* Date */}
                      {project.created_at && (
                        <span className="text-xs text-gray-500">
                          {new Date(project.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Stats Section - NOS RÉSULTATS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black/50 dark:to-gray-900/50 py-20 mb-20"
      >
        <div className="w-4/5 mx-auto">
          <h2 className="text-5xl font-black text-center text-gray-900 dark:text-white mb-16">
            Nos Résultats en Chiffres
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '150+', label: 'Projets Réussis', color: 'from-[#e38f00] to-[#d48500]' },
              { stat: '98%', label: 'Satisfaction Client', color: 'from-yellow-500 to-yellow-600' },
              { stat: '30+', label: 'Talents Experts',color: 'from-blue-500 to-blue-600' },
              { stat: '$50M', label: 'Valeur Créée', color: 'from-green-500 to-green-600' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                
                <p className={`text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>
                  {item.stat}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials - CE QUE DISENT NOS CLIENTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-5xl font-black text-center text-gray-900 dark:text-white mb-16">
          Ce que Disent Nos Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-black/30 backdrop-blur rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-shadow"
            >
          
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                <p className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{testimonial.role}</p>
                <p className="text-sm text-[#e38f00] font-semibold mt-2">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#e38f00] via-[#e38f00] to-[#d48500] rounded-3xl p-12 max-w-7xl mx-auto px-4 mb-20">
          {/* Effets de fond */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Prêt pour Votre Projet Suivant?</h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoignez nos clients satisfaits et transformons vos idées en solutions innovantes qui font la différence.
            </p>
            <Link
              to="/contact?type=quote"
              className="inline-block bg-white text-[#e38f00] font-bold py-4 px-10 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                <span>Démarrer un Projet</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <p className="text-white/70 text-sm mt-6">
              Réponse sous 24h • Devis gratuit • Consultation personnalisée
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}