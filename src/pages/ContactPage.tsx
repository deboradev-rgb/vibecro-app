// src/pages/ContactPage.tsx
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Navigation, X, Edit3, Check, ChevronDown, Heart, CheckCircle as CheckCircleIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { contactAPI } from '@/lib/apiClient'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [activeField, setActiveField] = useState<string | null>(null)
  const [tempValue, setTempValue] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const heroImages = [
    { icon: Phone, label: 'Appel', color: '#e38f00' },
    { icon: Mail, label: 'Email', color: '#e38f00' },
    { icon: MessageSquare, label: 'Chat', color: '#e38f00' },
    { icon: Heart, label: 'Support', color: '#e38f00' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation des champs requis
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires')
      setTimeout(() => setErrorMessage(''), 5000)
      return
    }

    setIsLoading(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      // Préparer les données à envoyer
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        subject: formData.subject || 'Demande de contact',
        message: formData.message,
        status: 'new', // Statut par défaut
        ip_address: '', // L'adresse IP sera récupérée côté serveur
        read: false // Non lu par défaut
      }

      // Envoyer à l'API
      const response = await contactAPI.create(contactData)
      
      if (response.status === 201 || response.status === 200) {
        setSuccessMessage('Message envoyé avec succès ! Nous vous recontacterons dans les plus brefs délais.')
        
        // Réinitialiser le formulaire
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          subject: '', 
          message: '' 
        })
        
        // Supprimer le message de succès après 5 secondes
        setTimeout(() => setSuccessMessage(''), 5000)
      } else {
        throw new Error('Erreur lors de l\'envoi du message')
      }
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi du message:', error)
      
      // Gérer les différentes erreurs
      if (error.response?.status === 422) {
        // Erreur de validation Laravel
        const validationErrors = error.response.data.errors
        let errorMsg = 'Erreurs de validation:\n'
        
        for (const field in validationErrors) {
          errorMsg += `• ${field}: ${validationErrors[field].join(', ')}\n`
        }
        
        setErrorMessage(errorMsg)
      } else if (error.response?.status === 401) {
        setErrorMessage('Vous devez être connecté pour envoyer un message')
      } else if (error.message?.includes('Network Error')) {
        setErrorMessage('Erreur de connexion au serveur. Vérifiez votre connexion internet.')
      } else {
        setErrorMessage('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.')
      }
      
      // Supprimer le message d'erreur après 5 secondes
      setTimeout(() => setErrorMessage(''), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const openFieldEditor = (fieldKey: string, currentValue: string = '') => {
    setActiveField(fieldKey)
    setTempValue(currentValue || '')
  }

  const handleValidateField = () => {
    if (activeField && tempValue.trim()) {
      setFormData(prev => ({ ...prev, [activeField]: tempValue.trim() }))
    }
    setTempValue('')
    setActiveField(null)
  }

  const handleCancelEdit = () => {
    setTempValue('')
    setActiveField(null)
  }

  const subjects = [
    "Demande d'information",
    "Demande de devis",
    "Support technique",
    "Réclamation",
    "Partenariat",
    "Autre"
  ]

  const fields = [
    { key: 'name', label: 'Nom complet *', placeholder: 'Votre nom', type: 'text', required: true },
    { key: 'email', label: 'Email *', placeholder: 'votre.email@exemple.com', type: 'email', required: true },
    { key: 'phone', label: 'Téléphone', placeholder: '+213 6 00 00 00 00', type: 'tel', required: false },
    { key: 'message', label: 'Votre message *', placeholder: 'Écrivez votre message...', isTextarea: true, required: true }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      info: '05 59 58 43 83',
      subtext: '24/7 Disponible'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'tawssilgo@gmail.com',
      subtext: 'Réponse sous 1h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      info: 'Constantine, Algérie',
      subtext: 'Visite sur rendez-vous'
    }
  ]

  return (
    <>
      <div className="relative min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black ">
        
        {/* Messages d'alerte */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-4/5 max-w-md"
            >
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg shadow-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">{successMessage}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-4/5 max-w-md"
            >
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm text-red-700 whitespace-pre-line">{errorMessage}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setErrorMessage('')}
                    className="ml-3"
                  >
                    <X className="h-5 w-5 text-red-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative pt-20 pb-16 overflow-hidden"
        >
          <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
              >
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Personne dans une entreprise qui prend un appel téléphonique"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=2070&q=80';
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-4 right-4 z-10"
                >
                  <img 
                    src="/contact.png" 
                    alt="Contact" 
                    className="w-32 h-32 object-contain rounded-2xl shadow-2xl border-4 border-white/20"
                    onError={(e) => {
                      e.currentTarget.src = '/contact.png';
                    }}
                  />
                </motion.div>
                
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/40 via-transparent to-black/40 z-[2]"
                />
                
                <motion.div
                  animate={{ y: [0, -30, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-10 right-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-[3]"
                >
                  <Phone className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 30, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-10 left-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-[3]"
                >
                  <Mail className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>

              {/* Right: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
                  <MessageSquare className="w-5 h-5 text-[#e38f00]" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Support 24/7</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                  Contactez-<span className="text-[#e38f00] dark:text-[#f44d0b]">nous</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
                  Nous sommes là pour répondre à vos questions et discuter de votre prochain projet. Notre équipe vous attend !
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Réponse rapide et personnalisée',
                    'Support technique 24/7',
                    'Équipe dédiée à votre projet'
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-[#e38f00] flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Methods Cards */}
        <motion.section className="py-12 lg:py-16 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, i) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white dark:bg-black/30 backdrop-blur rounded-3xl p-8 border border-slate-200/50 dark:border-white/10 hover:border-[#e38f00]/30 transition-all duration-300 text-center"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-lg font-semibold text-[#e38f00] dark:text-[#f44d0b] mb-2">
                      {method.info}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {method.subtext}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Main Contact Section - Map + Form */}
        <motion.section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/30 dark:to-black/50">
          <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Google Maps - Gauche */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-black/30 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10 h-[400px] lg:h-[450px] relative group"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.7265482556!2d6.6110677!3d36.3736667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1a4d5d5d5d5d5%3A0x12f1a4d5d5d5d5d5!2sHawa%20Ain%20Naadja%20Kadima%2C%20Constantine!5e0!3m2!1sfr!2sdz!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="relative z-0"
                    title="Localisation Tawssil"
                  />
                  
                  <motion.div 
                    className="absolute top-4 right-4 z-20"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      href="https://maps.app.goo.gl/wCWWCShmCpmAYRaKA"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-white dark:bg-black/50 text-slate-900 dark:text-white px-4 py-3 rounded-2xl shadow-2xl font-semibold transition-all border border-white dark:border-white/20 backdrop-blur-sm"
                    >
                      <Navigation className="w-5 h-5 text-[#e38f00]" />
                      <span>Ouvrir Maps</span>
                    </motion.a>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-full flex items-center justify-center shadow-2xl">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <motion.div 
                        className="absolute inset-0 bg-[#e38f00] rounded-full -z-10"
                        animate={{ 
                          scale: [1, 1.5, 1.5, 1],
                          opacity: [0.3, 0.1, 0, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          times: [0, 0.3, 0.6, 1]
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Info adresse */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-[#e38f00] to-[#d48500] dark:from-[#f44d0b] dark:to-[#e3440a] rounded-3xl p-6 text-white shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Notre siège</h4>
                      <p className="text-white/90 text-sm mb-3">
                        Abomey-Calavi <br />
                        Derrière le CEG Godomey
                      </p>
                      <motion.a
                        href="https://maps.app.goo.gl/wCWWCShmCpmAYRaKA"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm transition-colors"
                      >
                        <Navigation className="w-4 h-4" />
                        Itinéraire
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Horaires */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white dark:bg-black/30 rounded-3xl p-6 shadow-xl border border-slate-200/50 dark:border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Horaires</h4>
                      <div className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                        <p><span className="font-semibold text-slate-900 dark:text-white">Lun - Ven:</span> 8h00 - 18h00</p>
                        <p><span className="font-semibold text-slate-900 dark:text-white">Samedi:</span> 9h00 - 14h00</p>
                        <p><span className="font-semibold text-slate-900 dark:text-white">Dimanche:</span> Fermé</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Formulaire Magique - Droite */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-black/40 dark:to-black/60 backdrop-blur rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200/50 dark:border-white/10"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                    Envoyez-nous un Message
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
                    Cliquez sur chaque champ pour le remplir avec élégance
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Les champs marqués d'un * sont obligatoires
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {fields.map((field) => (
                    <div key={field.key} className="relative">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openFieldEditor(field.key, formData[field.key as keyof typeof formData])}
                        className={`w-full text-left px-6 py-4 rounded-2xl border-2 transition-all duration-300 group
                          ${formData[field.key as keyof typeof formData]
                            ? 'border-emerald-500/50 dark:border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-500/10 shadow-sm'
                            : 'border-slate-300 dark:border-white/10 bg-white dark:bg-black/20 hover:border-[#e38f00]/50 dark:hover:border-[#e38f00]/30 hover:bg-orange-50/30 dark:hover:bg-[#e38f00]/5'
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {field.required && !formData[field.key as keyof typeof formData] && (
                              <span className="text-red-500 text-xs">*</span>
                            )}
                            <div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                {field.label}
                              </p>
                              <p className={`mt-1 text-base font-medium transition-colors ${formData[field.key as keyof typeof formData] ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                                {formData[field.key as keyof typeof formData] || field.placeholder}
                              </p>
                            </div>
                          </div>
                          {formData[field.key as keyof typeof formData] ? (
                            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 0.5 }}>
                              <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            </motion.div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-dashed border-slate-300 dark:border-white/20 group-hover:border-[#e38f00]" />
                          )}
                        </div>
                      </motion.button>
                    </div>
                  ))}

                  {/* Sujet dropdown */}
                  <div className="relative">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-6 py-4 rounded-2xl border-2 transition-all flex items-center justify-between
                        ${formData.subject
                          ? 'border-emerald-500/50 dark:border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-500/10 shadow-sm'
                          : 'border-slate-300 dark:border-white/10 bg-white dark:bg-black/20 hover:border-[#e38f00]/50'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={formData.subject ? "text-slate-900 dark:text-white font-medium" : "text-slate-400 dark:text-slate-500"}>
                          {formData.subject || "Sélectionnez un sujet (optionnel)"}
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#e38f00] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </motion.button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="absolute z-30 w-full mt-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          {subjects.map((s) => (
                            <motion.li
                              key={s}
                              whileHover={{ backgroundColor: "#e38f00", color: "white" }}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, subject: s }))
                                setIsDropdownOpen(false)
                              }}
                              className="px-6 py-3 cursor-pointer text-sm font-medium text-slate-900 dark:text-white hover:pl-8 transition-all"
                            >
                              {s}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-gradient-to-r from-[#e38f00] to-[#d48500] dark:from-[#f44d0b] dark:to-[#e3440a] text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Popup d'édition */}
        <AnimatePresence>
          {activeField && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCancelEdit}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 dark:border-white/10"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center">
                      <Edit3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {fields.find(f => f.key === activeField)?.label}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Modifiez votre réponse
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCancelEdit}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  </motion.button>
                </div>

                {fields.find(f => f.key === activeField)?.isTextarea ? (
                  <div className="space-y-4">
                    <textarea
                      value={tempValue}
                      onChange={e => setTempValue(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-slate-300 dark:border-white/10 bg-white dark:bg-black/20 text-slate-900 dark:text-white rounded-xl focus:border-[#e38f00] focus:outline-none resize-none transition-colors"
                      placeholder="Tapez votre message ici..."
                      autoFocus
                    />
                  </div>
                ) : (
                  <input
                    type={fields.find(f => f.key === activeField)?.type || 'text'}
                    value={tempValue}
                    onChange={e => setTempValue(e.target.value)}
                    className="w-full mt-4 px-4 py-4 border-2 border-slate-300 dark:border-white/10 bg-white dark:bg-black/20 text-slate-900 dark:text-white rounded-xl focus:border-[#e38f00] focus:outline-none text-lg transition-colors"
                    placeholder={fields.find(f => f.key === activeField)?.placeholder}
                    autoFocus
                    onKeyDown={e => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleValidateField()
                      }
                    }}
                  />
                )}

                <div className="flex gap-3 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleValidateField}
                    disabled={!tempValue.trim()}
                    className="flex-1 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Check className="w-5 h-5" />
                    Valider
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCancelEdit}
                    className="flex-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white py-3 rounded-xl font-bold border-2 border-transparent hover:border-slate-300 dark:hover:border-white/20"
                  >
                    Annuler
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}