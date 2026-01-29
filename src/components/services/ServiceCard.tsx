'use client';

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    features?: string[];
    stats?: Array<{ value: string; label: string }>;
  };
  variant?: 'default' | 'compact' | 'featured';
}

const ServiceCard = ({ service, variant = 'default' }: ServiceCardProps) => {
  const link = `/services/${service.slug}`;
  
  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={{ scale: 1.05, translateY: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="w-full"
      >
        <Link 
          to={link}
          className="block group"
        >
          <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-[#e38f00] w-full">
            <div className="flex items-start gap-3 md:gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-xl md:text-2xl flex-shrink-0 bg-[#e38f00]/10 text-[#e38f00]"
              >
                {service.icon}
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-black group-hover:text-[#e38f00] transition-colors mb-2 text-sm md:text-base">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-700 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }
  
  if (variant === 'featured') {
    return (
      <motion.div
        whileHover={{ scale: 1.02, translateY: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="group w-full"
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden h-full shadow-lg w-full">
            {/* Icon Header */}
            <motion.div
              className="p-4 md:p-6 border-b bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between">
                <motion.div 
                  className="text-2xl md:text-3xl text-[#e38f00]"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  {service.icon}
                </motion.div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#e38f00]" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 group-hover:text-[#e38f00] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                {service.description}
              </p>
              
              {service.features && service.features.length > 0 && (
                <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-xs md:text-sm text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-[#e38f00] mr-2"
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              )}
              
              {service.stats && (
                <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                  {service.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-base md:text-lg font-bold text-black">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <Link 
                to={link}
                className="inline-flex items-center text-[#e38f00] font-semibold hover:text-[#d48500] transition-colors group text-sm md:text-base"
              >
                <span>Découvrir ce service</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Default variant
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="group h-full w-full"
    >
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col w-full">
        {/* Icon Header */}
        <motion.div
          className="p-6 md:p-8 border-b bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-3xl md:text-4xl text-[#e38f00]"
              whileHover={{ scale: 1.3, rotate: 20 }}
            >
              {service.icon}
            </motion.div>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#e38f00]" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="p-6 md:p-8 flex-grow">
          <h3 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-[#e38f00] transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
            {service.description}
          </p>
          
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {service.features.slice(0, 4).map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-sm text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <svg className="w-4 h-4 mr-3 text-[#e38f00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-6 md:p-8 pt-0">
          <Link 
            to={link}
            className="inline-flex items-center text-[#e38f00] font-semibold hover:text-[#d48500] transition-colors group text-sm md:text-base"
          >
            <span>Explorer ce service</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;