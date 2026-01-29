'use client';

import { ArrowRight } from 'lucide-react';

interface UseCase {
  title: string;
  description: string;
  icon: string;
}

interface UseCaseCarouselProps {
  useCases: UseCase[];
  showHero?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}

export default function UseCaseCarousel({ 
  useCases, 
  showHero = false,
  heroTitle = "Cas d'Utilisation",
  heroDescription 
}: UseCaseCarouselProps) {
  return (
    <div className="w-full flex justify-center py-12 md:py-20">
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
                Découvrez comment nos solutions sont utilisées dans différents secteurs 
                pour résoudre des problèmes concrets et générer de la valeur.
              </p>
              
              <button className="px-6 md:px-8 py-2 md:py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition flex items-center gap-2 text-sm md:text-base">
                Voir tous les cas d'usage
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
            
            {/* Image/Illustration à droite */}
            <div className="order-1 lg:order-2">
              <div className="relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <div className="text-5xl md:text-6xl mb-4">📊</div>
                    <h3 className="text-lg md:text-xl font-semibold text-black">Cas d'Usage</h3>
                    <p className="text-gray-700 text-sm md:text-base">Applications réelles</p>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-2 hover:border-[#e38f00]">
              <div className="text-4xl md:text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">{useCase.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}