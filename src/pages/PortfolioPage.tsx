import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Sparkles, TrendingUp, ArrowRight, Users, Linkedin, Mail, Github, Loader2, Image as ImageIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

interface Project {
  id: number
  title?: string
  technologies?: string | null
  image_url?: string | null
  link?: string | null
  status?: 'en_cours' | 'realise'
  description?: string   // ← remplacé priority par description
  created_at?: string
}

export default function PortfolioPage() {
  useEffect(() => {
    const handleMouseMove = () => {
      // Mouse tracking for future animations
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await axios.get(`${API_URL}/projects`)
        console.log('[DEBUG] Réponse API complète /projects :', response.data)

        let projectList: Project[] = []

        if (Array.isArray(response.data?.data)) {
          projectList = response.data.data
        } else if (Array.isArray(response.data)) {
          projectList = response.data
        }

        // Sécurité
        projectList = projectList.filter(p => p && p.id != null)

        // Tri par date (plus récent en premier)
        projectList.sort((a, b) => {
          const dateA = a.created_at ? new Date(a.created_at).getTime() : 0
          const dateB = b.created_at ? new Date(b.created_at).getTime() : 0
          return dateB - dateA
        })

        console.log('[DEBUG] Projets chargés pour affichage :', projectList)
        setProjects(projectList)
      } catch (err) {
        console.error('Erreur chargement projets:', err)
        setError('Impossible de charger les projets')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const testimonials = [
    {
      company: 'TechStartup Inc',
      name: 'Marie Dupont',
      role: 'CEO',
      quote: 'VIBECRO a transformé notre vision en réalité. Leur expertise IoT est incomparable.'
    },
    {
      company: 'Global Logistics',
      name: 'Pierre Martin',
      role: 'CTO',
      quote: 'La solution a réduit nos coûts de 40% et augmenté notre efficacité drastiquement.'
    },
    {
      company: 'Fashion Retail Co',
      name: 'Sophie Leclerc',
      role: 'Product Manager',
      quote: 'Le design et l\'expérience utilisateur dépassent nos attentes. Nos clients adorent.'
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Benali',
      role: 'CEO & Fondateur',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Expert en stratégie digitale avec 15 ans d\'expérience',
      skills: ['Leadership', 'IoT', 'Business Development'],
      linkedin: '#',
      email: 'ahmed@vibecro.com'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Architecte logiciel spécialisée en IA et Big Data',
      skills: ['AI/ML', 'Cloud', 'System Design'],
      linkedin: '#',
      github: '#',
      email: 'sarah@vibecro.com'
    },
    {
      id: 3,
      name: 'Karim Ould',
      role: 'Lead Développeur IoT',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Ingénieur IoT passionné par les objets connectés',
      skills: ['Embedded Systems', 'Python', 'LoRaWAN'],
      linkedin: '#',
      github: '#',
      email: 'karim@vibecro.com'
    },
    {
      id: 4,
      name: 'Fatima Zohra',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      description: 'Designer d\'expérience utilisateur créative et innovante',
      skills: ['Figma', 'Prototyping', 'User Research'],
      linkedin: '#',
      behance: '#',
      email: 'fatima@vibecro.com'
    },
    {
      id: 5,
      name: 'Mohamed Diallo',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Spécialiste en infrastructure cloud et automatisation',
      skills: ['AWS', 'Kubernetes', 'CI/CD'],
      linkedin: '#',
      github: '#',
      email: 'mohamed@vibecro.com'
    },
    {
      id: 6,
      name: 'Leila Martin',
      role: 'Responsable RH-IA',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      description: 'Experte en solutions RH intelligentes et analyse de talents',
      skills: ['HR Analytics', 'Recruitment AI', 'Talent Management'],
      linkedin: '#',
      email: 'leila@vibecro.com'
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
                  Notre <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">Portfolio</span>
                </h1>
              </div>

              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg">
                Découvrez comment nous avons transformé les visions de nos clients en solutions innovantes et performantes qui dépassent les attentes.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                {[
                  { label: '50+', value: 'Projets réalisés' },
                  { label: '30+', value: 'Clients satisfaits' },
                  { label: '100%', value: 'Succès client' },
                  { label: '5★', value: 'Note moyenne' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="space-y-2"
                  >
                    <p className="text-3xl font-black text-[#e38f00]">{stat.label}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <Link
                  to="/contact?type=project"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  <span>Voir tous les projets</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid – AFFICHAGE DE DESCRIPTION AU LIEU DE PRIORITÉ */}
      <div className="w-4/5 mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Nos <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Découvrez nos derniers projets et les solutions que nous avons mises en place pour nos clients
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-[#e38f00]" />
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-600 font-medium">
            {error}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 text-gray-500 italic">
            Aucun projet disponible pour le moment
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => {
              // Log pour vérifier ce que reçoit le frontend
              console.log(`[PROJECT DEBUG] #${project.id} "${project.title || 'sans titre'}" → description =`, project.description || 'AUCUNE DESCRIPTION')

              return (
                <motion.div
                  key={project.id || `project-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-black/30 backdrop-blur rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all hover:-translate-y-2"
                >
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
                        <span className="text-xs">Pas d'image</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {project.title || 'Projet sans titre'}
                    </h3>

                    {/* DESCRIPTION à la place de la priorité */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4 min-h-[6rem]">
                      {project.description 
                        ? project.description.length > 150 
                          ? project.description.substring(0, 150) + '...' 
                          : project.description
                        : 'Aucune description disponible pour ce projet.'}
                    </p>

                    <div className="mb-4 pb-4 border-b border-gray-200 dark:border-white/10">
                      <p className="text-sm font-semibold text-[#e38f00] mb-3">
                        <TrendingUp className="w-4 h-4 inline mr-2" />
                        {project.status === 'realise' ? 'Réalisé' : 'En cours'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.split(',').map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                          >
                            {tech.trim()}
                          </span>
                        )) || <span className="text-xs text-gray-500">Aucune technologie</span>}
                      </div>
                    </div>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#e38f00] font-bold hover:gap-4 transition-all"
                      >
                        Voir le projet
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-gray-500 text-sm">Projet interne</span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-50 dark:bg-black/50 py-20 mb-20"
      >
        <div className="w-4/5 mx-auto">
          <h2 className="text-5xl font-black text-center text-gray-900 dark:text-white mb-16">
            Nos Résultats
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '150+', label: 'Projets Réussis' },
              { stat: '98%', label: 'Satisfaction Client' },
              { stat: '30+', label: 'Talents Experts' },
              { stat: '$50M', label: 'Valeur Créée' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-black text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text mb-3">
                  {item.stat}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
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
              className="bg-white dark:bg-black/30 backdrop-blur rounded-2xl p-8 border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-[#e38f00] font-semibold">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-4/5 mx-auto py-20 mb-20"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6"
          >
            <Users className="w-5 h-5 text-[#e38f00]" />
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Notre Équipe</span>
          </motion.div>
          
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
            Rencontrez <span className="text-[#e38f00]">Nos Experts</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une équipe passionnée et expérimentée dédiée à l'excellence et à l'innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-black/30 backdrop-blur rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-white/10 hover:border-[#e38f00]/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4">
                  <span className="bg-[#e38f00] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {member.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="text-xs bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                  {member.linkedin && (
                    <a href={member.linkedin} className="p-2 bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-[#e38f00]/10 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} className="p-2 bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-[#e38f00]/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="p-2 bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-[#e38f00]/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-3xl p-12 max-w-7xl mx-auto px-4"
      >
        <div className="text-center">
          <h2 className="text-4xl font-black text-white mb-6">Votre Projet Suivant?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et créons quelque chose d'extraordinaire ensemble.
          </p>
          <Link
            to="/contact?type=quote"
            className="inline-block bg-white text-[#e38f00] font-bold py-4 px-10 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Démarrer un Projet
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}