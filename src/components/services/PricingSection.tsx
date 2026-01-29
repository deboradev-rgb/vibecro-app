'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  period?: string;
  devices: string;
  features: string[];
  ctaText: string;
  highlighted: boolean;
}

interface PricingSectionProps {
  plans: Plan[];
  showHero?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}

export default function PricingSection({ 
  plans, 
  showHero = false,
  heroTitle = "Tarification Flexible",
  heroDescription 
}: PricingSectionProps) {
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
                Choisissez le plan qui correspond le mieux à vos besoins. 
                Tous nos plans incluent un support dédié et des mises à jour régulières.
              </p>
              
              <button className="px-6 md:px-8 py-2 md:py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition flex items-center gap-2 text-sm md:text-base">
                Comparer les plans
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
            
            {/* Image/Illustration à droite */}
            <div className="order-1 lg:order-2">
              <div className="relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <div className="text-5xl md:text-6xl mb-4">💰</div>
                    <h3 className="text-lg md:text-xl font-semibold text-black">Tarifs</h3>
                    <p className="text-gray-700 text-sm md:text-base">Plans adaptés à tous</p>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-6 md:p-8 rounded-lg border transition ${
                plan.highlighted 
                  ? 'bg-[#e38f00] text-white border-[#e38f00] shadow-2xl lg:scale-105' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.highlighted ? 'text-white/90 text-sm md:text-base' : 'text-gray-700 text-sm md:text-base'}>
                {plan.devices}
              </p>
              
              <div className="my-4 md:my-6">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Contactez-nous' && (
                  <span className={plan.highlighted ? 'text-white/90 ml-2' : 'text-gray-700 ml-2'}>
                    /{plan.period}
                  </span>
                )}
              </div>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-[#e38f00]'}`} />
                    <span className={plan.highlighted ? 'text-white/90 text-sm md:text-base' : 'text-gray-700 text-sm md:text-base'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition text-sm md:text-base ${
                plan.highlighted
                  ? 'bg-white text-[#e38f00] hover:bg-gray-100'
                  : 'bg-[#e38f00] text-white hover:bg-[#d48500]'
              }`}>
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}