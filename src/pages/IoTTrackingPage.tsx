import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wifi, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, BarChart3, Smartphone, Clock } from 'lucide-react'

export default function IoTTrackingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        {/* Nouvelle image de fond - Route/Tracking */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="IoT Tracking Background - Road Network"
            className="w-full h-full object-cover "
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2070&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-slate-50/80 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
              <Wifi className="w-5 h-5 text-[#e38f00]" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">IoT & Tracking</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text mb-6">
              IoT & Tracking <span className="text-[#e38f00]">Intelligent</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Solutions connectées pour le monitoring en temps réel de vos actifs, véhicules et processus critiques
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-white/50 dark:bg-black/20"
      >
        <div className="w-4/5 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center"
          >
            Nos Solutions IoT
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tracking de Flotte',
                description: 'Suivi en temps réel de vos véhicules avec géolocalisation GPS, optimisation des routes et alertes de vitesse.',
                icon: TrendingUp
              },
              {
                title: 'Monitoring d\'Actifs',
                description: 'Suivi précis de vos équipements et matériels avec historique de localisation et mouvements.',
                icon: BarChart3
              },
              {
                title: 'Capteurs Connectés',
                description: 'Capteurs de température, humidité, pression pour le monitoring environnemental et qualité.',
                icon: Zap
              },
              {
                title: 'Dashboard Intelligent',
                description: 'Visualisation complète en temps réel avec analytics avancées et prédictions basées sur l\'IA.',
                icon: Smartphone
              },
              {
                title: 'Alertes Automatisées',
                description: 'Notifications intelligentes pour événements critiques, dépassements de géofences et anomalies.',
                icon: Clock
              },
              {
                title: 'Intégrations API',
                description: 'Connexion facile avec vos systèmes existants via APIs RESTful et webhooks sécurisés.',
                icon: Shield
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

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24"
      >
        <div className="w-4/5 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center"
          >
            Avantages Clés
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              'Réduction des coûts opérationnels de 30%',
              'Temps de réponse diminué de 50%',
              'Visibility 100% sur vos actifs',
              'Sécurité améliorée avec alertes en temps réel',
              'Conformité légale et réglementaire',
              'ROI visible en 6 mois'
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5"
      >
        <div className="w-4/5 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center"
          >
            Cas d'Usage
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Logistique & Transport',
                desc: 'Optimisez vos routes, réduisez la consommation carburant et améliorez la satisfaction client.'
              },
              {
                title: 'Gestion d\'Entrepôts',
                desc: 'Suivi d\'inventaire en temps réel, localisation rapide de marchandises, audit automatisé.'
              },
              {
                title: 'Construction & BTP',
                desc: 'Tracking d\'équipements coûteux, prévention des vols, gestion des zones de chantier.'
              },
              {
                title: 'Santé & Bien-être',
                desc: 'Suivi de patients, gestion d\'équipements médicaux, conformité sanitaire automatisée.'
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

      {/* Technical Specs */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24"
      >
        <div className="w-4/5 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center"
          >
            Spécifications Techniques
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Précision GPS', value: '±2 mètres' },
              { label: 'Temps de Refresh', value: 'Temps réel < 5s' },
              { label: 'Autonomie Batterie', value: '30+ jours' },
              { label: 'Couverture Réseau', value: 'Global (4G/5G)' },
              { label: 'Uptime Garantie', value: '99.9%' },
              { label: 'Historique Données', value: '7 ans minimum' }
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5 rounded-3xl p-8 border border-[#e38f00]/20 dark:border-[#e38f00]/10 text-center"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">{spec.label}</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
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
            Prêt à Transformer Votre Logistique?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Découvrez comment nos solutions IoT peuvent réduire vos coûts et améliorer votre efficacité.
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
        </motion.div>
      </motion.section>
    </div>
  )
}