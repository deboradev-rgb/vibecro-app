// src/components/sections/ServicesGrid.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/services/ServiceCard';

const ServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const services = [
    {
      id: 'iot',
      title: 'IOT & Tracking',
      description: 'Suivez en temps réel vos véhicules, colis, missions ou personnel grâce à notre solution Vibecro Tracking.',
      icon: '📡',
      color: 'blue',
      category: 'iot',
      features: ['Géolocalisation temps réel', 'Alertes intelligentes', 'Dashboard analytics']
    },
    {
      id: 'rh-ia',
      title: 'Solution RH-IA',
      description: 'Plateforme intelligente qui automatise et améliore vos processus RH grâce à l\'IA.',
      icon: '🤖',
      color: 'purple',
      category: 'ia',
      features: ['Recrutement automatisé', 'Analyse performances', 'Gestion talents']
    },
    {
      id: 'clientele',
      title: 'Clientèle Plus',
      description: 'Solution numérique sur-mesure pour optimiser la gestion et l\'expérience client.',
      icon: '👥',
      color: 'green',
      category: 'digital',
      features: ['CRM personnalisé', 'Analytics client', 'Marketing automation']
    },
    {
      id: 'conciergerie',
      title: 'Conciergerie Touristique & Numérique',
      description: 'Expérience de voyage haut de gamme avec solutions de conciergerie numérique.',
      icon: '🏨',
      color: 'orange',
      category: 'tourisme',
      features: ['Réservations VIP', 'Itinéraires sur-mesure', 'Assistance 24/7']
    },
    {
      id: 'developpement',
      title: 'Développement Web & Mobile',
      description: 'Applications modernes et performantes pour le web et les mobiles.',
      icon: '💻',
      color: 'indigo',
      category: 'tech',
      features: ['React/Next.js', 'Applications natives', 'PWA', 'API REST']
    },
    {
      id: 'consulting',
      title: 'Stratégie Digitale',
      description: 'Accompagnement stratégique pour votre transformation digitale.',
      icon: '🎯',
      color: 'red',
      category: 'consulting',
      features: ['Audit digital', 'Roadmap stratégique', 'Formation équipes']
    }
  ];
  
  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'iot', label: 'IoT & Tracking' },
    { id: 'ia', label: 'Intelligence Artificielle' },
    { id: 'digital', label: 'Solutions Digitales' },
    { id: 'tech', label: 'Développement' }
  ];
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary/30'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Services Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredServices.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
      
      {filteredServices.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-500">Aucun service trouvé dans cette catégorie.</p>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesGrid;