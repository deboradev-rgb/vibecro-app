'use client';

import { Sparkles, ArrowRight } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  image?: string;
}

export default function ServiceHero({ 
  title, 
  subtitle, 
  description, 
  badge = "Service Professionnel",
  image 
}: ServiceHeroProps) {
  return (
    <div 
      className="w-full flex justify-center py-12 md:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('/service.jpg'), url('/tech.jpg')`,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center left, center right',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundColor: '#f8f9fa'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
      
      <div className="w-4/5 max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contenu texte à gauche */}
          <div className="order-2 lg:order-1">
            {badge && (
              <div className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 bg-[#e38f00]/10 text-[#e38f00] rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {badge}
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 leading-tight text-black">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-3 md:mb-4">
              {subtitle}
            </p>
            
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="px-6 md:px-8 py-2 md:py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition flex items-center justify-center gap-2 text-sm md:text-base">
                Demander une démo
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
              <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-[#e38f00] text-[#e38f00] font-semibold rounded-lg hover:bg-[#e38f00]/10 transition flex items-center justify-center text-sm md:text-base">
                Voir les tarifs
              </button>
            </div>
          </div>
          
          {/* Image à droite */}
          <div className="order-1 lg:order-2">
            <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Image placeholder ou image réelle */}
              {image ? (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/20 to-black/50 flex items-center justify-center">
                  <div className="text-center text-white p-6 md:p-8">
                    <div className="text-4xl md:text-6xl mb-4 md:mb-6">🚀</div>
                    <h3 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">{title}</h3>
                    <p className="text-sm md:text-xl opacity-90">Solution Professionnelle</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}