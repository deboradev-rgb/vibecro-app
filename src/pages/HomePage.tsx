import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Image1 from '@/public/logoipsum1.png' 
import Image2 from '@/public/logoipsum2.png' 
import Image3 from '@/public/logoipsum3.png' 
import Image5 from '@/public/logoipsum5.png' 
import Image6 from '@/public/logoipsum6.png' 
//import equipe from '@/public/equipe.jpg'
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
  Eye,
  Code,
  Palette,
  Smartphone,
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

  const partnerLogos = [Image1, Image2, Image3, Image5, Image6];

  const services = [
    {
      id: 0,
      title: 'IoT & Tracking Intelligent',
      description: 'Suivez en temps réel vos véhicules, colis, missions ou personnel grâce à notre solution Vibecro Tracking.',
      icon: Wifi,
      color: '#e38f00',
      stats: '50+ projets IoT'
    },
    {
      id: 1,
      title: 'Solutions RH-IA',
      description: 'RH-IA est une plateforme intelligente qui automatise et améliore vos processus RH grâce à l’IA.',
      icon: Brain,
      color: '#e38f00',
      stats: '-60% temps recrutement'
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
      title: 'Conciergerie Touristique & Numérique',
      description: 'Réservez, organisez et vivez une expérience de voyage haut de gamme avec Vibecro.',
      icon: Smartphone,
      color: '#e38f00',
      stats: '100% responsive'
    },
  ]

  const processSteps = [
    {
      title: 'Découverte & Stratégie',
      description: 'Analyse approfondie de vos besoins et objectifs',
      icon: 'target',
      duration: '1-2 semaines'
    },
    {
      title: 'Design & Architecture',
      description: 'Conception d\'une solution optimale et intuitive',
      icon: 'palette',
      duration: '2-3 semaines'
    },
    {
      title: 'Développement Agile',
      description: 'Construction itérative avec tests continus',
      icon: 'code',
      duration: '4-12 semaines'
    },
    {
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
          className="relative w-full flex justify-center bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-900 transition-colors duration-500 pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
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
                  {heroStats.map((stat, i) => (
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
                  ))}
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="relative flex justify-center lg:justify-end w-full"
                >
                  <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
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

                    <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 via-transparent to-[#d48500]/5 rounded-3xl blur-3xl -z-10 scale-110" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SERVICES SECTION */}
        <motion.section className="w-full flex justify-center py-12 md:py-16 bg-white dark:bg-black transition-colors duration-500">
          <div className="w-4/5 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/3 max-w-xs"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-xl p-1.5 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden h-48 flex items-center justify-center">
                      <Brain className="w-20 h-20 md:w-24 md:h-24 text-[#e38f00]" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#e38f00] rounded-full flex items-center justify-center shadow-md">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#d48500] rounded-full flex items-center justify-center shadow-md">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-2/3 text-center lg:text-left"
              >
                <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-black/30 rounded-full px-4 py-1.5 mb-4">
                  <Zap className="w-4 h-4 text-[#e38f00]" />
                  <span className="text-sm font-bold text-gray-700 dark:text-white">Nos domaines d'expertise</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
                  Services <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">Premium</span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  Solutions sur-mesure alliant innovation technologique et excellence opérationnelle.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Personnalisées</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Support continu</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <div className="flex overflow-x-auto gap-5 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, scale: 1.05, rotate: 1 }}
                      className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-gradient-to-br from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-gray-700 hover:border-[#e38f00] dark:hover:border-[#e38f00] hover:shadow-2xl transition-all duration-300 snap-center"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                          style={{ backgroundColor: service.color }}
                        >
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">{service.title}</h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                      <div className="text-xs md:text-sm font-semibold text-[#e38f00]">{service.stats}</div>
                    </motion.div>
                  )
                })}
              </div> <br /><br /><br />

              <div className="absolute bottom-0 right-0 mt-4 md:mt-0">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-[#e38f00] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-[#d48500] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  Voir tous les services
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

      {/* PROCESS SECTION avec éléments à gauche et image à droite - Version Mobile First */}
<motion.section className="w-full flex justify-center py-12 md:py-16 bg-gradient-to-br from-[#e38f00]/10 dark:from-[#e38f00]/5 via-white dark:via-black to-slate-50 dark:to-slate-900 transition-colors duration-500">
  <div className="w-4/5">
    <div className="text-center mb-10 md:mb-12">
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

    {/* ✅ SECTION AVEC ÉLÉMENTS À GAUCHE ET IMAGE À DROITE - RESPONSIVE */}
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      
      {/* Image de l'équipe - MOBILE : en haut, DESKTOP : à droite */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[300px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group lg:order-2"
      >
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Notre équipe Vibecro"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Badge */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-sm text-white/90">Des experts passionnés à votre service</p>
        </div>
      </motion.div>
      
      {/* Conteneur des 4 éléments superposés - MOBILE : en bas, DESKTOP : à gauche */}
      <div className="relative flex flex-col space-y-6 lg:space-y-8 lg:order-1 w-full">
        
        {/* Process Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group bg-white dark:bg-black/30 rounded-2xl p-6 shadow-xl dark:shadow-white/10 border border-gray-200 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#e38f00]/10 dark:bg-[#e38f00]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              {processSteps[0].icon === 'target' && <Target className="w-7 h-7 text-[#e38f00]" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{processSteps[0].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{processSteps[0].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Process Step 2 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative group bg-white dark:bg-black/30 rounded-2xl p-6 shadow-xl dark:shadow-white/10 border border-gray-200 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#e38f00]/10 dark:bg-[#e38f00]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              {processSteps[1].icon === 'palette' && <Palette className="w-7 h-7 text-[#e38f00]" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{processSteps[1].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{processSteps[1].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Process Step 3 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group bg-white dark:bg-black/30 rounded-2xl p-6 shadow-xl dark:shadow-white/10 border border-gray-200 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#e38f00]/10 dark:bg-[#e38f00]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              {processSteps[2].icon === 'code' && <Code className="w-7 h-7 text-[#e38f00]" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{processSteps[2].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{processSteps[2].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Process Step 4 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group bg-white dark:bg-black/30 rounded-2xl p-6 shadow-xl dark:shadow-white/10 border border-gray-200 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#e38f00]/10 dark:bg-[#e38f00]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              {processSteps[3].icon === 'rocket' && <Rocket className="w-7 h-7 text-[#e38f00]" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{processSteps[3].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{processSteps[3].description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</motion.section>

        {/* SECTION POUR VOUS PROPULSER */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center lg:justify-start order-1 lg:order-1"
              >
                <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-gray-900 dark:border-gray-800 bg-gray-900">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Interface digitale Vibecro"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/65 via-transparent to-black/20">
                      <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white/95 tracking-wider drop-shadow-2xl">
                        G <span className="text-[#e38f00]">VIBECRO</span>
                      </h3>
                    </div>
                  </div>
                  <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-[#e38f00]/15 to-transparent rounded-3xl blur-2xl md:blur-3xl -z-10" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-2"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  Pour vous <span className="text-[#e38f00]">propulser</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nous offrons une pile complète de services numériques conçus pour aider les entreprises à grandir, se démarquer et performer en ligne.
                </p>

                <div className="space-y-4">
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    Nous couvrons l’ensemble de vos besoins digitaux :
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                      <span><strong>Stratégie digitale & conseil</strong> pour définir une feuille de route claire et adaptée.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                      <span><strong>Conception & développement web</strong> pour des sites modernes, performants et centrés sur l’utilisateur.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                      <span><strong>Marketing digital & SEO</strong> pour accroître votre visibilité et générer des leads qualifiés.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                      <span><strong>Design & branding</strong> pour refléter l’identité unique de votre entreprise.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#e38f00] flex-shrink-0 mt-1" />
                      <span><strong>Analyse & optimisation (CRO)</strong> pour améliorer continuellement vos performances et vos conversions.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CHRONOLOGIE */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-950/50 dark:to-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-10 md:mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full bg-[#e38f00]/10 text-[#e38f00] font-medium text-sm tracking-wider uppercase mb-4"
              >
                Notre calendrier de travail
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
              >
                Chronologie
              </motion.h2>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-14 left-0 right-0 h-[3px] bg-gray-200/70 dark:bg-gray-800/70 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#e38f00] via-[#d48500] to-[#e38f00] origin-left rounded-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative">
                {[
                  {
                    title: "Premières idées",
                    subtitle: "Planification du projet",
                    desc: "Le service de planification transforme une idée en plan d'action concret, détaillé et réalisable — votre feuille de route du début à la fin."
                  },
                  {
                    title: "Croquis finaux",
                    subtitle: "Image de marque du produit",
                    desc: "Plus qu’un logo : l’ensemble des émotions et perceptions que votre produit inspire — une personnalité forte qui fidélise et différencie."
                  },
                  {
                    title: "Processus de conception",
                    subtitle: "Conception UI/UX",
                    desc: "Création d’interfaces esthétiques, intuitives et efficaces — UI et UX travaillent en harmonie pour offrir une expérience utilisateur exceptionnelle."
                  },
                  {
                    title: "Touches finales",
                    subtitle: "Marketing et gestion",
                    desc: "Stratégies croisées pour comprendre le marché, convertir et optimiser — la clé de la croissance durable et de la performance maximale."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="relative group md:pt-12"
                  >
                    <div className="relative flex md:block justify-center md:justify-start mb-6 md:mb-8">
                      <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#e38f00] to-[#d48500] flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-xl z-10 relative group-hover:scale-110 transition-transform duration-400">
                          {index + 1}
                        </div>

                        <div className="absolute inset-0 rounded-full bg-[#e38f00]/30 blur-xl group-hover:blur-2xl transition-all duration-500" />

                        {index < 3 && (
                          <div className="absolute top-16 left-8 w-1 h-12 md:hidden bg-gradient-to-b from-[#e38f00]/40 to-transparent" />
                        )}
                      </div>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-200/80 dark:border-gray-700/60 group-hover:border-[#e38f00]/40 group-hover:shadow-2xl dark:group-hover:shadow-[#e38f00]/10 transition-all duration-500">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#e38f00] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[#e38f00] font-medium text-base md:text-lg mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NOS PROJETS */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-10 md:mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-5 py-2 rounded-full bg-[#e38f00]/10 text-[#e38f00] font-medium text-sm tracking-wider uppercase mb-4"
              >
                Réalisations récentes
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
              >
                Nos Projets
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Projet 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                    alt="Projet 1"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Nom du Projet 1
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-2 mb-4">
                    Courte description du projet 1. Explique en quelques mots ce que vous avez réalisé.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#e38f00]/10 text-[#e38f00] text-xs font-medium">
                    Catégorie / Techno
                  </span>
                </div>
              </motion.div>

              {/* Projet 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                    alt="Projet 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Nom du Projet 2
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-2 mb-4">
                    Courte description du projet 2. Mets en avant le résultat ou la valeur ajoutée.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#e38f00]/10 text-[#e38f00] text-xs font-medium">
                    Catégorie / Techno
                  </span>
                </div>
              </motion.div>

              {/* Projet 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                    alt="Projet 3"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Nom du Projet 3
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-2 mb-4">
                    Courte description du projet 3. Sois impactant et précis.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#e38f00]/10 text-[#e38f00] text-xs font-medium">
                    Catégorie / Techno
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Link
                to="/realisation"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Voir nos réalisations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION PARTENAIRES */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center py-12 md:py-16 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden"
        >
          <div className="w-4/5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative bg-gradient-to-br from-white dark:from-black/30 to-slate-50 dark:to-black/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-white/10"
            >
              <div className="text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-[#e38f00]/10 dark:bg-[#e38f00]/5 rounded-full px-6 py-3 mb-6 md:mb-8">
                  <Sparkles className="w-5 h-5 text-[#e38f00] animate-pulse" />
                  <span className="font-bold text-[#e38f00] dark:text-[#f44d0b]">Ils nous font confiance</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                  Nos entreprises
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                    partenaires
                  </span>
                </h2>

                <div className="relative overflow-hidden py-4 md:py-6">
                  <div className="flex animate-marquee-fast whitespace-nowrap">
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image1} alt="Partenaire 1" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image2} alt="Partenaire 2" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image3} alt="Partenaire 3" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                   
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image5} alt="Partenaire 5" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image6} alt="Partenaire 6" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>

                    {/* Duplication */}
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image1} alt="Partenaire 1" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image2} alt="Partenaire 2" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image3} alt="Partenaire 3" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image5} alt="Partenaire 5" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      <img src={Image6} alt="Partenaire 6" className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-400 hover:scale-110" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-10 flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 mr-2 text-[#e38f00]" />
                  <span>Des partenaires qui partagent notre vision d’excellence digitale</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* TÉMOIGNAGES */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-10 md:mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-5 py-2 rounded-full bg-[#e38f00]/10 text-[#e38f00] font-medium text-sm tracking-wider uppercase mb-4"
              >
                Ce qu'ils disent de nous
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
              >
                Témoignages
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Marie K."
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#e38f00]/30"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Marie K.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO – TechNova</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base leading-relaxed">
                  "Vibecro a transformé notre gestion RH grâce à RH-IA. Gain de temps énorme et service client exceptionnel !"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Paul D."
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#e38f00]/30"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Paul D.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Directeur Logistique – LogiTrans</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base leading-relaxed">
                  "Le tracking IoT est fiable, précis et a révolutionné notre flotte. Bravo à l’équipe Vibecro !"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Sophie L."
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#e38f00]/30"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Sophie L.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fondatrice – CréaWeb</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base leading-relaxed">
                  "Design premium, délais respectés et accompagnement au top. Je recommande à 100% Vibecro !"
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Link
                to="/realisations"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Voir plus de témoignages
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <motion.section className="w-full flex justify-center py-16 md:py-20 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
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
                      to="/realisation"
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