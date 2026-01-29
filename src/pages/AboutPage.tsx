import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Target, Shield, TrendingUp, Heart, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { teamAPI } from '@/lib/apiClient' // Assurez-vous que ce chemin est correct

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

interface TeamMember {
  id: number
  name: string
  position: string
  image?: string | null        // chemin relatif ou URL complète
  image_url?: string | null    // si ton API renvoie image_url
  email?: string
  phone?: string
  linkedin?: string
  github?: string
  twitter?: string
}

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Nous repoussons les limites de la technologie pour créer des solutions révolutionnaires.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Chaque projet est exécuté avec précision et attention aux détails.'
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Sécurité et stabilité sont au cœur de nos solutions.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons et ça se voit dans nos résultats.'
    }
  ]

  const [team, setTeam] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await teamAPI.getAll()
        console.log('[DEBUG] Réponse API équipe complète :', response.data)

        let members = Array.isArray(response.data?.data) 
          ? response.data.data 
          : Array.isArray(response.data) 
            ? response.data 
            : []

        // Sécurité + construction URL complète si chemin relatif
        members = members.map((m: TeamMember) => {
          let imagePath = m.image_url || m.image || null
          if (imagePath && !imagePath.startsWith('http')) {
            imagePath = `${API_URL}/storage/${imagePath}`
          }
          console.log(`[IMAGE DEBUG] Membre "${m.name}" → image finale =`, imagePath || 'AUCUNE IMAGE')
          return { ...m, image_url: imagePath }
        })

        setTeam(members)
      } catch (err: any) {
        console.error('Erreur chargement équipe:', err)
        setError('Impossible de charger les membres de l\'équipe')
        setTeam([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeam()
  }, [])

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 pt-24 pb-12">
        <div className="w-4/5 mx-auto text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e38f00]"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement de l'équipe...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 pt-24 pb-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-4/5 mx-auto mb-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
              À Propos de VIBECRO
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Nous sommes une agence digitale innovante qui transforme vos idées en solutions numériques de pointe.
            </p>
          </motion.div>

          {/* Right - Growth Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-3xl p-12 text-white">
              <TrendingUp className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-black mb-4">Croissance Constante</h3>
              <p className="text-white/90">Depuis notre création, nous croissons de 40% chaque année grâce à la qualité de nos services.</p>
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-20"
        >
          <h2 className="text-4xl font-black text-gray-900 dark:text-white">Notre Histoire</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Fondée en 2018, VIBECRO a commencé comme une petite équipe de passionnés par la technologie. Aujourd'hui, nous sommes une agence reconnue pour notre expertise en IoT, IA, et développement web.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Notre mission est simple : créer des solutions digitales qui font la différence. Que ce soit pour une startup ou une grande entreprise, nous apportons innovation, fiabilité et excellence.
          </p>
          <div className="flex items-center gap-4 pt-6">
            <div className="flex-1">
              <p className="text-4xl font-black text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">150+</p>
              <p className="text-gray-600 dark:text-gray-400">Projets Réussis</p>
            </div>
            <div className="flex-1">
              <p className="text-4xl font-black text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">30+</p>
              <p className="text-gray-600 dark:text-gray-400">Experts Talentueux</p>
            </div>
            <div className="flex-1">
              <p className="text-4xl font-black text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">98%</p>
              <p className="text-gray-600 dark:text-gray-400">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-50 dark:bg-black/50 py-20 mb-20"
      >
        <div className="w-4/5 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black text-center text-gray-900 dark:text-white mb-16"
          >
            Nos Valeurs
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-black/30 backdrop-blur rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/10 transition-all"
                >
                  <Icon className="w-12 h-12 text-[#e38f00] mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-4/5 mx-auto mb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black text-center text-gray-900 dark:text-white mb-16"
        >
          Notre Équipe
        </motion.h2>
        
        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
        
        {!isLoading && team.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Aucun membre d'équipe n'a été ajouté pour le moment.
            </p>
            <Link
              to="/admin/team"
              className="inline-block bg-[#e38f00] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d48500] transition-colors"
            >
              Ajouter des membres
            </Link>
          </div>
        )}
        
        {team.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-black/30 backdrop-blur rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-white/10 hover:border-[#e38f00]/50 transition-all duration-300 text-center p-6"
              >
                {/* Image de profil – correction principale */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#e38f00]/20 to-[#d48500]/10 border-2 border-[#e38f00]/30">
                  {member.image_url || member.image ? (
                    <img
                      src={member.image_url || member.image || ''}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.warn(`[IMG ERROR] Membre ${member.name} → URL échouée : ${member.image_url || member.image}`)
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e38f00] to-[#d48500]">
                      <span className="text-white text-4xl font-bold">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-[#e38f00] font-semibold mb-3">
                  {member.position}
                </p>
                
                {member.email && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 truncate">
                    {member.email}
                  </p>
                )}
                
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="p-2 bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-[#e38f00]/10 hover:text-[#e38f00] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  
                  {member.github && (
                    <a
                      href={member.github}
                      className="p-2 bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-[#e38f00]/10 hover:text-[#e38f00] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="p-2 bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-[#e38f00]/10 hover:text-[#e38f00] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  )}
                  
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-100 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-[#e38f00]/10 hover:text-[#e38f00] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-3xl p-12 w-4/5 mx-auto mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-white mb-6">Prêt à collaborer?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment VIBECRO peut transformer votre vision en réalité.
          </p>
          <Link
            to="/contact?type=quote"
            className="inline-block bg-white text-[#e38f00] font-bold py-4 px-10 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Démarrer Votre Projet
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}