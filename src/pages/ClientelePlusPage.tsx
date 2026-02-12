import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, CheckCircle, ArrowRight, Target, Heart, Smartphone, Globe, Zap, Star } from 'lucide-react'
import { useState } from 'react';


export default function ClientelePlusPage() {
  const [activeTab, setActiveTab] = useState('hotel');
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        {/* Nouvelle image de fond - Clientèle Professionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Clientèle Plus Background - Professional Client Relations"
            className="w-full h-full object-cover "
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=2070&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 dark:from-black/75 dark:via-black/65 dark:to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
              <Users className="w-5 h-5 text-[#e38f00]" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Clientèle Plus</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text mb-6">
              Clientèle <span className="text-[#e38f00]">Plus</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Fidélisation client intelligente et gestion de relation client optimisée pour maximiser la valeur client
            </p>
          </motion.div>
        </div>
      </motion.section>

                {/* Solution Clientele Plus */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-black/80"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* GAUCHE : Texte et contenu */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full text-[#e38f00] dark:text-[#f44d0b] font-medium text-sm border border-[#e38f00]/20">
                <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                <span>Nouvelle Solution</span>
              </div>

              {/* Titre */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                SOLUTION <span className="text-[#e38f00] dark:text-[#f44d0b]">Clientele Plus</span>
              </h2>

              {/* Description principale */}
              <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p className="font-medium text-xl text-[#e38f00] dark:text-[#f44d0b]">
                  Découvrez Clientele Plus.
                </p>
                <p>
                  La plateforme innovante qui révolutionne votre relation client et booste votre chiffre d'affaires. 
                  Disponible en version ERP et mobile, cette solution complète offre une approche unique grâce 
                  à un code personnalisé, créant une expérience sur mesure pour chaque utilisateur.
                </p>
              </div>

              {/* Points clés */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Pour vos clients</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Clientele Plus propose des avantages exclusifs et un programme de fidélité intelligent 
                      qui encourage les achats répétés.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Pour votre équipe</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Votre équipe bénéficie d'outils de gestion centralisés et de tableaux de bord en temps réel 
                      pour un suivi optimal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Pour les dirigeants</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Les dirigeants disposent de données analytiques précieuses pour prendre des décisions 
                      éclairées et piloter la croissance de l'entreprise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="pt-6">
                <Link
                  to="/clientele-plus"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Découvrir Clientele Plus
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* DROITE : Code QR et image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Conteneur principal */}
              <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl border border-slate-200/50 dark:border-white/10">
                
                {/* Image de fond abstraite */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e38f00]/20 via-[#d48500]/20 to-[#e38f00]/20"></div>
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                  {/* Titre du QR Code */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Accès Instantané
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Scannez pour découvrir la plateforme
                    </p>
                  </div>

                  {/* Code QR */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {/* Code QR stylisé */}
                      <div className="w-64 h-64 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border-4 border-white dark:border-gray-700">
                        {/* Pattern de QR Code (simulation) */}
                        <div className="w-full h-full relative">
                          {/* Points de repère */}
                          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-[#e38f00] rounded-lg"></div>
                          <div className="absolute top-0 right-0 w-12 h-12 border-4 border-[#e38f00] rounded-lg"></div>
                          <div className="absolute bottom-0 left-0 w-12 h-12 border-4 border-[#e38f00] rounded-lg"></div>
                          
                          {/* Pattern intérieur */}
                          <div className="absolute inset-12 grid grid-cols-7 gap-1">
                            {Array.from({ length: 49 }).map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-full h-full rounded-sm ${
                                  Math.random() > 0.5 
                                    ? 'bg-[#e38f00] dark:bg-[#f44d0b]' 
                                    : 'bg-transparent'
                                }`}
                              />
                            ))}
                          </div>
                          
                          {/* Logo au centre */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">CP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Animation autour du QR */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-[#e38f00]/30 animate-ping opacity-0"></div>
                    </div>
                  </div>

                  {/* Texte d'appel à action */}
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      SCANNER CE CODE QR POUR
                    </p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text text-transparent">
                      Accéder au site officiel
                    </p>
                    
                    {/* Instructions */}
                    <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-slate-200/50 dark:border-white/10">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 text-white">
                            {/* Icône smartphone */}
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                            </svg>
                          </div>
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          Utilisez l'appareil photo de votre smartphone
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Effets décoratifs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#e38f00]/20 to-[#d48500]/20 rounded-full blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#e38f00]/20 to-[#d48500]/20 rounded-full blur-xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>


            {/* Solutions Sectorielles Clientele Plus */}
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
                Solutions Sectorielles
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Ce que nous <span className="text-[#e38f00]">proposons</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Des solutions spécialisées adaptées à chaque secteur d'activité
            </p>
          </motion.div>

          {/* Liste des solutions */}
          <div className="space-y-12">
            
            {/* Hôtel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10"
            >
              {/* Image à gauche */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solution Clientèle Plus pour Hôtel - Interface moderne de gestion hôtelière avec dashboard et réservations"
                  className="w-full h-64 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Hôtellerie
                </div>
              </motion.div>

              {/* Contenu à droite */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Solution Clientèle Plus pour <span className="text-[#e38f00]">Hôtel</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Notre plateforme digitale révolutionne la gestion des établissements hôteliers en centralisant toutes les opérations clés. Grâce à des outils intuitifs, facilitez le parcours client (réservation en ligne, check-in digital, service conciergerie) et optimisez la gestion interne (suivi des chambres, maintenance, analyse des performances).
                </p>
                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-4 border border-[#e38f00]/10">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Bénéficiez d'une augmentation de 25% de la satisfaction client et de 30% de productivité grâce à l'automatisation des tâches.
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  La solution s'intègre parfaitement à votre PMS existant et s'adapte à tous les types d'hôtels.
                </p>
                <Link
                  to="/contact?type=hotel"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Avoir un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Supermarché */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10"
            >
              {/* Contenu à gauche */}
              <div className="space-y-4 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Solution Clientèle Plus pour <span className="text-[#e38f00]">Supermarché</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Notre plateforme digitale révolutionne la gestion des supermarchés en optimisant l'expérience client et les opérations internes. Grâce à des outils innovants, facilitez les achats (scan de produits, promotions ciblées, programme de fidélité) et améliorez la gestion (suivi des stocks en temps réel, analyse des ventes, gestion des réclamations).
                </p>
                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-4 border border-[#e38f00]/10">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Bénéficiez d'une augmentation de 20% du panier moyen et de 30% d'efficacité opérationnelle grâce à l'automatisation des processus.
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  La solution s'intègre parfaitement à votre système de caisse existant et s'adapte à toutes les tailles de magasins.
                </p>
                <Link
                  to="/contact?type=supermarché"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Avoir un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image à droite */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solution Clientèle Plus pour Supermarché - Caisse automatique et système de gestion des stocks moderne"
                  className="w-full h-64 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Retail
                </div>
              </motion.div>
            </motion.div>

            {/* Pharmacie */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10"
            >
              {/* Image à gauche */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solution Clientèle Plus pour Pharmacie - Système de gestion des médicaments et ordonnances digitales"
                  className="w-full h-64 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Santé
                </div>
              </motion.div>

              {/* Contenu à droite */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Solution Clientèle Plus pour <span className="text-[#e38f00]">Pharmacie</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Notre plateforme digitale révolutionne la gestion des pharmacies en optimisant l'expérience patient et le suivi médical. Grâce à des outils spécialisés, facilitez la gestion des ordonnances (scan de documents, rappel de renouvellement), le suivi des stocks (alertes automatiques) et la fidélisation (programme de parrainage, promotions santé).
                </p>
                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-4 border border-[#e38f00]/10">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Bénéficiez d'une réduction de 25% des erreurs de dispensation et de 30% de gain de temps administratif grâce à l'automatisation des processus.
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  La solution s'intègre parfaitement à votre logiciel métier et respecte les normes RGPD pour la protection des données santé.
                </p>
                <Link
                  to="/contact?type=pharmacie"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Avoir un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Agro-alimentaire */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10"
            >
              {/* Contenu à gauche */}
              <div className="space-y-4 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Solution Clientèle Plus pour <span className="text-[#e38f00]">Agro-alimentaire</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Notre plateforme digitale révolutionne la gestion des entreprises agroalimentaires en optimisant la traçabilité et la relation client. Grâce à des outils spécialisés, facilitez la gestion des commandes (suivi en temps réel), le contrôle qualité (enregistrement des lots) et la fidélisation (programmes promotionnels ciblés).
                </p>
                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-4 border border-[#e38f00]/10">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Améliorez la traçabilité complète de vos produits et optimisez votre chaîne logistique.
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  La solution garantit la conformité aux normes sanitaires et une transparence totale pour vos clients.
                </p>
                <Link
                  to="/contact?type=agro-alimentaire"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Avoir un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image à droite */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                  alt="Solution Clientèle Plus pour Agro-alimentaire - Système de traçabilité et gestion de production"
                  className="w-full h-64 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Industrie
                </div>
              </motion.div>
            </motion.div>

            {/* Centre Hospitalier */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10"
            >
              {/* Image à gauche */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80"
                  alt="Solution Clientèle Plus pour Centre Hospitalier - Système de gestion hospitalière avec dossiers patients numériques"
                  className="w-full h-64 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Médical
                </div>
              </motion.div>

              {/* Contenu à droite */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Solution Clientèle Plus pour <span className="text-[#e38f00]">Centre Hospitalier</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Notre plateforme unifiée révolutionne la gestion hospitalière et clinique en digitalisant l'ensemble des processus. Le dossier patient électronique certifié HDS garantit sécurité et traçabilité, tandis que le module de rendez-vous intelligents réduit de 30% les temps d'attente.
                </p>
                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-4 border border-[#e38f00]/10">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Pour les équipes soignantes : messagerie sécurisée, prescriptions électroniques et alertes médicament automatisées. Les gestionnaires bénéficient d'indicateurs temps réel sur l'occupation, la rentabilité et la qualité des soins.
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Conforme aux normes HDS et RGPD, notre solution garantit la sécurité maximale des données de santé.
                </p>
                <Link
                  to="/contact?type=hopital"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Avoir un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Restaurant */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10"
            >
              {/* Contenu à gauche */}
              <div className="space-y-4 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Solution Clientèle Plus pour <span className="text-[#e38f00]">Restaurant</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Notre plateforme digitale révolutionne la gestion des restaurants en optimisant l'expérience client et les opérations quotidiennes. La solution intègre un système de commande via QR code, permettant aux clients de consulter le menu digital, passer commande depuis leur table et régler sans contact.
                </p>
                <div className="bg-gradient-to-r from-[#e38f00]/5 to-[#d48500]/5 rounded-xl p-4 border border-[#e38f00]/10">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Le programme de fidélité intelligent augmente le taux de retour de la clientèle. Les gestionnaires bénéficient de tableaux de bord complets avec indicateurs clés (CA moyen par couvert, plats les plus populaires, fréquentation horaire).
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Pour le personnel, nous proposons une gestion centralisée des commandes en temps réel, un suivi des stocks automatisé et des outils d'analyse des ventes.
                </p>
                <Link
                  to="/contact?type=restaurant"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Avoir un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image à droite */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/10 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solution Clientèle Plus pour Restaurant - Système de commande via QR code et gestion de restaurant moderne"
                  className="w-full h-64 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Restauration
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-white/80 to-white/40 dark:from-black/60 dark:to-black/40 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl">
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Besoin d'une solution personnalisée ?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Contactez-nous pour une démonstration adaptée à votre secteur
                </p>
              </div>
              <Link
                to="/contact?type=solutions-sectorielles"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[180px] justify-center"
              >
                <span>Contacter un expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-0 group-hover:opacity-100"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

           {/* Fonctionnalités Détaillées Clientele Plus */}
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
                Fonctionnalités Avancées
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Les <span className="text-[#e38f00]">Fonctionnalités</span> de Clientèle Plus
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez en détail toutes les fonctionnalités adaptées à chaque secteur
            </p>
          </motion.div>

          {/* Onglets de navigation */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: 'hotel', label: ' Hôtel'},
                { id: 'pharmacie', label: ' Pharmacie' },
                { id: 'restaurant', label: 'Restaurant' },
                { id: 'clinique', label: ' Clinique' },
                { id: 'supermarché', label: 'Supermarché' },
                { id: 'agroalimentaire', label: 'Agro-alimentaire' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white shadow-lg scale-105'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenu des onglets */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            
            {/* Hôtel */}
            {activeTab === 'hotel' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                      alt="Clientèle Plus Hôtel - Interface moderne de gestion hôtelière"
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold text-lg">🏨</span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Clientèle Plus – <span className="text-[#e38f00]">Hôtel</span>
                      </h3>
                      <p className="text-xl text-slate-300 mb-6 font-medium">
                        Transformez chaque séjour en expérience 5 étoiles… en un clic.
                      </p>
                      <p className="text-slate-300">
                        Vos clients n'aiment pas attendre. Avec Clientèle Plus – Hôtel, dites adieu aux files d'attente et aux services lents. En scannant un code QR, vos clients s'enregistrent, commandent depuis leur chambre et obtiennent un service instantané.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">Pour vos clients :</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Check-in / check-out express</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Commandes et demandes en un scan</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Réponse immédiate à chaque besoin</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Expérience fluide et haut de gamme</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Laisses avis, suggestions et plaintes par audio ou écrit</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">Pour votre hôtel :</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Gestion centralisée du personnel</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Suivi en temps réel des services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Analyse de la satisfaction client</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Reporting clair pour de meilleures décisions</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-xl p-5 border border-[#e38f00]/20">
                      <p className="text-white font-semibold mb-3">
                        Résultat : plus de confort pour vos clients, plus de productivité pour votre équipe, plus de revenus pour votre établissement.
                      </p>
                      <p className="text-slate-300">
                        Vous êtes à un clic d'une nouvelle ère hôtelière. Demandez votre devis gratuit aujourd'hui et offrez à vos clients le séjour qu'ils méritent.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact?type=hotel-fonctionnalites"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <span>Demander un devis maintenant</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Pharmacie */}
            {activeTab === 'pharmacie' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
                      alt="Clientèle Plus Pharmacie - Système de gestion pharmacie"
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                   
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        PHARMACIE <span className="text-[#e38f00]">SOLUTION CLIENTELE PLUS</span>
                      </h3>
                      <p className="text-slate-300">
                        Découvrez « SOLUTION CLIENTELE PLUS », une plateforme innovante disponible en version ERP et mobile, qui réinvente les boîtes à suggestions traditionnelles dans les pharmacies. Grâce à un QR code unique, elle offre des fonctionnalités avancées pour les clients, le personnel et le Docteur titulaire, optimisant ainsi la satisfaction et la gestion au quotidien.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                       
                        <h5 className="font-bold text-white">Tableau de bord fluide pour le Dr</h5>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                       
                        <h5 className="font-bold text-white">Fonctionnalités simples pour le personnel</h5>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                  
                        <h5 className="font-bold text-white">Fonctionnalités pratiques pour les clients</h5>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS CLIENTS</h4>
                        <ul className="space-y-3 text-slate-300">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">1</span>
                            </div>
                            <span><strong>Avis et suggestions :</strong> Offrez la possibilité aux clients de participer à des enquêtes de satisfaction en soumettant leur avis par écrit ou par note vocal</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">2</span>
                            </div>
                            <span><strong>Soumission de plainte :</strong> Permettre aux clients de signaler tout problème rencontré avec le personnel de la pharmacie</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">3</span>
                            </div>
                            <span><strong>Commande spéciale :</strong> Donner aux clients la possibilité de demander des médicaments non disponibles en rayon</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS PERSONNEL</h4>
                        <ul className="space-y-3 text-slate-300">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">1</span>
                            </div>
                            <span><strong>Soumission de demandes :</strong> Permettez au personnel de consulter les demandes d'absences ou de congés</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">2</span>
                            </div>
                            <span><strong>Enregistrer votre présence :</strong> Faciliter l'accès à la plateforme pour enregistrer leur présence</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS ADMIN</h4>
                        <p className="text-slate-300">
                          <strong>Gestion centralisée dans le tableau de bord pour le Dr :</strong> Personnalisation des questions de votre enquête, réception des notifications pour toutes les soumissions des clients et du personnel afin de les tester rapidement et efficacement.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact?type=pharmacie-fonctionnalites"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <span>Demander un devis pour la pharmacie</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Restaurant */}
            {activeTab === 'restaurant' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                      alt="Clientèle Plus Restaurant - Commande QR code"
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold text-lg">🍽️</span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Clientèle Plus – <span className="text-[#e38f00]">Restaurant</span>
                      </h3>
                      <p className="text-xl text-slate-300 mb-6 font-medium">
                        Offrez à vos clients une expérience digne des plus grands restaurants… et boostez vos ventes dès aujourd'hui !
                      </p>
                      <p className="text-slate-300">
                        Les longues attentes, les erreurs de commande et la gestion compliquée appartiennent au passé. Avec Clientèle Plus – Restaurant, transformez votre établissement en un lieu moderne, rapide et rentable.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3 flex items-center gap-2">
                          <span>✅</span>
                          <span>Pour vos clients :</span>
                        </h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Menu digital accessible en un scan 📱</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Commande directe depuis la table en quelques secondes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Programme de fidélité qui les fait revenir</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Avis clients intégrés pour inspirer confiance</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3 flex items-center gap-2">
                          <span>✅</span>
                          <span>Pour vous, restaurateur :</span>
                        </h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Prise de commande automatisée, zéro erreur</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Gestion des stocks en temps réel</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Suivi précis des ventes et analyse de satisfaction</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Outil simple, rapide à mettre en place</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-xl p-5 border border-[#e38f00]/20">
                      <p className="text-white font-semibold mb-3">
                        Résultat : Plus de clients satisfaits, plus de commandes, plus de chiffre d'affaires… avec moins d'efforts.
                      </p>
                      <p className="text-slate-300">
                        Ne laissez pas vos concurrents prendre de l'avance. Demandez votre devis personnalisé maintenant et découvrez comment Clientèle Plus – Restaurant peut transformer votre service dès cette semaine.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact?type=restaurant-fonctionnalites"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <span>Demander un devis pour restaurant</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Clinique */}
            {activeTab === 'clinique' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                      alt="Clientèle Plus Clinique - Système médical moderne"
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold text-lg">🏥</span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        <span className="text-[#e38f00]">CLIENTÈLE PLUS CLINIQUE</span>
                      </h3>
                      <p className="text-slate-300">
                        Découvrez « Clientèle Plus Clinique », une plateforme innovante disponible en version ERP et mobile, conçue pour améliorer la qualité des soins et renforcer la confiance entre patients et professionnels de santé. Grâce à un QR code unique, elle offre des outils avancés pour les patients, le personnel médical et l'administration, garantissant transparence et efficacité.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">📈</div>
                        <h5 className="font-bold text-white">Tableau de bord analytique pour la direction</h5>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">👨‍⚕️</div>
                        <h5 className="font-bold text-white">Fonctionnalités pour le personnel de santé</h5>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">👤</div>
                        <h5 className="font-bold text-white">Fonctionnalités utiles pour les patients</h5>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS PATIENTS</h4>
                        <ul className="space-y-3 text-slate-300">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">1</span>
                            </div>
                            <span><strong>Avis et suggestions :</strong> Permet aux patients de partager leur expérience pour améliorer continuellement la qualité des soins.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">2</span>
                            </div>
                            <span><strong>Signalement sécurisé :</strong> Système anonyme et protégé pour reporter tout comportement inapproprié ou demande de rançon par le personnel de santé.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">3</span>
                            </div>
                            <span><strong>Suivi des retours :</strong> Les patients peuvent vérifier les actions entreprises suite à leurs signalements ou suggestions.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS PERSONNEL/ADMINISTRATION</h4>
                        <ul className="space-y-3 text-slate-300">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">1</span>
                            </div>
                            <span><strong>Analyse statistique :</strong> Mesure en temps réel le niveau de satisfaction des patients et identifie les axes d'amélioration.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">2</span>
                            </div>
                            <span><strong>Gestion des suggestions :</strong> Traite, classe et suit les retours patients pour une mise en œuvre rapide des améliorations.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">3</span>
                            </div>
                            <span><strong>Enquêtes internes :</strong> Module dédié à l'instruction des signalements pour garantir l'intégrité des pratiques médicales.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">4</span>
                            </div>
                            <span><strong>Alertes et rapports :</strong> Génère des notifications pour les cas urgents et produit des rapports réglementaires.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS ADMIN</h4>
                        <p className="text-slate-300">
                          <strong>Espace sécurisé pour la direction</strong> avec accès aux données agrégées, outils d'audit et tableaux de bord personnalisables pour un pilotage stratégique de la qualité des soins.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact?type=clinique-fonctionnalites"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <span>Demander un devis pour clinique</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Supermarché */}
            {activeTab === 'supermarché' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                      alt="Clientèle Plus Supermarché - Gestion moderne"
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold text-lg">🛒</span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        <span className="text-[#e38f00]">CLIENTÈLE PLUS SUPER MARCHÉ</span>
                      </h3>
                      <p className="text-slate-300">
                        Découvrez « Clientèle Plus Super Marché », une solution digitale complète disponible en version ERP et mobile, spécialement conçue pour révolutionner l'expérience d'achat et optimiser la gestion de votre grande surface. Grâce à un QR code unique, la plateforme connecte intelligemment clients, équipes et direction.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <h5 className="font-bold text-white">Tableau de bord performant pour les gérants</h5>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">👥</div>
                        <h5 className="font-bold text-white">Outils pratiques pour les équipes en magasin</h5>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">👤</div>
                        <h5 className="font-bold text-white">Fonctionnalités clés pour les clients</h5>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS CLIENTS</h4>
                        <ul className="space-y-3 text-slate-300">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">1</span>
                            </div>
                            <span><strong>Catalogue digital :</strong> Scan du QR code pour accéder à l'ensemble des produits et promotions en cours</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">2</span>
                            </div>
                            <span><strong>Disponibilité en temps réel :</strong> Vérification du stock directement depuis son smartphone</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">3</span>
                            </div>
                            <span><strong>Fidélisation intelligente :</strong> Programme de points échangeables contre des avantages, bons de réduction personnalisés</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">4</span>
                            </div>
                            <span><strong>Espace feedback :</strong> Formulaire d'avis et suggestions sur les produits/services</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS PERSONNEL/ADMINISTRATION</h4>
                        <ul className="space-y-3 text-slate-300">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">1</span>
                            </div>
                            <span><strong>Gestion opérationnelle :</strong> Mise à jour centralisée du catalogue produits et des promotions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">2</span>
                            </div>
                            <span><strong>Analytics avancés :</strong> Tracking du comportement d'achat, tableaux de bord de satisfaction client</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#e38f00] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">3</span>
                            </div>
                            <span><strong>Service après-vente :</strong> Module intégré de gestion des réclamations, suivi des retours produits</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">FONCTIONNALITÉS DIRECTION</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Reporting financier et analyse marge/produit</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Outils de prévision des ventes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Gestion multi-site le cas échéant</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-xl p-5 border border-[#e38f00]/20">
                      <h4 className="font-bold text-white mb-3">Avantages différenciants :</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Réduction des files d'attente grâce aux commandes QR</li>
                        <li>• Augmentation du panier moyen via les promotions ciblées</li>
                        <li>• Amélioration continue grâce au feedback clients</li>
                        <li>• Optimisation des stocks et réassort automatique</li>
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact?type=supermarché-fonctionnalites"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <span>Demander un devis pour supermarché</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Agro-alimentaire */}
            {activeTab === 'agroalimentaire' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
                      alt="Clientèle Plus Agro-alimentaire - Traçabilité et gestion"
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold text-lg">🌾</span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        <span className="text-[#e38f00]">Clientèle-Plus Agro-alimentaire</span>
                      </h3>
                      <p className="text-xl text-slate-300 mb-6 font-medium">
                        Stop aux pertes de temps et aux clients frustrés !
                      </p>
                      <p className="text-slate-300">
                        Dans l'agro-alimentaire, chaque minute compte : retards de commande, gestion de stock compliquée, suivi de livraison flou… Clientèle Plus – Agro-Alimentaire transforme ces défis en atouts avec une solution 100 % digitale et connectée.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">Pour votre entreprise (Fonctionnalités Administrateur)</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Gérez vos commandes et vos stocks en temps réel</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Assurez la traçabilité complète de vos produits</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Analysez vos ventes et optimisez votre logistique</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Réduisez les retours et les réclamations grâce à un suivi précis</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="text-lg font-bold text-[#e38f00] mb-3">Pour vos clients (Fonctionnalités Clients)</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Consultez le catalogue et les prix en ligne en un clic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Passez commande à distance et payez en toute sécurité</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Suivez la livraison en temps réel</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Profitez d'offres personnalisées et d'une expérience transparente</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#e38f00] rounded-full mt-2"></div>
                            <span>Devenez partenaire</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-xl p-5 border border-[#e38f00]/20">
                      <h4 className="font-bold text-white mb-2">Moderne, fiable, rentable</h4>
                      <p className="text-slate-300">
                        Avec son système de QR code et ses outils intelligents, Clientèle Plus – Agro-Alimentaire n'est pas juste une solution : c'est un accélérateur de croissance et un booster de fidélité client.
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-xl font-bold text-white mb-4">Passez à l'action maintenant !</p>
                      <p className="text-slate-300 mb-6">
                        Ne laissez pas vos concurrents prendre de l'avance.
                      </p>
                      <Link
                        to="/contact?type=agroalimentaire-fonctionnalites"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <span>Demander un devis pour agro-alimentaire</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Indicateur d'onglet actif */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">
                {activeTab === 'hotel' && ' Hôtel sélectionné'}
                {activeTab === 'pharmacie' && ' Pharmacie sélectionnée'}
                {activeTab === 'restaurant' && ' Restaurant sélectionné'}
                {activeTab === 'clinique' && 'Clinique sélectionnée'}
                {activeTab === 'supermarché' && ' Supermarché sélectionné'}
                {activeTab === 'agroalimentaire' && 'Agro-alimentaire sélectionné'}
              </span>
            </div>
          </div>
        </div>
      </motion.section>


      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-16 lg:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Fidélisez Vos Clients Aujourd'hui
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Transformez vos clients en ambassadeurs de votre marque avec Clientèle Plus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?type=quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <span>Demander une Démo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#e38f00] text-[#e38f00] dark:text-[#f44d0b] font-bold py-4 px-8 rounded-xl hover:bg-[#e38f00]/10 transition-all"
            >
              <span>Contactez-nous</span>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}