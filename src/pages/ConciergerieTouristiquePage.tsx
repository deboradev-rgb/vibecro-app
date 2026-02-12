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
          <div className="absolute inset-0 bg-gradient-to-b from-white/75  "></div>
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

            {/* Section Vibecro - Organisation de voyages */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* GAUCHE : Texte */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full text-[#e38f00] dark:text-[#f44d0b] font-medium text-sm border border-[#e38f00]/20">
                <div className="w-2 h-2 bg-[#e38f00] rounded-full"></div>
                <span>Service Premium</span>
              </div>

              {/* Titre principal */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Profitez de la <span className="text-[#e38f00]">meilleure expérience</span>
              </h2>

              {/* Description */}
              <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Bienvenue dans l'espace dédié aux professionnels du tourisme. Trouvez tous les guides pour maîtriser votre conciergerie digitale.
                </p>
                
                <p className="font-semibold text-slate-900 dark:text-white">
                  Nous organisons intégralement vos voyages d'affaires et séjours professionnels, en prenant en charge :
                </p>
                
                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-5 border border-[#e38f00]/10">
                  <p className="font-medium text-slate-900 dark:text-white mb-4">
                    Chez Vibecro, nous nous chargeons intégralement de l'organisation de vos voyages d'affaires et séjours professionnels. Notre service complet inclut :
                  </p>
                  
                  {/* Point clé avec icône */}
                  <div className="flex items-start gap-4">
                    
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        La gestion de toutes les formalités administratives
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Nous traitons pour vous les demandes de visas (qu'il s'agisse de visas tourisme, affaires ou longue durée), nous réservons et émettons vos billets d'avion, souscrivons les assurances voyage adaptées (médicales et annulation) et préparons l'ensemble des documents obligatoires pour votre séjour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="pt-6">
                <Link
                  to="/contact?type=vibecro-voyages"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Découvrir nos services voyages</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* DROITE : Images 2x2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Conteneur principal des images */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                
                {/* Image 1 - Voyage d'affaires */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                    alt="Professionnel africain travaillant sur ordinateur dans un aéroport - Voyage d'affaires"
                    className="w-full h-48 lg:h-56 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-sm font-semibold">Voyage d'affaires</span>
                  </div>
                </motion.div>

                {/* Image 2 - Formalités administratives */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
                    alt="Documents administratifs de voyage - Passeports et visas"
                    className="w-full h-48 lg:h-56 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-sm font-semibold">Documents & Visas</span>
                  </div>
                </motion.div>

                {/* Image 3 - Organisation de séjour */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
                    alt="Séjour professionnel dans un hôtel de luxe - Chambre et service hôtelier"
                    className="w-full h-48 lg:h-56 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-sm font-semibold">Séjours Premium</span>
                  </div>
                </motion.div>

                {/* Image 4 - Service conciergerie */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1564501049418-3c27787d01e8?auto=format&fit=crop&w=600&q=80"
                    alt="Service de conciergerie digitale - Support voyage 24/7"
                    className="w-full h-48 lg:h-56 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-sm font-semibold">Conciergerie Digitale</span>
                  </div>
                </motion.div>

              </div>

            

              {/* Effets décoratifs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

            {/* Section Nos Services - Conciergerie Touristique */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e38f00]/20 to-[#d48500]/20 rounded-full mb-6 border border-[#e38f00]/30">
              <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e38f00]">
                Conciergerie Exclusive
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              Nos Services de Conciergerie <span className="text-[#e38f00]">Touristique Exclusive</span>
            </h3>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Profitez d'un voyage sans tracas grâce à notre conciergerie dédiée à vos besoins VIP. Nous gérons chaque détail pour vous offrir une expérience unique et sur mesure :
            </p>
          </motion.div>

          {/* Grille des 4 services sur la même ligne */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Service 1 - Réservations Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden hover:border-[#e38f00]/30 transition-all duration-300">
                
                {/* Effet de fond au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 to-[#d48500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icône */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Titre */}
                <h4 className="text-xl font-bold text-white mb-4 relative">
                  Réservations Premium & Accès Privilegié
                </h4>
                
                {/* Description */}
                <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Réservation de restaurants étoilés, clubs privés et événements exclusifs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Accès prioritaire aux attractions touristiques</span>
                  </div>
                  <div className="pl-4 text-slate-400 text-xs">
                    • Billets coupe-file<br/>
                    • Visites hors horaires
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-[#e38f00] rounded-full animate-ping opacity-70"></div>
                </div>
              </div>
            </motion.div>

            {/* Service 2 - Itinéraires Personnalisés */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden hover:border-[#e38f00]/30 transition-all duration-300">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 to-[#d48500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icône */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">✈</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Titre */}
                <h4 className="text-xl font-bold text-white mb-4 relative">
                  Itinéraires Personnalisés & Expériences Uniques
                </h4>
                
                {/* Description */}
                <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Création de circuits sur mesure</span>
                  </div>
                  <div className="pl-4 text-slate-400 text-xs mb-2">
                    • Culturels<br/>
                    • Gastronomiques<br/>
                    • Aventures
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Accompagnement par guides francophones experts</span>
                  </div>
                  <div className="pl-4 text-slate-400 text-xs">
                    • Visites hors des sentiers battus
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-[#e38f00] rounded-full animate-ping opacity-70"></div>
                </div>
              </div>
            </motion.div>

            {/* Service 3 - Gestion Hôtelière */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden hover:border-[#e38f00]/30 transition-all duration-300">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 to-[#d48500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icône */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Titre */}
                <h4 className="text-xl font-bold text-white mb-4 relative">
                  Gestion Hôtelière & Services Sur Place
                </h4>
                
                {/* Description */}
                <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Check-in/out accéléré dans les hôtels partenaires</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Demandes spéciales</span>
                  </div>
                  <div className="pl-4 text-slate-400 text-xs mb-2">
                    • Chambre avec vue imprenable<br/>
                    • Spa privatisé<br/>
                    • Service en chambre 24h/24
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Assistance urgences voyage</span>
                  </div>
                  <div className="pl-4 text-slate-400 text-xs">
                    • Médecin<br/>
                    • Traducteur<br/>
                    • Conseils sécurité
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-[#e38f00] rounded-full animate-ping opacity-70"></div>
                </div>
              </div>
            </motion.div>

            {/* Service 4 - Transport & Logistique */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden hover:border-[#e38f00]/30 transition-all duration-300">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 to-[#d48500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icône */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Titre */}
                <h4 className="text-xl font-bold text-white mb-4 relative">
                  Transport & Logistique Sans Stress
                </h4>
                
                {/* Description */}
                <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Voiture avec chauffeur privé ou limousine</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Transferts aéroport/hôtel en temps record</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Location de yachts, jets privés ou véhicules de luxe</span>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-[#e38f00] rounded-full animate-ping opacity-70"></div>
                </div>
                
                {/* Effet décoratif */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#e38f00]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

            {/* Section Pourquoi Nous Choisir */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full mb-6 border border-[#e38f00]/20">
              <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e38f00]">
                Avantages Exclusifs
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Pourquoi <span className="text-[#e38f00]">Nous Choisir</span> ?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Découvrez les raisons qui font de nous votre partenaire de voyage idéal
            </p>
          </motion.div>

          {/* Grille des 3 avantages sur la même ligne */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Avantage 1 - Équipe experte */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group text-center"
            >
              {/* Conteneur image */}
              <div className="relative mb-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10 aspect-square max-w-xs mx-auto">
                  <img
                     src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Équipe experte - Spécialistes du voyage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Badge sur l'image */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    Experts
                  </div>
                  
                  
                </div>
                
                {/* Cercle décoratif */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-70"></div>
              </div>
              
              {/* Contenu texte */}
              <div className="space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Équipe experte
                </h3>
                <div className="inline-flex items-center gap-2 text-[#e38f00] font-medium">
                  <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full"></div>
                  <span>Spécialistes de chaque destination</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  Notre équipe multilingue possède une expertise approfondie des destinations pour vous offrir des conseils personnalisés.
                </p>
              </div>
              
              {/* Indicateur visuel */}
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#e38f00] rounded-full"></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Avantage 2 - Réseau vérifié */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group text-center"
            >
              {/* Conteneur image */}
              <div className="relative mb-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10 aspect-square max-w-xs mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80"
                    alt="Réseau vérifié - Partenaires mondiaux"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Badge sur l'image */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    Global
                  </div>
                  
                 
                  
                  {/* Compteur sur l'image */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#e38f00]">+5000</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-white">partenaires</span>
                    </div>
                  </div>
                </div>
                
                {/* Cercle décoratif */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-70"></div>
              </div>
              
              {/* Contenu texte */}
              <div className="space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Réseau vérifié
                </h3>
                <div className="inline-flex items-center gap-2 text-[#e38f00] font-medium">
                  <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full"></div>
                  <span>+5000 partenaires fiables dans le monde</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  Un réseau international de partenaires soigneusement sélectionnés pour garantir qualité et fiabilité partout dans le monde.
                </p>
              </div>
              
              {/* Indicateur visuel */}
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#e38f00] rounded-full"></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Avantage 3 - Réactivité */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group text-center"
            >
              {/* Conteneur image */}
              <div className="relative mb-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10 aspect-square max-w-xs mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                    alt="Réactivité - Support rapide 24/7"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Badge sur l'image */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    Rapide
                  </div>
                  
                
                  
                  {/* Compteur sur l'image */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#e38f00]">90%</div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-white">traitement rapide</div>
                    </div>
                  </div>
                </div>
                
                {/* Cercle décoratif */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-70"></div>
              </div>
              
              {/* Contenu texte */}
              <div className="space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Réactivité
                </h3>
                <div className="inline-flex items-center gap-2 text-[#e38f00] font-medium">
                  <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full"></div>
                  <span>90% des demandes traitées en moins de 4h</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  Un service réactif disponible 24h/24 et 7j/7 pour répondre à vos besoins et urgences où que vous soyez dans le monde.
                </p>
              </div>
              
              {/* Indicateur visuel */}
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#e38f00] rounded-full"></div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

            {/* Section Galerie - Conciergerie Numérique & Touristique */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* GAUCHE : Grille d'images 3x3 avec destinations africaines */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Grille 3x3 */}
              <div className="grid grid-cols-3 gap-3 lg:gap-4">
                
                {/* Ligne 1 - Transport et hébergement */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                    src="https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&w=600&q=80"
                    alt="Aéroport international d'Afrique - Voyage aérien"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">🇿🇦</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">Afrique du Sud</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                    src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
                    alt="Lodge de luxe au Kenya - Safari africain"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">🇰🇪</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">Kenya</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                    alt="Service conciergerie digitale moderne"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">💼</span>
                  </div>
                </motion.div>

                {/* Ligne 2 - Destinations africaines */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80"
                    alt="Marrakech, Maroc - Médina et culture"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">🇲🇦</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">Maroc</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=600&q=80"
                    alt="Ghana - Culture et traditions africaines"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">🇬🇭</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">Ghana</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                     src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                    alt="Sénégal - Îles et paysages"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">🇸🇳</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">Sénégal</span>
                  </div>
                </motion.div>

                {/* Ligne 3 - Expériences africaines */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                   src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                    alt="Transport premium en Afrique"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"
                    alt="Cuisine africaine - Gastronomie locale"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">🇳🇬</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">Nigeria</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10 aspect-square"
                >
                  <img
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
                    alt="Support voyage en Afrique"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold">🇹🇿</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">Tanzanie</span>
                  </div>
                </motion.div>

              </div>

              {/* Badge sur la grille */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  Destinations Africaines
                </div>
              </div>

              {/* Légende */}
              <div className="mt-4 p-3 bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-lg border border-[#e38f00]/10">
                <p className="text-xs text-slate-700 dark:text-slate-300 text-center">
                  <span className="font-semibold text-[#e38f00]">+20 pays africains</span> couverts par notre service de conciergerie
                </p>
              </div>

              {/* Effets décoratifs */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-50"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 rounded-full blur-xl opacity-50"></div>
            </motion.div>

            {/* DROITE : Texte */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full text-[#e38f00] dark:text-[#f44d0b] font-medium text-sm border border-[#e38f00]/20">
                <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                <span>Conciergerie Numérique & Touristique</span>
              </div>

              {/* Titre */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Galerie – <span className="text-[#e38f00]">Conciergerie</span> Numérique & Touristique
              </h2>

              {/* Description */}
              <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Du billet d'avion à l'hôtel, tout est planifié pour vous.
                </p>
                <p>
                  Profitez de vos voyages en Afrique sans stress, on s'occupe de tout. Notre service de conciergerie numérique spécialisé dans les destinations africaines vous offre une expérience de voyage complète et authentique.
                </p>
                
                {/* Points clés */}
                <div className="space-y-4 pt-4" text-align="">
                  <div className="flex items-start gap-4">
                    
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Expertise Africaine</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Connaissance approfondie des destinations et cultures africaines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                   
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Réseau Local</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Partenaires fiables dans chaque pays pour un service optimal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                   
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Expérience Authentique</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Accès aux expériences locales uniques et aux trésors cachés
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="pt-6">
                <Link
                  to="https://docs.vibecro.com/devis/"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Avoir un devis</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

            {/* Section Nos Destinations Phares */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e38f00]/20 to-[#d48500]/20 rounded-full mb-6 border border-[#e38f00]/30">
              <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e38f00]">
                Voyagez avec Excellence
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nos <span className="text-[#e38f00]">Destinations</span> Phares
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez nos destinations les plus prisées, soigneusement sélectionnées pour des expériences de voyage inoubliables
            </p>
          </motion.div>

          {/* Conteneur principal */}
          <div className="relative">
            
            {/* Carrousel d'images */}
            <div className="relative mb-10 lg:mb-12">
              <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide space-x-4 lg:space-x-6">
                
                {/* Égypte */}
                <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80"
                      alt="Égypte - Pyramides de Gizeh et trésors antiques"
                      className="w-full h-64 md:h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-xl">🇪🇬</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Égypte</h3>
                      </div>
                      <p className="text-slate-200 text-sm">
                        Plongez dans l'histoire des pharaons avec nos circuits sur mesure incluant les pyramides, le Nil et les trésors archéologiques.
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Historique
                    </div>
                  </motion.div>
                </div>

                {/* Dubaï */}
                <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                      alt="Dubaï - Modernité et luxe au Moyen-Orient"
                      className="w-full h-64 md:h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-xl">🇦🇪</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Dubaï</h3>
                      </div>
                      <p className="text-slate-200 text-sm">
                        Expérience ultime de luxe avec accès aux hôtels 7 étoiles, shopping d'exception et aventures dans le désert.
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Luxe
                    </div>
                  </motion.div>
                </div>

                {/* France */}
                <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
                      alt="France - Romance et culture à Paris"
                      className="w-full h-64 md:h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-xl">🇫🇷</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">France</h3>
                      </div>
                      <p className="text-slate-200 text-sm">
                        Découvrez la romance parisienne, la gastronomie étoilée et les châteaux de la Loire avec nos guides experts.
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Romantique
                    </div>
                  </motion.div>
                </div>

                {/* Espagne */}
                <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80"
                      alt="Espagne - Soleil et fête à Barcelone"
                      className="w-full h-64 md:h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-xl">🇪🇸</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Espagne</h3>
                      </div>
                      <p className="text-slate-200 text-sm">
                        Vibrez au rythme du flamenco, savourez la paella authentique et explorez l'architecture unique de Gaudí.
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Festif
                    </div>
                  </motion.div>
                </div>

                {/* Afrique du Sud */}
                <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
                      alt="Afrique du Sud - Safari et nature sauvage"
                      className="w-full h-64 md:h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-xl">🇿🇦</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Afrique du Sud</h3>
                      </div>
                      <p className="text-slate-200 text-sm">
                        Safari exclusif dans le Kruger, route des vins du Cap et expériences culturelles profondes en terre africaine.
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Aventure
                    </div>
                  </motion.div>
                </div>

              </div>
              
              {/* Indicateurs de défilement */}
              <div className="flex justify-center gap-2 mt-6">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div key={dot} className="w-2 h-2 bg-white/30 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Description détaillée des destinations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-lg flex items-center justify-center">
                    <span className="text-xl">🇪🇬</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Égypte Antique</h4>
                    <p className="text-xs text-slate-400">Voyage dans le temps</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300">
                  Circuits privés incluant les pyramides, croisière sur le Nil, et visites des temples de Louxor et Karnak avec égyptologues certifiés.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-lg flex items-center justify-center">
                    <span className="text-xl">🇦🇪</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dubaï Moderne</h4>
                    <p className="text-xs text-slate-400">Luxe et innovation</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300">
                  Accès VIP aux attractions, hébergement dans des palaces, expériences désert exclusives et shopping dans les souks modernes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-lg flex items-center justify-center">
                    <span className="text-xl">🇫🇷</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">France Élégante</h4>
                    <p className="text-xs text-slate-400">Art de vivre</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300">
                  Dîners dans des restaurants étoilés, visites de vignobles prestigieux, et découverte des plus beaux châteaux et musées.
                </p>
              </div>
            </div>

          </div>
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