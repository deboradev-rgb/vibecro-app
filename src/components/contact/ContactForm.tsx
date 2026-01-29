import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Clock, Send, ArrowRight,
  MessageCircle, Zap, Star, ChevronDown, Check, Edit3,
  Navigation, ExternalLink, X
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage({ onBackToHome }: ContactPageProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // États pour le formulaire magique
  const [activeField, setActiveField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fonction pour envoyer les données à l'API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      setSubmitStatus({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires'
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:8000/api/contact-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      
      setSubmitStatus({
        success: true,
        message: 'Message envoyé avec succès ! Nous vous recontacterons dans les plus brefs délais.'
      });
      
      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Cacher le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus({
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openFieldEditor = (fieldKey: keyof ContactFormData, currentValue: string = '') => {
    setActiveField(fieldKey);
    setTempValue(currentValue || '');
  };

  const handleValidateField = () => {
    if (activeField && tempValue.trim()) {
      setFormData(prev => ({ ...prev, [activeField]: tempValue.trim() }));
    }
    setTempValue('');
    setActiveField(null);
  };

  const handleCancelEdit = () => {
    setTempValue('');
    setActiveField(null);
  };

  const subjects = [
    "Demande d'information", "Demande de devis", "Support technique",
    "Réclamation", "Partenariat", "Autre"
  ];

  const fields = [
    { key: 'name', label: 'Nom complet', placeholder: 'Votre nom', icon: '👤', type: 'text' },
    { key: 'email', label: 'Email', placeholder: 'votre.email@exemple.com', icon: '✉️', type: 'email' },
    { key: 'phone', label: 'Téléphone', placeholder: '+213 6 00 00 00 00', icon: '📱', type: 'tel' },
    { key: 'message', label: 'Votre message', placeholder: 'Écrivez votre message...', icon: '💬', isTextarea: true },
  ];

  // ... (le reste du code reste identique jusqu'au formulaire)

  return (
    <>
      {/* ... (le reste du code reste identique) ... */}

      {/* Notification de statut */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl ${
              submitStatus.success 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                : 'bg-gradient-to-r from-red-500 to-rose-600'
            } text-white`}
          >
            <div className="flex items-center gap-3">
              {submitStatus.success ? (
                <Check className="w-6 h-6" />
              ) : (
                <X className="w-6 h-6" />
              )}
              <div>
                <p className="font-bold">{submitStatus.success ? 'Succès !' : 'Erreur'}</p>
                <p className="text-sm opacity-90">{submitStatus.message}</p>
              </div>
              <button
                onClick={() => setSubmitStatus(null)}
                className="ml-4 p-1 hover:bg-white/20 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FORMULAIRE ÉLÉGANT & COMPACT - À DROITE (2 colonnes) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 bg-amber-50 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 relative"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Contactez-nous</h3>
          <p className="text-slate-600 mt-2 text-sm">Cliquez sur un champ pour le remplir ou le modifier</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map((field) => (
            <div key={field.key} className="relative">
              <motion.button
                type="button"
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => openFieldEditor(field.key as keyof ContactFormData, formData[field.key as keyof ContactFormData])}
                className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-300 group
                  ${formData[field.key as keyof ContactFormData]
                    ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-[#f44d0b] hover:bg-orange-50'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{field.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">{field.label}</p>
                      <p className={`mt-1 text-base font-medium ${formData[field.key as keyof ContactFormData] ? 'text-slate-900' : 'text-slate-400'}`}>
                        {formData[field.key as keyof ContactFormData] || field.placeholder}
                      </p>
                    </div>
                  </div>
                  {formData[field.key as keyof ContactFormData] ? (
                    <Edit3 className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-dashed border-slate-300 group-hover:border-[#f44d0b]" />
                  )}
                </div>
              </motion.button>
            </div>
          ))}

          {/* SUJET - Menu déroulant */}
          <div className="relative">
            <motion.button
              type="button"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full px-5 py-4 rounded-2xl border-2 transition-all flex items-center justify-between
                ${formData.subject
                  ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-[#f44d0b]'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">📋</span>
                <span className={formData.subject ? "text-slate-900 font-medium" : "text-slate-400"}>
                  {formData.subject || "Sélectionnez un sujet"}
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#f44d0b] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute z-30 w-full mt-2 bg-white border-2 border-slate-200 rounded-2xl shadow-xl overflow-hidden"
                >
                  {subjects.map((s) => (
                    <motion.li
                      key={s}
                      whileHover={{ backgroundColor: "#f44d0b", color: "white" }}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, subject: s }));
                        setIsDropdownOpen(false);
                      }}
                      className="px-5 py-3 cursor-pointer text-sm font-medium hover:pl-6 transition-all"
                    >
                      {s}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* BOUTON ENVOI */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading || !formData.name || !formData.email || !formData.message || !formData.subject}
            className="w-full bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <span>Envoyer le message</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </>
  );
}