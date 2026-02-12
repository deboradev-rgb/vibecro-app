import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  Wifi, Brain, Code, Smartphone, Cloud, Users, MapPin,
  Sparkles, CheckCircle, ArrowRight, Zap, Shield, MessageSquare 
} from 'lucide-react'

export default function ServicesPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const heroImages = [
    { icon: Wifi, color: '#e38f00', label: 'IoT' },
    { icon: Brain, color: '#e38f00', label: 'IA' },
    { icon: Code, color: '#e38f00', label: 'Web' },
    { icon: Smartphone, color: '#e38f00', label: 'Mobile' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      id: 1,
      title: 'IoT & Tracking Intelligent',
      description: 'Solutions connectées pour le monitoring en temps réel de vos actifs et processus.',
      icon: Wifi,
      features: ['Capteurs connectés', 'Dashboard temps réel', 'Alertes intelligentes', 'Intégrations API'],
      color: '#e38f00',
      link: '/services/iot-tracking'
    },
    {
      id: 2,
      title: 'Solutions RH-IA',
      description: 'Automatisation et intelligence artificielle pour optimiser vos processus de recrutement et RH.',
      icon: Brain,
      features: ['Recrutement IA', 'Analyse candidats', 'Gestion talentuelle', 'Prédictions'],
      color: '#e38f00',
      link: '/services/rh-ia-solutions'
    },
    {
      id: 3,
      title: 'Développement Web',
      description: 'Applications web performantes, scalables et sécurisées pour votre entreprise.',
      icon: Code,
      features: ['React/Vue/Next.js', 'APIs scalables', 'Responsive design', 'SEO optimisé'],
      color: '#e38f00',
      link: '/services/developpement-web'
    },
    {
      id: 4,
      title: 'Clientèle Plus',
      description: 'Fidélisation client intelligente et gestion de relation client optimisée.',
      icon: Users,
      features: ['CRM intelligent', 'Segmentation', 'Automations', 'Analytics avancés'],
      color: '#e38f00',
      link: '/services/clientele-plus'
    },
    {
      id: 5,
      title: 'Conciergerie Touristique',
      description: 'Services de conciergerie 24/7 pour enrichir l\'expérience client et la satisfaction.',
      icon: MapPin,
      features: ['Support 24/7', 'Réservations', 'Recommandations', 'VIP access'],
      color: '#e38f00',
      link: '/services/conciergerie-touristique'
    },
    {
      id: 6,
      title: 'Infrastructure Cloud',
      description: 'Solutions cloud sécurisées, scalables et rentables pour votre infrastructure IT.',
      icon: Cloud,
      features: ['AWS/GCP/Azure', 'Auto-scaling', 'Sécurité zero-trust', 'Backup automatique'],
      color: '#e38f00',
      link: '/services/cloud-infrastructure'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Découverte',
      description: 'Comprendre vos objectifs et challenges spécifiques.'
    },
    {
      step: 2,
      title: 'Stratégie',
      description: 'Définir la meilleure approche pour votre projet.'
    },
    {
      step: 3,
      title: 'Développement',
      description: 'Créer votre solution avec expertise et créativité.'
    },
    {
      step: 4,
      title: 'Déploiement',
      description: 'Mettre en production et assurer la stabilité.'
    },
    {
      step: 5,
      title: 'Support',
      description: 'Accompagnement continu et améliorations.'
    }

    
  ]

  
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Animated Hero Section */}
      <motion.section className="relative py-20 overflow-hidden mb-20">
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Animated Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-full min-h-96"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background animated grid */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5"
                />
                
                {/* Animated images */}
                <div className="relative z-10">
                  {heroImages.map((img, i) => {
                    const Icon = img.icon
                    const isActive = i === activeImageIndex
                    return (
                      <motion.div
                        key={i}
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.8,
                          y: isActive ? 0 : 50
                        }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ y: [0, -20, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="w-48 h-48 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-3xl flex items-center justify-center shadow-2xl"
                        >
                          <Icon className="w-24 h-24 text-white" />
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                  {heroImages.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      animate={{
                        width: i === activeImageIndex ? 32 : 12,
                        backgroundColor: i === activeImageIndex ? '#e38f00' : '#d1d5db'
                      }}
                      className="h-3 rounded-full transition-all dark:bg-slate-600"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                Nos <span className="text-[#e38f00]">Services</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Découvrez notre portefeuille complet de solutions numériques conçues pour transformer votre entreprise et propulser votre croissance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact?type=quote"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  <span>Découvrir</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <div className="w-4/5 mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white dark:bg-black/30 backdrop-blur rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-white/10 hover:border-[#e38f00]/50 dark:hover:border-[#e38f00] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#e38f00] flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#e38f00] font-bold hover:gap-4 transition-all group/link"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>


      {/* SECTION SOLUTIONS SUR-MESURE & SECTEURS */}
<section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/80 to-white dark:from-black dark:via-gray-950/80 dark:to-black">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

    {/* Titre secondaire */}
    <div className="text-center mb-10 md:mb-12">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
      >
        Des solutions adaptées à votre secteur
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300"
      >
        Bénéficiez de notre expertise métier pour des résultats concrets
      </motion.p>
    </div>

    {/* Bloc 2 : Les secteurs */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        {
          title: "Hôtellerie",
          points: [
            "Parcours client fluidifié (réservation en ligne, check-in digital)",
            "Gestion interne optimisée (suivi des chambres, maintenance)",
            "Intégration PMS existant"
          ],
          link: "/secteurs/hotellerie"
        },
        {
          title: "Supermarché",
          points: [
            "Achats simplifiés (scan, promotions ciblées)",
            "Gestion améliorée (stocks temps réel, analyse ventes)",
            "Compatible tous systèmes de caisse"
          ],
          link: "/secteurs/supermarche"
        },
        {
          title: "Santé & Pharmacies",
          points: [
            "Gestion des ordonnances (scan, rappel renouvellement)",
            "Suivi des stocks (alertes automatiques)",
            "Programmes de fidélisation santé"
          ],
          link: "/secteurs/sante"
        },
        {
          title: "Agro-Alimentaire",
          points: [
            "Gestion des commandes (suivi temps réel)",
            "Contrôle qualité (enregistrement lots)",
            "Programmes promotionnels ciblés"
          ],
          link: "/secteurs/agroalimentaire"
        },
        {
          title: "Restaurant",
          points: [
            "Commande QR code et menu digital",
            "Paiement sans contact",
            "Gestion centralisée commandes/stocks"
          ],
          link: "/secteurs/restaurant"
        },
        {
          title: "Hôpital",
          points: [
            "Dossier patient électronique HDS",
            "Rendez-vous intelligents",
            "Messagerie sécurisée"
          ],
          link: "/secteurs/hopital"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          className="group bg-white dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-[#e38f00]/50 hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#e38f00] transition-colors">
            {item.title}
          </h3>
          <ul className="space-y-2 mb-6">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#e38f00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            to={item.link}
            className="inline-flex items-center gap-2 text-[#e38f00] font-medium hover:text-[#d48500] transition-colors"
          >
            Savoir plus sur ce service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* SECTION NOS SERVICES DE LOCATION – une seule image jolie */}
<section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      
      {/* GAUCHE : Une seule image premium */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative flex justify-center lg:justify-start order-1 lg:order-1"
      >
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-64 md:h-80 lg:h-[500px] overflow-hidden">
            <motion.img
              src="https://pugachev.miami/wp-content/uploads/2021/02/rent-lamborghini-huracan-evo-2021-705x444.jpg"
              alt="Location véhicule premium Vibecro – Lamborghini Huracán élégante"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: [1.05, 1.12, 1.05] }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              loading="lazy"
            />

          </div>
        </div>
      </motion.div>

      {/* DROITE : Contenu texte (inchangé) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-2"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Nos Services de Location
        </h2>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Chez Vibecro, nous révolutionnons l'expérience de la location grâce à des solutions sur mesure et un service premium.
        </p>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Que vous soyez particulier ou professionnel, bénéficiez d'un accès privilégié à une gamme sélectionnée d'équipements, de véhicules et d'espaces, avec la flexibilité et la qualité qui font notre réputation.
        </p>

        <div className="pt-4">
          <p className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Découvrez une nouvelle façon de louer ! Vibecro vous accompagne
          </p>

          <Link
            to="/services/location"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Découvrir nos offres de location
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-3xl p-12 max-w-7xl mx-auto px-4"
      >
        <div className="text-center">
          <h2 className="text-4xl font-black text-white mb-6">Transformez Votre Entreprise</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment nos services peuvent propulser votre entreprise vers le succès.
          </p>
          <Link
            to="/contact?type=quote"
            className="inline-block bg-white text-[#e38f00] font-bold py-4 px-10 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Demander un Devis
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
