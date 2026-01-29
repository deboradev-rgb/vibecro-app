import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cookie, Shield, Eye } from 'lucide-react'

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: Eye,
      title: 'Cookies Analytiques',
      description: 'Nous utilisons Google Analytics pour comprendre comment vous utilisez notre site et améliorer votre expérience.'
    },
    {
      icon: Shield,
      title: 'Cookies Essentiels',
      description: 'Ces cookies sont nécessaires au fonctionnement du site, notamment l\'authentification et la sécurité.'
    },
    {
      icon: Cookie,
      title: 'Cookies de Préférence',
      description: 'Nous utilisons ces cookies pour mémoriser vos préférences, comme le mode sombre/clair.'
    }
  ]

  const sections = [
    {
      title: '1. Qu\'est-ce qu\'un Cookie?',
      content: 'Un cookie est un petit fichier contenant une chaîne de caractères qui est envoyé à votre ordinateur lorsque vous visitez un site web. Lorsque vous revisitez le site, le navigateur envoie le cookie au serveur pour l\'informer de vos visites antérieures.'
    },
    {
      title: '2. Types de Cookies que Nous Utilisons',
      content: 'Nous utilisons trois types principaux de cookies: Essentiels (nécessaires au fonctionnement), Analytiques (pour comprendre l\'utilisation), et de Préférence (pour mémoriser vos choix).'
    },
    {
      title: '3. Consentement aux Cookies',
      content: 'En utilisant notre site, vous consentez à l\'utilisation de cookies selon cette politique. Vous pouvez contrôler ou désactiver les cookies via les paramètres de votre navigateur.'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black/95 transition-colors duration-500 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text mb-4">
          Gestion des Cookies
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>

        {/* Cookie Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cookieTypes.map((type, i) => {
            const Icon = type.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-black/30 dark:to-black/50 backdrop-blur rounded-2xl p-6 border border-gray-200 dark:border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{type.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{type.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-black/30 backdrop-blur rounded-2xl p-8 border border-gray-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block mt-12 text-[#e38f00] font-bold hover:text-[#d48500] transition-colors"
        >
          ← Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  )
}
