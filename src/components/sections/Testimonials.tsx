// src/components/sections/Testimonials.tsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      name: 'Jean Dupont',
      role: 'Directeur Logistique, Transport X',
      company: 'Transport X',
      content: 'La solution IoT de VIBECRO a transformé notre gestion de flotte. Nous avons réduit nos coûts logistiques de 35% et amélioré notre efficacité opérationnelle de 50%. Le ROI a été atteint en seulement 4 mois.',
      rating: 5,
      image: '/images/testimonials/jean-dupont.jpg'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      role: 'DRH, Groupe Y',
      company: 'Groupe Y',
      content: 'La plateforme RH-IA a révolutionné nos processus de recrutement. Le temps de traitement des candidatures a été réduit de 60% tout en améliorant la qualité des embauches. Une véritable transformation digitale.',
      rating: 5,
      image: '/images/testimonials/marie-laurent.jpg'
    },
    {
      id: 3,
      name: 'Paul Martin',
      role: 'Directeur Commercial, Retail Z',
      company: 'Retail Z',
      content: 'Le CRM sur-mesure développé par VIBECRO a boosté nos ventes croisées de 25% et amélioré notre taux de fidélisation client de 30%. L\'équipe a été réactive et professionnelle tout au long du projet.',
      rating: 5,
      image: '/images/testimonials/paul-martin.jpg'
    },
    {
      id: 4,
      name: 'Sophie Bernard',
      role: 'CEO, Travel Premium',
      company: 'Travel Premium',
      content: 'L\'application de conciergerie touristique a dépassé nos attentes. Nos clients bénéficient maintenant d\'une expérience VIP et nos réservations ont augmenté de 70%. Un partenariat exceptionnel.',
      rating: 5,
      image: '/images/testimonials/sophie-bernard.jpg'
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="relative z-10 container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Ce que nos clients disent
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment VIBECRO a transformé les entreprises de nos clients
          </p>
        </motion.div>
        
        {/* Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="px-4"
              >
                {testimonials.length > 0 && (
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                  >
                    {/* Rating */}
                    <motion.div 
                      className="flex mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Content */}
                    <motion.blockquote 
                      className="text-xl text-gray-700 mb-8 italic font-light leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.blockquote>
                    
                    {/* Author */}
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex-shrink-0 flex items-center justify-center text-white font-bold">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                        <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                        <div className="text-sm text-gray-500">{testimonials[currentIndex].company}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600" />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-primary-600" />
          </motion.button>
        </div>
        
        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                'w-3 h-3 rounded-full transition-all',
                currentIndex === index 
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;