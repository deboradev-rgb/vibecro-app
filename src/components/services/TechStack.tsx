'use client';

import { ArrowRight, Cpu, Database, Cloud, Code, Server } from 'lucide-react';

interface TechStackProps {
  technologies: string[];
  showHero?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}

export default function TechStack({ 
  technologies, 
  showHero = false,
  heroTitle = "Technologies Utilisées",
  heroDescription 
}: TechStackProps) {
  return (
    <div className="w-full flex justify-center py-12 md:py-20 bg-white">
      <div className="w-4/5 max-w-7xl px-4">
        {showHero && (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Texte à gauche */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
                {heroTitle}
              </h2>
              
              {heroDescription && (
                <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                  {heroDescription}
                </p>
              )}
              
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Nous utilisons les technologies les plus modernes et fiables pour garantir 
                la performance, la sécurité et l'évolutivité de nos solutions.
              </p>
              
              <button className="px-6 md:px-8 py-2 md:py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition flex items-center gap-2 text-sm md:text-base">
                Voir notre stack technique
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
            
            {/* Image/Illustration à droite */}
            <div className="order-1 lg:order-2">
              <div className="relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-6 md:p-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Cpu className="w-8 h-8 md:w-10 md:h-10 text-[#e38f00]" />
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Database className="w-8 h-8 md:w-10 md:h-10 text-[#e38f00]" />
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Cloud className="w-8 h-8 md:w-10 md:h-10 text-[#e38f00]" />
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Code className="w-8 h-8 md:w-10 md:h-10 text-[#e38f00]" />
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Server className="w-8 h-8 md:w-10 md:h-10 text-[#e38f00]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!showHero && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-black">
            {heroTitle}
          </h2>
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition text-center hover:border-[#e38f00] group"
            >
              <p className="font-semibold text-black text-sm md:text-base group-hover:text-[#e38f00] transition-colors">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}