// frontend/src/app/about/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Award, 
  Globe, 
  Users, 
  Target,
  Sparkles,
  Rocket,
  Zap,
  Shield,
  Brain,
  TrendingUp,
  HeartHandshake,
  Eye,
  Users2,
  Calendar,
  CheckCircle2,
  Map,
  Briefcase,
  Star,
  Linkedin,
  Twitter,
  Github,
  Clock
} from 'lucide-react';

export default function AboutPage() {
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

  const coreValues = [
    {
      icon: Brain,
      title: 'Innovation Intelligente',
      description: 'Nous combinons IA et créativité pour des solutions avant-gardistes',
      stats: '50+ Projets Innovants'
    },
    {
      icon: Shield,
      title: 'Excellence Technique',
      description: 'Standards industriels et best practices pour chaque livrable',
      stats: '99.9% SLA'
    },
    {
      icon: TrendingUp,
      title: 'Impact Mesurable',
      description: 'KPI concrets et ROI quantifiable pour nos partenaires',
      stats: '3x ROI Moyen'
    },
    {
      icon: HeartHandshake,
      title: 'Partenariat Transparent',
      description: 'Communication ouverte et collaboration étroite',
      stats: '95% Satisfaction'
    }
  ];

  const timelineEvents = [
    {
      year: '2018',
      title: 'Naissance de VIBECRO',
      description: 'Fondation avec une vision claire : démocratiser les technologies de pointe',
      achievements: ['Première équipe', 'Vision définie', 'Premiers clients']
    },
    {
      year: '2020',
      title: 'Révolution IoT',
      description: 'Lancement de notre plateforme propriétaire de tracking intelligent',
      achievements: ['Plateforme IoT', 'Brevet déposé', '100+ Devices']
    },
    {
      year: '2022',
      title: 'Expansion Globale',
      description: 'Ouverture internationale et partenariats stratégiques',
      achievements: ['3 Bureaux', 'Clients Fortune 500', 'Equipe 30+']
    },
    {
      year: '2024',
      title: 'Ère IA & Innovation',
      description: 'Intégration IA avancée et reconnaissance industrielle',
      achievements: ['Solutions RH-IA', '50+ Employés', 'Prix Innovation']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Exploration Stratégique',
      description: 'Analyse approfondie et définition d\'une vision commune',
      duration: '1-2 Semaines'
    },
    {
      step: '02',
      title: 'Architecture Futuriste',
      description: 'Conception d\'une solution scalable et innovante',
      duration: '1-2 Semaines'
    },
    {
      step: '03',
      title: 'Développement Agile',
      description: 'Construction itérative avec feedbacks constants',
      duration: 'Variable'
    },
    {
      step: '04',
      title: 'Lancement Spectaculaire',
      description: 'Déploiement et formation pour un impact immédiat',
      duration: '1-2 Semaines'
    },
    {
      step: '05',
      title: 'Évolution Continue',
      description: 'Optimisation et innovation perpétuelle',
      duration: 'Partnership'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Fondatrice',
      expertise: 'IA & Innovation',
      image: '/team/sarah.jpg',
      quote: 'La technologie doit servir l\'humain'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO',
      expertise: 'IoT & Architecture',
      image: '/team/marcus.jpg',
      quote: 'Chaque ligne de code est un art'
    },
    {
      name: 'Élodie Martin',
      role: 'Directrice Innovation',
      expertise: 'RH-IA & Analytics',
      image: '/team/elodie.jpg',
      quote: 'L\'innovation naît de la diversité'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main className="relative">
        {/* HERO SECTION - 80% width */}
        <div className="w-full flex justify-center bg-gradient-to-br from-white via-gray-50 to-[#f8f9fa] pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="w-4/5 max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Texte à gauche */}
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
                  <span className="text-sm font-bold text-gray-800">Notre Histoire & Vision</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
                >
                  Plus qu'une Agence,
                  <br />
                  <motion.span
                    className="text-transparent bg-gradient-to-r from-[#e38f00] via-[#d48500] to-[#c67b00] bg-clip-text"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    un Partenaire d'Innovation
                  </motion.span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.7 }} 
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Depuis 2018, nous repoussons les limites du possible en combinant 
                  <span className="font-bold text-[#e38f00]"> expertise technique </span>, 
                  <span className="font-bold text-black"> vision stratégique </span> et 
                  <span className="font-bold text-[#e38f00]"> innovation disruptive</span>.
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
                      href="/contact"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl whitespace-nowrap"
                    >
                      <span>Discuter de votre projet</span>
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
                      Nos services
                    </Link>
                  </motion.button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.9 }} 
                  className="grid grid-cols-4 gap-6 pt-10"
                >
                  {[
                    { value: '6+', label: 'Années d\'Expertise' },
                    { value: '150+', label: 'Projets Livrés' },
                    { value: '30+', label: 'Experts Talents' },
                    { value: '15+', label: 'Pays Servis' }
                  ].map((stat, i) => (
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
                  ))}
                </motion.div>
              </motion.div>

              {/* Hero Visual à droite */}
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
                        <p className="text-white/80">Innovation & Excellence</p>
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

        {/* TIMELINE SECTION - 80% width */}
        <div className="w-full flex justify-center py-20 relative overflow-hidden">
          <div className="w-4/5 max-w-7xl px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              >
                <Calendar className="w-5 h-5 text-[#e38f00]" />
                <span className="font-bold text-gray-800">Notre parcours évolutif</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-black mb-6 text-gray-900"
              >
                Chronologie
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                  d'Innovation
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
              >
                De notre fondation à notre leadership actuel, chaque étape a façonné notre ADN innovant
              </motion.p>
            </div>

            {/* Timeline verticale moderne */}
            <div className="relative max-w-4xl mx-auto">
              {/* Ligne centrale */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#e38f00] via-[#d48500] to-[#c67b00] hidden lg:block"></div>
              
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative mb-16 ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-4 pl-4' : 'lg:pl-1/2 lg:pr-4 pl-4'} transform transition-all duration-700 hover:scale-105`}
                >
                  {/* Point sur la ligne */}
                  <div className={`absolute top-6 w-6 h-6 rounded-full border-4 border-white shadow-xl z-10
                    ${index % 2 === 0 ? 'lg:right-[-13px] left-[-13px]' : 'lg:left-[-13px] left-[-13px]'}
                    bg-[#e38f00]`}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#e38f00]"></div>
                  </div>
                  
                  {/* Carte */}
                  <div className={`bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow shadow-lg
                    ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    
                    {/* En-tête */}
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4
                        ${index % 2 === 0 ? 'lg:ml-auto lg:order-2' : ''}
                        bg-[#e38f00]/10`}>
                        <Calendar className="w-7 h-7 text-[#e38f00]" />
                      </div>
                      <div className={`${index % 2 === 0 ? 'lg:mr-auto lg:text-right' : ''}`}>
                        <div className="text-sm font-semibold text-gray-600 mb-1">ANNÉE</div>
                        <div className="text-3xl font-black text-[#e38f00]">
                          {event.year}
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <h3 className="text-xl font-bold mb-3 text-black">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    
                    {/* Réalisations */}
                    <div className="flex flex-wrap gap-2">
                      {event.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#e38f00]/10 text-[#e38f00]"
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* VALUES SECTION - 80% width */}
        <div className="w-full flex justify-center py-20 bg-white">
          <div className="w-4/5 max-w-7xl px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              >
                <Star className="w-5 h-5 text-[#e38f00]" />
                <span className="font-bold text-gray-800">Notre ADN culturel</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-black mb-6 text-gray-900"
              >
                Valeurs
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                  Fondamentales
                </span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
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
                      style={{ backgroundColor: '#e38f00' }}
                    >
                      <Icon className="w-9 h-9 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                    <div className="text-sm text-[#e38f00] font-bold">{value.stats}</div>
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
                  <span className="text-[#e38f00] font-bold">Innovation</span> • 
                  <span className="text-[#d48500] font-bold mx-4">Excellence</span> • 
                  <span className="text-[#e38f00] font-bold">Impact</span>
                </p>
                <p className="text-gray-600 mt-2">Les piliers de notre succès</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* PROCESS SECTION - 80% width */}
        <div className="w-full flex justify-center py-20 bg-gradient-to-br from-[#e38f00]/10 via-white to-[#f8f9fa] relative overflow-hidden">
          <div className="w-4/5 max-w-7xl px-4">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              >
                <Zap className="w-5 h-5 text-[#e38f00]" />
                <span className="font-bold text-gray-800">Méthodologie éprouvée</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-black mb-6 text-gray-900"
              >
                Notre Processus
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                  d'Excellence
                </span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                      {(() => {
                        switch(index) {
                          case 0: return <Target className="w-7 h-7 text-[#e38f00]" />;
                          case 1: return <Sparkles className="w-7 h-7 text-[#e38f00]" />;
                          case 2: return <Brain className="w-7 h-7 text-[#e38f00]" />;
                          case 3: return <Rocket className="w-7 h-7 text-[#e38f00]" />;
                          case 4: return <TrendingUp className="w-7 h-7 text-[#e38f00]" />;
                          default: return null;
                        }
                      })()}
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

        {/* TEAM SECTION - 80% width */}
        <div className="w-full flex justify-center py-20">
          <div className="w-4/5 max-w-7xl px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              >
                <Users2 className="w-5 h-5 text-[#e38f00]" />
                <span className="font-bold text-gray-800">Leadership visionnaire</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-black mb-6 text-gray-900"
              >
                L'Équipe
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                  Directrice
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
              >
                Rencontrez les visionnaires qui guident notre mission d'innovation
              </motion.p>
            </div>
            
            {/* Team Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  whileHover={{ y: -16, scale: 1.06 }}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-[#e38f00] hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#e38f00]/20 to-[#d48500]/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[#e38f00]/10"></div>
                    <Users className="w-20 h-20 text-[#e38f00]" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                    <div className="text-[#e38f00] font-semibold mb-2">{member.role}</div>
                    <div className="text-sm text-gray-600 mb-4">{member.expertise}</div>
                    <p className="text-gray-700 text-sm italic mb-6 border-l-4 border-[#e38f00] pl-4 py-2">
                      "{member.quote}"
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a 
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#e38f00]/10 flex items-center justify-center text-[#e38f00] hover:bg-[#e38f00] hover:text-white transition-colors group/social"
                      >
                        <Linkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                      </a>
                      <a 
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#e38f00]/10 flex items-center justify-center text-[#e38f00] hover:bg-[#e38f00] hover:text-white transition-colors group/social"
                      >
                        <Twitter className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                      </a>
                      <a 
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#e38f00]/10 flex items-center justify-center text-[#e38f00] hover:bg-[#e38f00] hover:text-white transition-colors group/social"
                      >
                        <Github className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* PARTNERS SECTION - 80% width */}
        <div className="w-full flex justify-center py-20 bg-gradient-to-br from-black to-gray-900">
          <div className="w-4/5 max-w-7xl px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
              >
                <Briefcase className="w-5 h-5 text-[#e38f00]" />
                <span className="font-bold text-white">Écosystème stratégique</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-black mb-6 text-white"
              >
                Nos Partenaires
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                  d'Excellence
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
              >
                Nous collaborons avec les leaders technologiques pour offrir des solutions de pointe
              </motion.p>
            </div>
            
            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {['AWS', 'Microsoft', 'Google Cloud', 'IBM', 'Oracle', 'SAP', 'Salesforce', 'Adobe', 'Cisco', 'Intel'].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-24 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center group hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#e38f00]/50 hover:shadow-lg hover:shadow-[#e38f00]/20"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-1 group-hover:scale-110 transition-transform">
                      {partner}
                    </div>
                    <div className="text-xs text-white/60 group-hover:text-[#e38f00] transition-colors">
                      Partenaire
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
                <Users2 className="w-32 h-32 text-[#e38f00]/20" />
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
                  <Rocket className="w-5 h-5 text-[#e38f00] animate-pulse" />
                  <span className="font-bold text-[#e38f00]">Rejoindre l'Aventure</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Prêt à façonner
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                    l'avenir ?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Nous recherchons des talents passionnés pour repousser les limites de l'innovation et créer un impact durable.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Link
                      href="/careers"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl whitespace-nowrap"
                    >
                      <Briefcase className="w-6 h-6 mr-3" />
                      Explorer les offres
                    </Link>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Link
                      href="/contact?type=career"
                      className="inline-flex items-center justify-center border-2 border-gray-400 text-gray-700 px-10 py-4 rounded-2xl font-bold hover:border-[#e38f00] hover:text-[#e38f00] whitespace-nowrap"
                    >
                      <Sparkles className="w-6 h-6 mr-3" />
                      Candidature spontanée
                    </Link>
                  </motion.button>
                </div>
                
                <div className="mt-12 flex items-center justify-center text-gray-600 text-sm">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-[#e38f00]" />
                  <span>Ambition • Innovation • Impact • Diversité • Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}