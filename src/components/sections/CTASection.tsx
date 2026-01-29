// src/components/sections/CTASection.tsx
'use client';

import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({
  title = "Prêt à transformer votre entreprise ?",
  description = "Rejoignez les centaines d'entreprises qui nous font déjà confiance pour leurs projets digitaux.",
  primaryButtonText = "Démarrer un projet",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Voir nos réalisations",
  secondaryButtonLink = "/portfolio"
}: CTASectionProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-secondary-800 to-primary-800"></div>
      
      {/* Animated orbs */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
      
      <div className="relative z-10 container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-6"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Transformation digitale
            </span>
          </motion.div>
        </motion.div>

        <motion.h2 
          className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="max-w-3xl mx-auto mb-12 text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-col gap-4 justify-center sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              href={primaryButtonLink}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="bg-white text-primary-900 hover:bg-gray-100 font-semibold shadow-xl"
            >
              {primaryButtonText}
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              href={secondaryButtonLink}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold"
            >
              {secondaryButtonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
          
};

export default CTASection;