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

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-50 dark:bg-black/50 py-20 mb-20"
      >
        <div className="w-4/5 mx-auto">
          <h2 className="text-5xl font-black text-center text-gray-900 dark:text-white mb-16">Notre Processus</h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-black/30 backdrop-blur rounded-2xl p-6 border border-gray-200 dark:border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#e38f00] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-5xl font-black text-center text-gray-900 dark:text-white mb-16">Pourquoi Nous Choisir</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Rapidité', desc: 'Livraison agile et itérations rapides.' },
            { icon: Shield, title: 'Sécurité', desc: 'Standards de sécurité internationaux.' },
            { icon: MessageSquare, title: 'Support', desc: '24/7 support et maintenance continue.' }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

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
