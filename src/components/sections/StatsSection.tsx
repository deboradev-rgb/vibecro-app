// src/components/sections/StatsSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { Users, TrendingUp, CheckCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  stats?: Stat[];
  animated?: boolean;
}

const StatsSection = ({ 
  stats = [
    { value: '50', label: 'Clients satisfaits', suffix: 'k+', icon: <Users /> },
    { value: '95', label: 'Qualité du travail', suffix: '%', icon: <CheckCircle /> },
    { value: '10', label: 'Projets complets', suffix: 'k+', icon: <TrendingUp /> },
    { value: '15', label: 'Pays desservis', suffix: '+', icon: <Globe /> }
  ],
  animated = true
}: StatsSectionProps) => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => '0'));

  useEffect(() => {
    if (animated) {
      const timers = stats.map((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
        let currentValue = 0;
        const increment = targetValue / 50; // 50 frames
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(currentValue).toString();
            return newValues;
          });
        }, 30);
        
        return timer;
      });
      
      return () => timers.forEach(timer => clearInterval(timer));
    }
  }, [animated, stats]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700"></div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />
      
      <div className="relative z-10 container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Notre impact en chiffres
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre expertise et de notre engagement
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/10 mb-6 border border-white/20"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.icon || <div className="text-2xl">📊</div>}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-5xl md:text-6xl font-bold mb-3 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <CountUpAnimation 
                  value={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                />
                {stat.suffix && <span className="text-4xl">{stat.suffix}</span>}
              </motion.div>
              
              <motion.p 
                className="text-lg text-white/70 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter animation component
const CountUpAnimation = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentValue = 0;
    const increment = value / 50;
    
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        currentValue = value;
        clearInterval(timer);
      }
      
      setCount(Math.floor(currentValue));
    }, 30);
    
    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
};

export default StatsSection;