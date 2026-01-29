import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, CheckCircle, ArrowRight, Headphones, Clock, Shield, Globe, Sparkles, Hotel } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ConciergerieTouristiquePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Voyage de luxe et tourisme'
    },
    {
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Expérience touristique premium'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change toutes les 5 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        {/* Image de fond qui défile */}
        <div className="absolute inset-0 pointer-events-none">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 0.35 : 0,
                scale: index === currentImageIndex ? 1 : 1.1
              }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-slate-50/90 dark:from-black/75  "></div>
        </div>

        {/* Indicateurs d'images */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-[#e38f00] w-8' 
                  : 'bg-gray-400 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
              <MapPin className="w-5 h-5 text-[#e38f00]" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Conciergerie Touristique</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text mb-6">
              Conciergerie <span className="text-[#e38f00]">Touristique</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Services de conciergerie 24/7 pour enrichir l'expérience client et maximiser la satisfaction des voyageurs
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section className="py-16 lg:py-24 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Services Disponibles 24/7
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Réservations & Bookings',
                description: 'Hôtels, restaurants, activités touristiques, transports, spectacles.',
                icon: Hotel
              },
              {
                title: 'Assistance Urgente',
                description: 'Support immédiat pour problèmes médicaux, annulations, changements de plans.',
                icon: Headphones
              },
              {
                title: 'Recommandations Locales',
                description: 'Suggestions personnalisées basées sur préférences, budget et intérêts.',
                icon: MapPin
              },
              {
                title: 'Billets & Accès VIP',
                description: 'Accès prioritaire à attractions, passe coupe-file, billets dernière minute.',
                icon: Sparkles
              },
              {
                title: 'Planification Itinéraires',
                description: 'Plans de visite optimisés avec transports, timing et conseils locaux.',
                icon: Globe
              },
              {
                title: 'Protection Assurée',
                description: 'Assurance voyage, garanties annulation, couverture incidents imprévus.',
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

      {/* Features & Avantages */}
      <motion.section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Avantages pour Vos Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              'Support multilingue 24h/24, 365j/365',
              'Réponse sous 5 minutes en moyenne',
              'Accès à réseau exclusif d\'hôtels et restaurants',
              'Tarifs préférentiels et commissions négociées',
              'Gestion complète de stress de voyage',
              'Expérience personnalisée et mémorable',
              'Assistance en cas d\'imprévu',
              'Économies jusqu\'à 30% sur services'
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

      {/* Industries */}
      <motion.section className="py-16 lg:py-24 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Industries Servies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Chaînes Hôtelières',
                desc: 'Valeur ajoutée pour clients haut de gamme, différenciation concurrentielle.'
              },
              {
                title: 'Agences de Voyage',
                desc: 'Extension de services, suivi client post-booking, satisfaction garantie.'
              },
              {
                title: 'Tour-opérateurs',
                desc: 'Support des groupes, coordination complexe, assistance terrain 24/7.'
              },
              {
                title: 'Luxury Travel',
                desc: 'Service VIP white-glove, expériences exclusives, personnalisation extrême.'
              }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-black/30 rounded-3xl p-8 border border-slate-200/50 dark:border-white/10"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{industry.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Availability */}
      <motion.section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#e38f00]/20 to-[#d48500]/20 dark:from-[#e38f00]/10 dark:to-[#d48500]/10 rounded-3xl p-12 border border-[#e38f00]/30 text-center"
          >
            <Clock className="w-16 h-16 text-[#e38f00] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Disponibilité 24/7/365
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Notre équipe de conciergerie est disponible à tout moment pour vous aider, où que vous soyez dans le monde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33123456789"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                <Headphones className="w-5 h-5" />
                <span>Appeler Maintenant</span>
              </a>
              <Link
                to="/contact?type=concierge"
                className="inline-flex items-center gap-2 border-2 border-[#e38f00] text-[#e38f00] dark:text-[#f44d0b] font-bold py-4 px-8 rounded-xl hover:bg-[#e38f00]/10 transition-all"
              >
                <span>Nous Contacter</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-16 lg:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Améliorez Vos Offres Touristiques
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Intégrez nos services de conciergerie pour transformer l'expérience de vos clients en voyage inoubliable.
          </p>
          
          <Link
            to="/contact?type=quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <span>Demander une Démo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  )
}