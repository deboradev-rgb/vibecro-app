


import { useState, useEffect } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';


const PartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const partners = [
    { name: 'Microsoft', logo: '/images/partners/microsoft.svg', category: 'Technologie' },
    { name: 'AWS', logo: '/images/partners/aws.svg', category: 'Cloud' },
    { name: 'Google Cloud', logo: '/images/partners/google-cloud.svg', category: 'Cloud' },
    { name: 'IBM', logo: '/images/partners/ibm.svg', category: 'Technologie' },
    { name: 'Oracle', logo: '/images/partners/oracle.svg', category: 'Database' },
    { name: 'Siemens', logo: '/images/partners/siemens.svg', category: 'IoT' },
    { name: 'Intel', logo: '/images/partners/intel.svg', category: 'Hardware' },
    { name: 'Cisco', logo: '/images/partners/cisco.svg', category: 'Réseau' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 4));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [partners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / 4)) % Math.ceil(partners.length / 4));
  };

  const visiblePartners = partners.slice(currentSlide * 4, currentSlide * 4 + 4);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Nos entreprises partenaires
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nous collaborons avec les leaders technologiques pour vous offrir les meilleures solutions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex justify-center gap-8 transition-transform duration-300">
              {visiblePartners.map((partner, index) => (
                <div 
                  key={partner.name} 
                  className="flex-shrink-0 w-48 h-32 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-300 mb-2">
                      {partner.name.charAt(0)}
                    </div>
                    <div className="text-sm text-gray-400">{partner.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{partner.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Partenaire précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Partenaire suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Aller au groupe ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">ISO 27001</div>
              <div className="text-sm text-gray-400">Certifié Sécurité</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-400">Satisfaction Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;