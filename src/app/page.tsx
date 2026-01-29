// frontend/src/app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/ThemeWrapper';
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
  ChevronRight,
  Eye,
  Code,
  Palette,
  Smartphone,
  Cloud,
  Wifi,
  MessageSquare,
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Animation au scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const heroStats = [
    { value: '150+', label: 'Projets Livrés', icon: Trophy },
    { value: '98%', label: 'Satisfaction Client', icon: Star },
    { value: '30+', label: 'Experts Talents', icon: Users },
    { value: '6+', label: 'Années d\'Expérience', icon: Award }
  ];

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
  ];

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
  ];

  return (
    <ThemeWrapper>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        
        <main className="relative">
          {/* HERO SECTION - 80% width */}
          <div className="w-full flex justify-center bg-gradient-to-br from-white via-gray-50 to-[#f8f9fa] pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
            <div className="w-4/5 max-w-7xl px-4">
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
                    className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur rounded-2xl px-5 py-3 shadow-xl border border-gray-100"
                  >
                    <Sparkles className="w-5 h-5 text-[#e38f00] animate-pulse" />
                    <span className="text-sm font-bold text-gray-800">L'agence digitale innovante</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
                  >
                    Solutions Digitales
                    <br />
                    <motion.span
                      className="text-transparent bg-gradient-to-r from-[#e38f00] via-[#d48500] to-[#c67b00] bg-clip-text"
                      animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      sur Mesure
                    </motion.span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.7 }} 
                    className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  >
                    Nous transformons vos idées en solutions digitales innovantes avec expertise et passion.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.8 }} 
                    className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                  >
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <Link
                        href="/contact?type=project"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl whitespace-nowrap"
                      >
                        <span>Démarrer un projet</span>
                        <motion.div 
                          animate={{ x: [0, 8, 0] }} 
                          transition={{ repeat: Infinity, duration: 1.6 }} 
                          className="ml-3"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </Link>
                    </motion.button>

                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-[#e38f00] hover:text-[#e38f00] transition-all whitespace-nowrap"
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
                      const Icon = stat.icon;
                      return (
                        <motion.div 
                          key={i} 
                          whileHover={{ scale: 1.15 }} 
                          className="text-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, delay: i * 0.2 }}
                            className="text-3xl font-black text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text"
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-gray-600 font-medium mt-1 text-sm">{stat.label}</div>
                        </motion.div>
                      );
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
                  <motion.div 
                    animate={{ y: [-15, 8, -15] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
                    className="relative mx-auto lg:mx-0 max-w-sm"
                  >
                    {/* Carte visuelle */}
                    <div className="relative z-10 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-3xl p-6 shadow-2xl">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <div className="text-white text-center space-y-6">
                          <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                            <Sparkles className="w-12 h-12 animate-spin-slow" />
                          </div>
                          <h3 className="text-2xl font-bold">VIBECRO</h3>
                          <p className="text-white/80">Innovation & Excellence Digitale</p>
                        </div>
                      </div>
                    </div>

                    {/* Animations de fond */}
                    <motion.div 
                      animate={{ y: [0, -15, 0], rotate: [0, 360] }} 
                      transition={{ duration: 10, repeat: Infinity }} 
                      className="absolute -top-8 -left-8 w-20 h-20 bg-[#e38f00]/20 rounded-full blur-xl" 
                    />
                    <motion.div 
                      animate={{ y: [0, 15, 0], scale: [1, 1.3, 1] }} 
                      transition={{ duration: 5, repeat: Infinity }} 
                      className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#d48500]/20 rounded-full blur-xl" 
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* SERVICES SECTION - 80% width */}
          <div className="w-full flex justify-center py-20 bg-white">
            <div className="w-4/5 max-w-7xl px-4">
              {/* Section du titre avec image à gauche */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-16">
                {/* Image placeholder à gauche */}
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
                    {/* Décoration */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#e38f00] rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#d48500] rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Titre et description à droite */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-2/3 text-center lg:text-left"
                >
                  <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-5 py-2 mb-4">
                    <Zap className="w-4 h-4 text-[#e38f00]" />
                    <span className="text-sm font-bold text-gray-700">Nos domaines d'expertise</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                    Services
                    <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text"> Premium</span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Des solutions sur-mesure qui combinent innovation technologique et excellence opérationnelle 
                    pour propulser votre entreprise vers le succès digital.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#e38f00] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Solutions personnalisées</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#e38f00] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Support continu</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Cartes de services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.7 }}
                      whileHover={{ y: -16, scale: 1.06 }}
                      className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#e38f00] hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.7 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="w-9 h-9 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="text-sm text-[#e38f00] font-bold">{service.stats}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Message en dessous */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16 text-center"
              >
                <div className="inline-block bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-2xl p-6">
                  <p className="text-xl text-gray-700 font-medium">
                    <span className="text-[#e38f00] font-bold">Innovant</span> • 
                    <span className="text-[#d48500] font-bold mx-4">Professionnel</span> • 
                    <span className="text-[#e38f00] font-bold">Efficace</span>
                  </p>
                  <p className="text-gray-600 mt-2">Notre engagement envers votre succès digital</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* PROCESS SECTION - 80% width */}
          <div className="w-full flex justify-center py-20 bg-gradient-to-br from-[#e38f00]/10 via-white to-[#f8f9fa]">
            <div className="w-4/5 max-w-7xl px-4">
              <div className="text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
                >
                  <Rocket className="w-5 h-5 text-[#e38f00]" />
                  <span className="font-bold text-gray-800">Méthodologie éprouvée</span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl sm:text-5xl font-black mb-6 text-gray-900"
                >
                  Notre Processus
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">d'Excellence</span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
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
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Numéro de l'étape */}
                      <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {step.step}
                      </div>
                      
                      {/* Icône */}
                      <div className="w-14 h-14 mb-6 bg-[#e38f00]/10 rounded-xl flex items-center justify-center ml-auto">
                        {step.icon === 'target' && <Target className="w-7 h-7 text-[#e38f00]" />}
                        {step.icon === 'palette' && <Palette className="w-7 h-7 text-[#e38f00]" />}
                        {step.icon === 'code' && <Code className="w-7 h-7 text-[#e38f00]" />}
                        {step.icon === 'rocket' && <Rocket className="w-7 h-7 text-[#e38f00]" />}
                      </div>
                      
                      {/* Contenu */}
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      {/* Durée */}
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA SECTION - 80% width */}
          <div className="w-full flex justify-center py-20 bg-white relative overflow-hidden">
            <div className="w-4/5 max-w-7xl px-4 relative">
              {/* Image animée */}
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

              {/* Contenu principal */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative bg-gradient-to-br from-white/95 to-[#f8f9fa]/95 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl"
              >
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center space-x-2 bg-[#e38f00]/10 rounded-full px-6 py-3 mb-8">
                    <Sparkles className="w-5 h-5 text-[#e38f00] animate-pulse" />
                    <span className="font-bold text-[#e38f00]">Prêt à innover ?</span>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
                    Transformons vos idées
                    <br />
                    <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                      en réalité digitale
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Discutons de votre projet et découvrez comment nos solutions peuvent propulser votre entreprise vers l'excellence digitale.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <Link
                        href="/contact?type=quote"
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
                        href="/portfolio"
                        className="inline-flex items-center justify-center border-2 border-gray-400 text-gray-700 px-10 py-4 rounded-2xl font-bold hover:border-[#e38f00] hover:text-[#e38f00] whitespace-nowrap"
                      >
                        <Eye className="w-6 h-6 mr-3" />
                        Voir nos réalisations
                      </Link>
                    </motion.button>
                  </div>
                  
                  <div className="mt-12 flex items-center justify-center text-gray-600 text-sm">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#e38f00]" />
                    <span>Consultation gratuite • Prototype en 48h • Satisfaction garantie</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeWrapper>
  );
}