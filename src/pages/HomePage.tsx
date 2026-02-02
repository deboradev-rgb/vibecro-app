import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Rocket, 
  Target, 
  Shield,
  Brain,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Eye,
  Code,
  Palette,
  Smartphone,
  Cloud,
  Wifi,
  MessageSquare,
  Trophy
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const heroStats = [
    { value: '150+', label: 'Projets Livrés', icon: Trophy },
    { value: '98%', label: 'Satisfaction Client', icon: Star },
    { value: '30+', label: 'Experts Talents', icon: Users },
    { value: '6+', label: 'Années d\'Expérience', icon: Award }
  ]

  const services = [
    {
      id: 0,
      title: 'IoT & Tracking Intelligent',
      description: 'Solutions connectées pour le monitoring en temps réel',
      icon: Wifi,
      color: '#e38f00',
      stats: '50+ projets IoT'
    },
    {
      id: 1,
      title: 'Solutions RH-IA',
      description: 'Automatisation et intelligence artificielle pour les RH',
      icon: Brain,
      color: '#e38f00',
      stats: '-60% temps recrutement'
    },
    {
      id: 2,
      title: 'Développement Web',
      description: 'Applications web performantes et scalables',
      icon: Code,
      color: '#e38f00',
      stats: '95+ score performance'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Design d\'interfaces intuitives et expériences mémorables',
      icon: Palette,
      color: '#e38f00',
      stats: '+40% engagement'
    },
    {
      id: 4,
      title: 'Applications Mobile',
      description: 'Applications natives pour iOS et Android',
      icon: Smartphone,
      color: '#e38f00',
      stats: '100% responsive'
    },
    {
      id: 5,
      title: 'Infrastructure Cloud',
      description: 'Solutions cloud sécurisées et scalables',
      icon: Cloud,
      color: '#e38f00',
      stats: '99.9% disponibilité'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Découverte & Stratégie',
      description: 'Analyse approfondie de vos besoins et objectifs',
      icon: 'target',
      duration: '1-2 semaines'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Conception d\'une solution optimale et intuitive',
      icon: 'palette',
      duration: '2-3 semaines'
    },
    {
      step: '03',
      title: 'Développement Agile',
      description: 'Construction itérative avec tests continus',
      icon: 'code',
      duration: '4-12 semaines'
    },
    {
      step: '04',
      title: 'Lancement & Support',
      description: 'Déploiement et maintenance continue',
      icon: 'rocket',
      duration: 'Support continu'
    }
  ]

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
      <main className="relative w-full">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full flex justify-center bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-900 transition-colors duration-500 pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
        >
          <div className="w-4/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Texte */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-center lg:text-left space-y-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                  className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mx-auto lg:mx-0"
                >
                  <Sparkles className="w-5 h-5 text-[#e38f00] animate-pulse" />
                  <span className="text-sm font-bold text-gray-800 dark:text-white">L'agence digitale innovante</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight"
                >
                  Solutions Digitales
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#e38f00] via-[#d48500] to-[#c67b00] bg-clip-text">
                    sur Mesure
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.7 }} 
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Nous transformons vos idées en solutions digitales innovantes avec expertise et passion.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.8 }} 
                  className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                >
                  <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="group">
                    <Link
                      to="/contact?type=project"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl whitespace-nowrap"
                    >
                      <span>Démarrer un projet</span>
                      <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="ml-3">
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </motion.button>

                  <motion.button whileHover={{ scale: 1.05 }} className="group">
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-2xl font-bold hover:border-[#e38f00] hover:text-[#e38f00] dark:hover:border-[#f44d0b] dark:hover:text-[#f44d0b] transition-all whitespace-nowrap"
                    >
                      Explorer nos services
                    </Link>
                  </motion.button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.9 }} 
                  className="grid grid-cols-4 gap-6 pt-10"
                >
                  {heroStats.map((stat, i) => {
                    return (
                      <motion.div key={i} whileHover={{ scale: 1.15 }} className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, delay: i * 0.2 }}
                          className="text-3xl font-black text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text"
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-gray-600 dark:text-gray-400 font-medium mt-1 text-sm">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
               {/* Hero Visual – version centrée + symétrique + plus premium */}
<motion.div
  initial={{ opacity: 0, scale: 0.92, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  className="relative flex justify-center lg:justify-end w-full"
>

  {/* Conteneur qui contrôle la taille ET l'alignement */}
  <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">

    {/* Carte principale */}
    <motion.div
      animate={{ y: [-12, 10, -12] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto"
    >
      <div className="relative z-10 bg-gradient-to-br from-[#e38f00] via-[#d48500] to-[#c67b00] rounded-3xl p-7 shadow-2xl shadow-[#e38f00]/25">
        <div className="bg-white/12 backdrop-blur-md rounded-2xl p-7 border border-white/10">
          <div className="text-white text-center space-y-7">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white/25 to-white/10 rounded-2xl flex items-center justify-center shadow-inner">
              <Sparkles className="w-14 h-14 animate-spin-slow text-white drop-shadow-lg" />
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight">VIBECRO</h3>
            <p className="text-white/90 text-lg font-medium tracking-wide">
              Innovation & Excellence Digitale
            </p>
          </div>
        </div>
      </div>

      {/* Orbes plus discrets et symétriques */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 380] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -left-10 w-28 h-28 bg-[#e38f00]/30 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 24, 0], scale: [1, 1.35, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-14 -right-12 w-32 h-32 bg-[#d48500]/25 rounded-full blur-2xl"
      />
    </motion.div>

    {/* Petit effet décoratif subtil en plus (optionnel) */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 via-transparent to-[#d48500]/5 rounded-3xl blur-3xl -z-10 scale-110" />
  </div>
</motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SERVICES SECTION */}
        <motion.section className="w-full flex justify-center py-20 bg-white dark:bg-black transition-colors duration-500">
          <div className="w-4/5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/3 max-w-md"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl p-2 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="bg-white rounded-xl overflow-hidden h-64 flex items-center justify-center">
                      <Brain className="w-32 h-32 text-[#e38f00]" />
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#e38f00] rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#d48500] rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-2/3 text-center lg:text-left"
              >
                <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-black/30 rounded-full px-5 py-2 mb-4">
                  <Zap className="w-4 h-4 text-[#e38f00]" />
                  <span className="text-sm font-bold text-gray-700 dark:text-white">Nos domaines d'expertise</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
                  Services
                  <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text"> Premium</span>
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Des solutions sur-mesure qui combinent innovation technologique et excellence opérationnelle 
                  pour propulser votre entreprise vers le succès digital.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#e38f00] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Solutions personnalisées</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#e38f00] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Support continu</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.7 }}
                    whileHover={{ y: -16, scale: 1.06 }}
                    className="group bg-gradient-to-br from-white dark:from-black/30 to-gray-50 dark:to-black/50 rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#e38f00] dark:hover:border-[#e38f00] hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-500 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.7 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon className="w-9 h-9 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.description}</p>
                    <div className="text-sm text-[#e38f00] dark:text-[#f44d0b] font-bold">{service.stats}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* PROCESS SECTION */}
        <motion.section className="w-full flex justify-center py-20 bg-gradient-to-br from-[#e38f00]/10 dark:from-[#e38f00]/5 via-white dark:via-black to-slate-50 dark:to-slate-900 transition-colors duration-500">
          <div className="w-4/5">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-white dark:bg-black/30 rounded-full px-6 py-3 shadow-lg dark:shadow-white/10 mb-6"
              >
                <Rocket className="w-5 h-5 text-[#e38f00]" />
                <span className="font-bold text-gray-800 dark:text-white">Méthodologie éprouvée</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-black mb-6 text-gray-900 dark:text-white"
              >
                Notre Processus
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">d'Excellence</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
              >
                Une approche structurée pour garantir le succès de chaque projet, de l'idée à la réalisation.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-white dark:bg-black/30 rounded-2xl p-8 shadow-xl dark:shadow-white/10 border border-gray-200 dark:border-white/10 group-hover:shadow-2xl dark:group-hover:shadow-white/20 transition-all duration-300 h-full">
                    <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {step.step}
                    </div>
                    
                    <div className="w-14 h-14 mb-6 bg-[#e38f00]/10 dark:bg-[#e38f00]/5 rounded-xl flex items-center justify-center ml-auto">
                      {step.icon === 'target' && <Target className="w-7 h-7 text-[#e38f00]" />}
                      {step.icon === 'palette' && <Palette className="w-7 h-7 text-[#e38f00]" />}
                      {step.icon === 'code' && <Code className="w-7 h-7 text-[#e38f00]" />}
                      {step.icon === 'rocket' && <Rocket className="w-7 h-7 text-[#e38f00]" />}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA SECTION */}
        <motion.section className="w-full flex justify-center py-20 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
          <div className="w-4/5 relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100vw" }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 left-0 w-[500px] h-[200px] hidden lg:block opacity-10"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Code className="w-32 h-32 text-[#e38f00]/20" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative bg-gradient-to-br from-white dark:from-black/30 to-slate-50 dark:to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-white/10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-[#e38f00]/10 dark:bg-[#e38f00]/5 rounded-full px-6 py-3 mb-8">
                  <Sparkles className="w-5 h-5 text-[#e38f00] animate-pulse" />
                  <span className="font-bold text-[#e38f00] dark:text-[#f44d0b]">Prêt à innover ?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                  Transformons vos idées
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                    en réalité digitale
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Discutons de votre projet et découvrez comment nos solutions peuvent propulser votre entreprise vers l'excellence digitale.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Link
                      to="/contact?type=quote"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl whitespace-nowrap"
                    >
                      <MessageSquare className="w-6 h-6 mr-3" />
                      Demander un devis
                    </Link>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center justify-center border-2 border-gray-400 dark:border-white/20 text-gray-700 dark:text-white px-10 py-4 rounded-2xl font-bold hover:border-[#e38f00] dark:hover:border-[#f44d0b] hover:text-[#e38f00] dark:hover:text-[#f44d0b] whitespace-nowrap"
                    >
                      <Eye className="w-6 h-6 mr-3" />
                      Voir nos réalisations
                    </Link>
                  </motion.button>
                </div>
                
                <div className="mt-12 flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm">
                  <CheckCircle className="w-5 h-5 mr-2 text-[#e38f00]" />
                  <span>Consultation gratuite • Prototype en 48h • Satisfaction garantie</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
