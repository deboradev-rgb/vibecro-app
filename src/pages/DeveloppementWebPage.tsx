import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code, CheckCircle, ArrowRight, Zap, Layers, BarChart3 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DeveloppementWebPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Développeur web au travail sur son PC'
    },
    {
      url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Équipe de développement travaillant sur des ordinateurs'
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
                onError={(e) => {
                  e.currentTarget.src = heroImages[0].url;
                }}
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

      {/* Solutions Overview */}
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
            Nos Expertise Techniques
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Moderne',
                description: 'React, Vue.js, Next.js, Svelte avec TypeScript et Tailwind CSS.',
                icon: Layers
              },
              {
                title: 'Backend Scalable',
                description: 'Node.js, Python (Django/FastAPI), Go, avec architectures microservices.',
                icon: Zap
              },
              {
                title: 'Bases de Données',
                description: 'SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis), ElasticSearch.',
                icon: BarChart3
              },
              {
                title: 'APIs RESTful & GraphQL',
                description: 'Conception d\'APIs performantes, documentation Swagger/OpenAPI.',
                icon: Code
              },
              {
                title: 'Responsive Design',
                description: 'Interfaces adaptables à tous les appareils, Progressive Web Apps.'
              },
              {
                title: 'Déploiement Cloud',
                description: 'AWS, Google Cloud, Azure avec CI/CD, containerisation Docker.'
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
                  {Icon && <div className="w-14 h-14 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Features */}
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
            Avantages de Nos Solutions Web
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              'Performance optimisée (Core Web Vitals A+)',
              'SEO natif et optimisé pour les moteurs',
              'Sécurité OWASP et SSL/TLS avancé',
              'Scalabilité horizontale et verticale',
              'Code maintenable et bien documenté',
              'Tests unitaires et e2e complets'
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
            Nos Projets Web
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Portails E-commerce',
                desc: 'Boutiques en ligne performantes avec paiement sécurisé, gestion d\'inventaire.'
              },
              {
                title: 'SaaS & Plateformes',
                desc: 'Applications cloud multi-tenant, facturation, gestion des utilisateurs.'
              },
              {
                title: 'Dashboards Métier',
                desc: 'Analytics avancées, visualisations en temps réel, rapports automatisés.'
              },
              {
                title: 'Portails Clients',
                desc: 'Espaces sécurisés pour clients, documentation, suivis de commandes.'
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

      {/* Tech Stack */}
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
            Notre Stack Technologique
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { category: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
              { category: 'Backend', techs: ['Node.js', 'Python', 'Go', 'Java'] },
              { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'] },
              { category: 'DevOps', techs: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5 rounded-3xl p-8 border border-[#e38f00]/20 dark:border-[#e38f00]/10"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.techs.map((tech, j) => (
                    <p key={j} className="text-slate-600 dark:text-slate-400 text-sm">✓ {tech}</p>
                  ))}
                </div>
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
            Donnez Vie à Votre Vision Web
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Transformez vos idées en applications web performantes et scalables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?type=quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <span>Demander un Devis</span>
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