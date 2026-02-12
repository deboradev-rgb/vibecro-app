import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wifi, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, BarChart3, Smartphone, Clock, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function IoTTrackingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const guideItems = [
    {
      number: '1',
      title: 'Accès à la plateforme',
      content: (
        <>
          <h4 className="text-base font-semibold mt-4 mb-2">1.1 Connexion</h4>
          <p className="text-gray-600 dark:text-gray-400">
            Le point d’accès est l’URL :{' '}
            <a
              href="https://tracking.vibecro.com/#/login"
              className="text-[#e38f00] hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tracking.vibecro.com/#/login
            </a>
          </p>
          <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
            <li>Saisissez vos identifiants (email et mot de passe).</li>
            <li>Certains comptes peuvent avoir l’authentification à deux facteurs activée.</li>
          </ul>
        </>
      ),
    },
    {
      number: '2',
      title: 'Inscription & Activation de compte',
      content: (
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
          <li>
            Contactez le support à{' '}
            <a href="mailto:tracking@vibecro-corp.tech" className="text-[#e38f00] hover:underline">
              tracking@vibecro-corp.tech
            </a>{' '}
            pour obtenir vos identifiants.
          </li>
          <li>Une fois activé, vous pouvez connecter un ou plusieurs appareils (trackers ou smartphones).</li>
        </ul>
      ),
    },
    {
      number: '3',
      title: 'Utilisation de la version Web',
      content: (
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li className="flex gap-3">
            <span className="font-semibold min-w-[140px]">Tableau de bord</span>
            <span>Vue temps réel : position, vitesse, statut + statistiques globales</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold min-w-[140px]">Carte interactive</span>
            <span>Géolocalisation live, zoom, filtres par véhicule / zone / statut</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold min-w-[140px]">Historique trajets</span>
            <span>Recherche par période + export PDF / CSV</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold min-w-[140px]">Alertes</span>
            <span>Zone géographique, excès vitesse, moteur ON/OFF, etc. (email + interface)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold min-w-[140px]">Gestion utilisateurs</span>
            <span>(admin) Ajout, rôles, restriction d’accès</span>
          </li>
        </ul>
      ),
    },
    {
      number: '4',
      title: 'Utilisation via application mobile',
      content: (
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
          <li>Application Android disponible sur Google Play (VIBECRO Inc)</li>
          <li>Installation → connexion avec vos identifiants</li>
          <li>Fonctionnalités : suivi live, historique, alertes push, configuration balises</li>
        </ul>
      ),
    },
    {
      number: '5',
      title: 'Paramétrage technique',
      content: (
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
          <li>Compatibilité +300 modèles de trackers GPS et beacons</li>
          <li>Association appareil → compte (via ID unique ou QR code)</li>
          <li>Réglage fréquence d’envoi position (30s, 1min…)</li>
          <li>Création zones géographiques, seuils (vitesse, événements), canaux d’alerte</li>
        </ul>
      ),
    },
    {
      number: '6',
      title: 'Bonnes pratiques',
      content: (
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
          <li>Ajustez l’intervalle de rafraîchissement pour optimiser précision / consommation</li>
          <li>Configurez les alertes prioritaires dès la mise en service</li>
          <li>Contrôlez les droits d’accès pour protéger les données</li>
          <li>Exportez régulièrement les historiques pour archivage / audit</li>
        </ul>
      ),
    },
    {
      number: '7',
      title: 'Support et maintenance',
      content: (
        <div className="space-y-3 text-gray-600 dark:text-gray-400">
          <p>
            Support technique :{' '}
            <a href="mailto:groupe-vibecro@outlook.com" className="text-[#e38f00] hover:underline">
              groupe-vibecro@outlook.com
            </a>
          </p>
          <p>Gardez l’application et le navigateur à jour. Consultez la politique de confidentialité fournie à l’inscription.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://media.gettyimages.com/id/1436539381/video/nice-african-village-drone-shot-benin-republic.jpg?s=2048x2048&w=2048"
            alt="Vue aérienne drone des routes et quartiers au Bénin – Tracking VibeCRO"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://i.ytimg.com/vi/k8l8Cb2JnLQ/maxresdefault.jpg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>
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

      {/* SECTION TRACKING VIBECRO */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between h-full space-y-5 lg:space-y-6 font-sans"
            >
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Tracking VibeCRO
                </h2>
                
                <p className="text-lg sm:text-xl font-semibold text-[#e38f00]">
                  Suivez vos véhicules en temps réel
                </p>

                <div className="space-y-3.5 text-sm sm:text-base md:text-[16px] lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Tracking VibeCRO est une solution innovante développée par <strong>VIBECRO</strong>, basée à Godomey au Bénin.
                  </p>
                  
                  <p>Cette plateforme web et mobile vous permet de :</p>
                  
                  <ul className="space-y-1.5 pl-5 list-disc marker:text-[#e38f00] marker:text-sm">
                    <li>Suivre vos véhicules en temps réel</li>
                    <li>Accéder à l’historique des trajets</li>
                    <li>Recevoir des alertes personnalisées</li>
                  </ul>

                  <p>
                    Grâce à des trackers GPS, balises intelligentes ou smartphones, vous gardez un contrôle total sur votre flotte ou véhicule personnel.
                  </p>

                  <p>
                    Interface simple et ergonomique, accessible via navigateur ou application Android (Google Play).
                  </p>

                  <p>
                    Conçue pour les réalités africaines, avec un support client réactif.
                  </p>

                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Sécurisez vos trajets et optimisez votre flotte intelligemment.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://tracking.vibecro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Accéder maintenant
                  <span className="text-base sm:text-lg">→</span>
                </a>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  tracking.vibecro.com
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 h-full min-h-[320px] lg:min-h-[480px]"
            >
              <img
                src="https://www.geotab.com/CMS-Media-production/UK/MyGeotab/mygeotab-dashboard-fleet-management-lifestyle-mockup-desktop-computer-1092645754-2022-EN-GB@2x.jpg"
                alt="Professionnel gérant un dashboard de tracking GPS – Tracking VibeCRO"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
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

      {/* Features Section – Avantages Clés */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center"
          >
            Avantages Clés
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
            >
              <img
                src="https://www.rewiresecurity.co.uk/wp-content/uploads/2021/11/gps-tracking-software-systems-2.png"
                alt="Dashboard de tracking GPS en temps réel – Vibecro Location"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                'Réduction des coûts opérationnels de 30%',
                'Temps de réponse diminué de 50%',
                'Visibilité 100% sur vos actifs',
                'Sécurité améliorée avec alertes en temps réel',
                'Conformité légale et réglementaire',
                'ROI visible en 6 mois'
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-7 h-7 text-[#e38f00] flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* NOUVELLE SECTION : Guide d'utilisation – Accordéon stylé */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Guide d'utilisation
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Tracking VibeCRO – Comment démarrer et maîtriser la plateforme
            </p>
          </div>

          <div className="space-y-4">
            {guideItems.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#e38f00] to-[#d48500] flex items-center justify-center text-white font-bold text-lg">
                        {item.number}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#e38f00] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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