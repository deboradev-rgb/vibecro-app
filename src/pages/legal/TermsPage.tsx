import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  const sections = [
    {
      title: '1. Conditions Générales',
      content: 'En accédant et en utilisant ce site web, vous acceptez d\'être lié par ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser ce site.'
    },
    {
      title: '2. Licence d\'Utilisation',
      content: 'Nous vous accordons une licence limitée pour accéder et utiliser ce site à des fins légales uniquement. Vous acceptez de ne pas: reproduire, dupliquer, copier ou vendre les contenus du site sans notre permission écrite.'
    },
    {
      title: '3. Limitations de Responsabilité',
      content: 'VIBECRO ne sera pas responsable des dommages indirects, spéciaux ou consécutifs résultant de votre accès ou utilisation de ce site. Notre responsabilité totale ne dépassera pas le montant que vous avez payé pour utiliser nos services.'
    },
    {
      title: '4. Propriété Intellectuelle',
      content: 'Tous les contenus du site (texte, graphiques, logos, images, clips audio) sont la propriété de VIBECRO ou de ses fournisseurs de contenu et sont protégés par les lois internationales sur les droits d\'auteur.'
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
          Conditions d'Utilisation
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
