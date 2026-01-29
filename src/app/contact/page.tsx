// frontend/src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles,
  Send,
  Globe,
  MessageSquare,
  Video,
  Calendar,
  CheckCircle,
  Shield,
  Zap,
  ExternalLink,
  ArrowRight,
  MailOpen,
  PhoneCall,
  Map,
  Users,
  MessageCircle,
  Target,
  User,
  Building,
  FileText
} from 'lucide-react';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'support' | 'sales'>('general');

  const contactInfo = {
    email: {
      icon: MailOpen,
      main: 'groupe-vibecro@outlook.fr',
      support: 'support@vibecro.com',
      sales: 'sales@vibecro.com'
    },
    phone: {
      icon: PhoneCall,
      numbers: ['+229 01 40 96 33 33', '+229 01 21 31 54 64'],
      emergency: '+229 01 23 45 67 89'
    },
    address: {
      icon: Map,
      line1: 'Abomey-Calavi',
      line2: 'Derrière le CEG Godomey',
      mapLink: '#'
    },
    hours: {
      icon: Clock,
      weekdays: 'Lun - Ven: 8h30 - 18h30',
      saturday: 'Samedi: 9h - 13h',
      support: 'Support 24/7'
    }
  };

  const contactMethods = [
    {
      type: 'general',
      title: 'Demande Générale',
      description: 'Questions générales, informations, partenariats',
      icon: MessageSquare,
      response: '24h'
    },
    {
      type: 'support',
      title: 'Support Technique',
      description: 'Assistance produit, incidents, assistance',
      icon: Shield,
      response: '2h'
    },
    {
      type: 'sales',
      title: 'Commercial',
      description: 'Devis, démonstrations, propositions commerciales',
      icon: Zap,
      response: '1h'
    }
  ];

  const quickActions = [
    {
      title: 'Réserver un appel',
      description: 'Planifier un appel avec un expert',
      icon: Video,
      link: '#'
    },
    {
      title: 'Documentation',
      description: 'Accéder à nos guides et ressources',
      icon: Globe,
      link: '#'
    },
    {
      title: 'État des services',
      description: 'Vérifier le statut de nos services',
      icon: Shield,
      link: '#'
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
                  <span className="text-sm font-bold text-gray-800">Connectons nos Expertises</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
                >
                  Discutons de votre
                  <br />
                  <motion.span
                    className="text-transparent bg-gradient-to-r from-[#e38f00] via-[#d48500] to-[#c67b00] bg-clip-text"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Projet Innovant
                  </motion.span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.7 }} 
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Notre équipe d'experts est prête à transformer vos idées en solutions concrètes. 
                  <span className="font-bold text-[#e38f00]"> Réponse garantie sous 24h</span>.
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
                    <a 
                      href="#form"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl whitespace-nowrap"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      <span>Envoyer un message</span>
                      <motion.div 
                        animate={{ x: [0, 8, 0] }} 
                        transition={{ repeat: Infinity, duration: 1.6 }} 
                        className="ml-3"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </a>
                  </motion.button>

                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <a 
                      href="tel:+2290140963333"
                      className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-[#e38f00] hover:text-[#e38f00] transition-all whitespace-nowrap"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <span>Nous appeler</span>
                    </a>
                  </motion.button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.9 }} 
                  className="grid grid-cols-4 gap-6 pt-10"
                >
                  {[
                    { value: '< 24h', label: 'Temps de réponse' },
                    { value: '98%', label: 'Satisfaction'},
                    { value: '15+', label: 'Langues supportées' },
                    { value: '24/7', label: 'Support technique'}
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
                          <MessageCircle className="w-12 h-12 animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold">VIBECRO</h3>
                        <p className="text-white/80">Contact & Support</p>
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

        {/* MAIN CONTENT - 80% width */}
        <div id="form" className="w-full flex justify-center py-20">
          <div className="w-4/5 max-w-7xl px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar gauche - Informations de contact */}
              <div className="lg:col-span-1 space-y-8">
                {/* Sélecteur de type de contact */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center text-black">
                    <MessageSquare className="w-5 h-5 mr-2 text-[#e38f00]" />
                    Type de demande
                  </h3>
                  
                  <div className="space-y-3">
                    {contactMethods.map((method) => (
                      <motion.button
                        key={method.type}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab(method.type as any)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          activeTab === method.type 
                            ? 'bg-gradient-to-r from-[#e38f00]/10 to-[#e38f00]/5 border-2 border-[#e38f00]/30 shadow-sm' 
                            : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                              activeTab === method.type ? 'bg-[#e38f00]' : 'bg-[#e38f00]/10'
                            }`}>
                              <method.icon className={`w-5 h-5 ${
                                activeTab === method.type ? 'text-white' : 'text-[#e38f00]'
                              }`} />
                            </div>
                            <div>
                              <div className={`font-bold ${
                                activeTab === method.type ? 'text-[#e38f00]' : 'text-black'
                              }`}>
                                {method.title}
                              </div>
                              <div className="text-sm text-gray-700">{method.description}</div>
                            </div>
                          </div>
                          <div className={`text-sm font-semibold ${
                            activeTab === method.type ? 'text-[#e38f00]' : 'text-gray-600'
                          }`}>
                            {method.response}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Informations de contact détaillées */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center text-black">
                    <Send className="w-5 h-5 mr-2 text-[#e38f00]" />
                    Contact Direct
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-start mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#e38f00]/10 flex items-center justify-center mr-4 group-hover:bg-[#e38f00] transition-colors">
                          <contactInfo.email.icon className="w-6 h-6 text-[#e38f00] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Email</div>
                          <a 
                            href={`mailto:${contactInfo.email.main}`}
                            className="text-lg font-bold text-black group-hover:text-[#e38f00] transition-colors"
                          >
                            {contactInfo.email.main}
                          </a>
                        </div>
                      </div>
                      <div className="pl-16 space-y-2">
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Support:</span>{' '}
                          <a href={`mailto:${contactInfo.email.support}`} className="hover:text-[#e38f00]">
                            {contactInfo.email.support}
                          </a>
                        </div>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Commercial:</span>{' '}
                          <a href={`mailto:${contactInfo.email.sales}`} className="hover:text-[#e38f00]">
                            {contactInfo.email.sales}
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Téléphone */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-start mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#e38f00]/10 flex items-center justify-center mr-4 group-hover:bg-[#e38f00] transition-colors">
                          <contactInfo.phone.icon className="w-6 h-6 text-[#e38f00] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Téléphone</div>
                          <div className="space-y-1">
                            {contactInfo.phone.numbers.map((number, idx) => (
                              <a 
                                key={idx}
                                href={`tel:${number.replace(/\s/g, '')}`}
                                className="block text-lg font-bold text-black group-hover:text-[#e38f00] transition-colors"
                              >
                                {number}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pl-16">
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Urgences:</span>{' '}
                          <a href={`tel:${contactInfo.phone.emergency.replace(/\s/g, '')}`} className="hover:text-[#e38f00]">
                            {contactInfo.phone.emergency}
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Adresse */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-xl bg-[#e38f00]/10 flex items-center justify-center mr-4 group-hover:bg-[#e38f00] transition-colors">
                          <contactInfo.address.icon className="w-6 h-6 text-[#e38f00] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Adresse</div>
                          <address className="not-italic text-lg font-bold text-black group-hover:text-[#e38f00] transition-colors">
                            {contactInfo.address.line1}<br />
                            {contactInfo.address.line2}
                          </address>
                          <a 
                            href="#"
                            className="inline-flex items-center text-sm text-[#e38f00] hover:text-[#d48500] mt-2 group/link"
                          >
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>Voir sur la carte</span>
                            <ExternalLink className="w-3 h-3 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Horaires */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-xl bg-[#e38f00]/10 flex items-center justify-center mr-4 group-hover:bg-[#e38f00] transition-colors">
                          <contactInfo.hours.icon className="w-6 h-6 text-[#e38f00] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Horaires</div>
                          <div className="text-black font-medium">
                            <div>{contactInfo.hours.weekdays}</div>
                            <div>{contactInfo.hours.saturday}</div>
                            <div className="text-[#e38f00]">{contactInfo.hours.support}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Actions rapides */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center text-black">
                    <Zap className="w-5 h-5 mr-2 text-[#e38f00]" />
                    Actions Rapides
                  </h3>
                  
                  <div className="space-y-4">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <motion.a
                          key={index}
                          whileHover={{ scale: 1.05, y: -4 }}
                          href="#"
                          className="group block p-4 rounded-xl bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mr-3">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-bold">{action.title}</div>
                                <div className="text-sm opacity-90">{action.description}</div>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Formulaire de contact - Main */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="sticky top-32"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
                    {/* En-tête du formulaire */}
                    <div className="bg-gradient-to-r from-[#e38f00] to-[#d48500] p-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between mb-4"
                      >
                        <div>
                          <h2 className="text-2xl font-bold mb-2">Envoyez-nous un message</h2>
                          <p className="opacity-90">
                            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                          </p>
                        </div>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                          <Send className="w-8 h-8" />
                        </div>
                      </motion.div>
                      
                      {/* Indicateurs */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                      >
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-white/80" />
                          <span className="text-sm">Réponse sous 24h</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 mr-2" />
                          <span className="text-sm">Données sécurisées</span>
                        </div>
                        <div className="flex items-center">
                          <Sparkles className="w-5 h-5 mr-2" />
                          <span className="text-sm">Expert dédié</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Corps du formulaire */}
                    <div className="p-8">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8"
                      >
                        <div className="text-sm font-medium text-gray-600 mb-2">
                          Type de demande sélectionné :
                        </div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#e38f00]/10 text-[#e38f00] font-semibold">
                          {contactMethods.find(m => m.type === activeTab)?.title}
                        </div>
                      </motion.div>
                      
                      <ContactForm type={activeTab} />
                      
                      {/* Garanties */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 pt-8 border-t border-gray-200"
                      >
                        <div className="text-center">
                          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
                            <div className="flex items-center">
                              <Shield className="w-4 h-4 mr-2 text-[#e38f00]" />
                              <span>Confidentialité garantie</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-[#e38f00]" />
                              <span>Réponse rapide</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2 text-[#e38f00]" />
                              <span>Sans engagement</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION - 80% width */}
        <div className="w-full flex justify-center py-20">
          <div className="w-4/5 max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black rounded-2xl overflow-hidden border border-gray-800"
            >
              <div className="p-8 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Notre Siège</h3>
                    <p className="text-white/80">Visitez-nous ou planifiez une rencontre</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors inline-flex items-center group/map"
                    >
                      <MapPin className="w-5 h-5 transform group-hover/map:scale-110 transition-transform" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      href="#"
                      className="px-4 py-2 bg-[#e38f00] hover:bg-[#d48500] rounded-lg font-semibold transition-colors inline-flex items-center group/calendar"
                    >
                      <Calendar className="w-5 h-5 mr-2 transform group-hover/calendar:scale-110 transition-transform" />
                      Planifier une visite
                    </motion.a>
                  </div>
                </div>
                
                {/* Carte placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-80 bg-gradient-to-r from-[#e38f00]/20 to-black/50 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                  <div className="relative text-center">
                    <Map className="w-16 h-16 mx-auto mb-4 text-[#e38f00]" />
                    <div className="text-2xl font-bold mb-2 text-white">Carte Interactive</div>
                    <p className="text-white/80">Notre localisation en temps réel</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA FINAL - 80% width */}
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
                <MessageCircle className="w-32 h-32 text-[#e38f00]/20" />
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
                  <span className="font-bold text-[#e38f00]">Prêt à collaborer ?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Commençons votre
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text">
                    projet dès aujourd'hui
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Notre équipe est prête à vous accompagner dans la réalisation de vos ambitions digitales les plus audacieuses.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <a
                      href="#form"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl whitespace-nowrap"
                    >
                      <MessageSquare className="w-6 h-6 mr-3" />
                      Nouveau message
                    </a>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <a
                      href="tel:+2290140963333"
                      className="inline-flex items-center justify-center border-2 border-gray-400 text-gray-700 px-10 py-4 rounded-2xl font-bold hover:border-[#e38f00] hover:text-[#e38f00] whitespace-nowrap"
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      Appel direct
                    </a>
                  </motion.button>
                </div>
                
                <div className="mt-12 flex items-center justify-center text-gray-600 text-sm">
                  <CheckCircle className="w-5 h-5 mr-2 text-[#e38f00]" />
                  <span>Expertise certifiée • Solutions sur-mesure • Support dédié</span>
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