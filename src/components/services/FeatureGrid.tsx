'use client';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  showHero?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}

export default function FeatureGrid({ 
  features, 
  showHero = false,
  heroTitle = "Fonctionnalités Principales",
  heroDescription 
}: FeatureGridProps) {
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
              
              <p className="text-gray-700 text-sm md:text-base">
                Découvrez toutes les fonctionnalités qui font la puissance de nos solutions. 
                Chaque fonctionnalité a été conçue pour répondre à un besoin spécifique et 
                améliorer votre expérience.
              </p>
            </div>
            
            {/* Image/Illustration à droite */}
            <div className="order-1 lg:order-2">
              <div className="relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <div className="text-5xl md:text-6xl mb-4">⚡</div>
                    <h3 className="text-lg md:text-xl font-semibold text-black">Fonctionnalités</h3>
                    <p className="text-gray-700 text-sm md:text-base">Tout ce dont vous avez besoin</p>
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
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 hover:shadow-xl transition">
              <div className="text-3xl md:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}