'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  showHero?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}

export default function FAQSection({ 
  faqs, 
  showHero = false,
  heroTitle = "Questions Fréquentes",
  heroDescription 
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              
              <p className="text-gray-700 text-sm md:text-base">
                Vous avez des questions ? Nous avons les réponses. Consultez notre FAQ pour 
                tout savoir sur nos services, tarifs et fonctionnalités.
              </p>
            </div>
            
            {/* Image/Illustration à droite */}
            <div className="order-1 lg:order-2">
              <div className="relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <div className="text-5xl md:text-6xl mb-4">❓</div>
                    <h3 className="text-lg md:text-xl font-semibold text-black">FAQ</h3>
                    <p className="text-gray-700 text-sm md:text-base">Questions & Réponses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Liste des FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-4 text-left font-semibold bg-white hover:bg-[#e38f00]/5 transition flex justify-between items-center"
              >
                <span className="text-black text-base md:text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition text-[#e38f00] flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-4 md:px-6 py-4 bg-[#e38f00]/5 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}