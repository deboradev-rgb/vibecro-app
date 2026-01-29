import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Introduction',
      content: 'VIBECRO (\"nous\", \"notre\" ou \"nos\") exploite le site web www.vibecro.com (ci-après dénommé le \"Service\"). Cette page vous informe de nos politiques concernant la collecte, l\'utilisation et la divulgation de données personnelles lorsque vous utilisez notre Service.'
    },
    {
      title: '2. Collecte et Utilisation des Données',
      content: 'Nous collectons plusieurs types d\'informations à différentes fins pour vous fournir un meilleur service.'
    },
    {
      title: '3. Types de Données Collectées',
      content: 'Données Personnelles: Nom, adresse e-mail, numéro de téléphone. Données d\'Utilisation: Pages visitées, temps passé, clics, etc. Cookies et Données Similaires: Pour améliorer votre expérience.'
    },
    {
      title: '4. Utilisation des Données',
      content: 'VIBECRO utilise les données collectées à différentes fins: fournir et maintenir notre Service, vous notifier des changements, vous permettre de participer aux fonctionnalités interactives, et améliorer notre Service.'
    }
  ]

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>

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
