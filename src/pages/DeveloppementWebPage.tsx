import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code, CheckCircle, ArrowRight, Zap, Layers, BarChart3, Globe, Cpu, Database, Shield, Smartphone, Cloud } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DeveloppementWebPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=2070&q=80',
      alt: 'Développeur web africain travaillant sur son PC'
    },
    {
      url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=2070&q=80',
      alt: 'Équipe de développement travaillant sur des ordinateurs'
    },
    {
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80',
      alt: 'Développement de code moderne'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-16 md:py-20 overflow-hidden"
      >
        {/* Images de fond qui défilent */}
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
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80';
                }}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-slate-50/90 dark:from-black/75 dark:via-black/65 dark:to-black/90"></div>
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

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
              <Code className="w-5 h-5 text-[#e38f00]" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Développement Web</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text mb-6">
              Développement <span className="text-[#e38f00]">Web</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Applications web performantes, scalables et sécurisées avec les technologies les plus modernes
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 1 : Introduction avec image */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-950 dark:via-indigo-950/20 dark:to-gray-950"
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
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full text-[#e38f00] dark:text-[#f44d0b] font-medium text-sm border border-[#e38f00]/20">
                <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                <span>Solutions Digitales Innovantes</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-[#e38f00]">Transformation</span> Digitale Sur Mesure
              </h2>

              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Nous créons des applications web qui transforment votre vision en réalité digitale. 
                  Chaque projet est conçu pour offrir une expérience utilisateur exceptionnelle tout en répondant 
                  à vos objectifs business spécifiques.
                </p>
                
                <p>
                  Notre approche combine expertise technique et compréhension profonde de vos besoins pour 
                  développer des solutions web qui stimulent votre croissance et optimisent vos opérations.
                </p>

                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-5 border border-[#e38f00]/10">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Nous ne construisons pas seulement des sites web, nous créons des écosystèmes digitaux 
                    qui propulsent votre entreprise vers l'avenir.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact?type=developpement-web"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Discuter de votre projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* DROITE : Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-gray-700"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Développeur web travaillant sur du code moderne avec plusieurs écrans"
                className="w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge sur l'image */}
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">Code Moderne</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2 : Solutions Overview Modernisée */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 dark:from-black/80 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e38f00]">
                Expertise Technique
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Nos <span className="text-[#e38f00]">Expertise</span> Techniques
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Des solutions complètes adaptées à chaque besoin de développement web
            </p>
          </motion.div>

          {/* Grille des services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Moderne',
                description: 'React, Vue.js, Next.js, Svelte avec TypeScript et Tailwind CSS pour des interfaces utilisateur performantes et réactives.',
                icon: Globe,
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80',
                delay: 0.1
              },
              {
                title: 'Backend Scalable',
                description: 'Node.js, Python (Django/FastAPI), Go, avec architectures microservices pour des applications robustes et évolutives.',
                icon: Cpu,
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
                delay: 0.2
              },
              {
                title: 'Bases de Données',
                description: 'SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis), ElasticSearch pour une gestion optimale des données.',
                icon: Database,
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
                delay: 0.3
              },
              {
                title: 'Sécurité Web',
                description: 'Protection OWASP, SSL/TLS avancé, authentification sécurisée pour garantir la sécurité de vos applications.',
                icon: Shield,
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
                delay: 0.4
              },
              {
                title: 'Responsive Design',
                description: 'Interfaces adaptables à tous les appareils, Progressive Web Apps pour une expérience utilisateur optimale.',
                icon: Smartphone,
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
                delay: 0.5
              },
              {
                title: 'Déploiement Cloud',
                description: 'AWS, Google Cloud, Azure avec CI/CD, containerisation Docker et orchestration Kubernetes.',
                icon: Cloud,
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
                delay: 0.6
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Effet de fond au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 to-[#d48500]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Carte principale */}
                <div className="relative bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-3xl p-6 h-full overflow-hidden transition-all duration-300 group-hover:border-[#e38f00]/30 dark:group-hover:border-[#e38f00]/20">
                  
                  {/* Image miniature */}
                  <div className="relative h-40 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Icône sur l'image */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative">
                    {item.title}
                    <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-[#e38f00]/30 to-transparent dark:from-[#e38f00]/50 rounded-full"></div>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Points décoratifs */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-full blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mt-12"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-white/80 to-white/40 dark:from-black/60 dark:to-black/40 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl">
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Besoin d'une solution spécifique ?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Notre équipe d'experts est à votre disposition pour discuter de votre projet
                </p>
              </div>
              <Link
                to="/contact?type=expertise-web"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[180px] justify-center"
              >
                <span>Consulter un expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-0 group-hover:opacity-100"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3 : Avantages avec images */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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
                Nos Avantages
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Avantages de <span className="text-[#e38f00]">Nos Solutions</span> Web
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Pourquoi choisir nos services de développement web ?
            </p>
          </motion.div>

          {/* Grille des avantages avec images */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Image à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Dashboard analytique moderne avec graphiques et données"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-lg font-semibold">📊 Analytics Avancées</span>
              </div>
            </motion.div>

            {/* Liste des avantages à droite */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                'Performance optimisée (Core Web Vitals A+)',
                'SEO natif et optimisé pour les moteurs de recherche',
                'Sécurité OWASP et SSL/TLS avancé',
                'Scalabilité horizontale et verticale',
                'Code maintenable et bien documenté',
                'Tests unitaires et e2e complets',
                'Support technique réactif 24/7',
                'Formation de vos équipes'
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <CheckCircle className="w-6 h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                  <span className="text-lg text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 4 : Nos Projets Web avec carrousel */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5"
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
                Nos Réalisations
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Nos <span className="text-[#e38f00]">Projets</span> Web
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Découvrez les types de projets que nous réalisons pour nos clients
            </p>
          </motion.div>

          {/* Carrousel horizontal */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide space-x-4 lg:space-x-6">
              
              {/* Portails E-commerce */}
              <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                    alt="Site e-commerce moderne avec produits"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Portails E-commerce</h3>
                    <p className="text-slate-200 text-sm">
                      Boutiques en ligne performantes avec paiement sécurisé, gestion d'inventaire et marketing intégré.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* SaaS & Plateformes */}
              <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Dashboard SaaS moderne"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">SaaS & Plateformes</h3>
                    <p className="text-slate-200 text-sm">
                      Applications cloud multi-tenant, facturation automatique, gestion des utilisateurs et analytics avancées.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Dashboards Métier */}
              <div className="flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 snap-center">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Dashboard analytique professionnel"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Dashboards Métier</h3>
                    <p className="text-slate-200 text-sm">
                      Analytics avancées, visualisations en temps réel, rapports automatisés et prise de décision éclairée.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-2 h-2 bg-[#e38f00]/50 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 5 : Stack Technologique avec images */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e38f00]">
                Technologies Utilisées
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Notre <span className="text-[#e38f00]">Stack</span> Technologique
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Nous utilisons les technologies les plus modernes et performantes
            </p>
          </motion.div>

          {/* Grille des technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                category: 'Frontend', 
                techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80'
              },
              { 
                category: 'Backend', 
                techs: ['Node.js', 'Python', 'Go', 'Java', 'PHP'],
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
              },
              { 
                category: 'Databases', 
                techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ElasticSearch'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
              },
              { 
                category: 'DevOps', 
                techs: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
              }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-white/80 to-white/40 dark:from-black/60 dark:to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-white/10 overflow-hidden"
              >
                {/* Image de fond */}
                <img
                  src={stack.image}
                  alt={stack.category}
                  className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.techs.map((tech, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#e38f00] rounded-full"></div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">✓ {tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 6 : CTA Final */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Fond gradient avec image */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Équipe de développement collaborant"
                className="w-full h-full object-cover opacity-20"
                loading="lazy"
              />
            </div>
            
            {/* Effets décoratifs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#e38f00]/10 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e38f00]/5 rounded-full translate-x-48 translate-y-48"></div>
            
            <div className="relative z-10 p-8 lg:p-12 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Donnez Vie à Votre <span className="text-[#e38f00]">Vision Web</span>
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Transformez vos idées en applications web performantes et scalables. Notre équipe d'experts est prête à concrétiser votre projet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contact?type=devis-web"
                  className="group relative inline-flex items-center gap-3 bg-white text-slate-900 font-bold py-5 px-10 rounded-full text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[220px] justify-center"
                >
                  <span>Demander un Devis</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border-2 border-white/50 text-white font-bold py-5 px-10 rounded-full text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm min-w-[220px] justify-center"
                >
                  <span>Contactez-nous</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}