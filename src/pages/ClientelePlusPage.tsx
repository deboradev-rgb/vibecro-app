import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, CheckCircle, ArrowRight, Target, Heart, Smartphone, Globe, Zap, Star } from 'lucide-react'

export default function ClientelePlusPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        {/* Nouvelle image de fond - Clientèle Professionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Clientèle Plus Background - Professional Client Relations"
            className="w-full h-full object-cover "
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=2070&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-slate-50/90 dark:from-black/75 dark:via-black/65 dark:to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
              <Users className="w-5 h-5 text-[#e38f00]" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Clientèle Plus</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text mb-6">
              Clientèle <span className="text-[#e38f00]">Plus</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Fidélisation client intelligente et gestion de relation client optimisée pour maximiser la valeur client
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions Overview */}
      <motion.section className="py-16 lg:py-24 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Nos Solutions Clientèle Plus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Segmentation Client',
                description: 'Segmentation intelligente basée sur comportement, valeur et potentiel commercial.',
                icon: Target
              },
              {
                title: 'Fidélisation Avancée',
                description: 'Programmes de fidélité personnalisés avec rewards adaptés à chaque segment.',
                icon: Heart
              },
              {
                title: 'CRM Intelligent',
                description: 'Plateforme CRM centralisée avec historique complet et prédictions de churning.',
                icon: Smartphone
              },
              {
                title: 'Omnichannel',
                description: 'Expérience client cohérente across phone, email, SMS, web et réseaux sociaux.',
                icon: Globe
              },
              {
                title: 'Automations Relationnelles',
                description: 'Workflows automatisés pour nurturing, relance et upsell personnalisés.',
                icon: Zap
              },
              {
                title: 'Analytics Client',
                description: 'Dashboards détaillés sur LTV, churn rate, satisfaction et NPS en temps réel.',
                icon: Star
              }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-black/30 rounded-3xl p-8 border border-slate-200/50 dark:border-white/10 hover:border-[#e38f00]/30 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Résultats Mesurables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              'Augmentation de la rétention de 40%',
              'Hausse du lifetime value client de 60%',
              'Réduction du churn de 35%',
              'Augmentation du taux de cross-sell de 50%',
              'Amélioration de la satisfaction client',
              'ROI positif en 3 mois'
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section className="py-16 lg:py-24 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Secteurs d'Application
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Retail & E-commerce',
                desc: 'Fidélisation de la clientèle, programmes de loyalty, recommandations produits.'
              },
              {
                title: 'Services Financiers',
                desc: 'Gestion de patrimoine, cross-selling de produits, détection de churn.'
              },
              {
                title: 'Télécommunications',
                desc: 'Réduction du churn, upsell de services, gestion de contrats.'
              },
              {
                title: 'B2B SaaS',
                desc: 'Expansion revenue, account management, customer success automation.'
              }
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-black/30 rounded-3xl p-8 border border-slate-200/50 dark:border-white/10"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-16 lg:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Fidélisez Vos Clients Aujourd'hui
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Transformez vos clients en ambassadeurs de votre marque avec Clientèle Plus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?type=quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <span>Demander une Démo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#e38f00] text-[#e38f00] dark:text-[#f44d0b] font-bold py-4 px-8 rounded-xl hover:bg-[#e38f00]/10 transition-all"
            >
              <span>Contactez-nous</span>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}