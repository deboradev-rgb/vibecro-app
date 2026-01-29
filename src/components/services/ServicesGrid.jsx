'use client';

import { useState, useEffect } from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import { getServices, type Service } from '@/lib/laravel/client';
import { ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  initialServices?: Service[];
  showFilter?: boolean;
  limit?: number;
  showHero?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}

const ServicesGrid = ({ 
  initialServices = [], 
  showFilter = true,
  limit,
  showHero = false,
  heroTitle = "Nos Services",
  heroDescription 
}: ServicesGridProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [services, setServices] = useState<Service[]>(initialServices);
  const [loading, setLoading] = useState(!initialServices.length);
  const [error, setError] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'iot', label: 'IoT & Tracking' },
    { id: 'ia', label: 'Intelligence Artificielle' },
    { id: 'digital', label: 'Solutions Digitales' },
    { id: 'tech', label: 'Développement' }
  ];
  
  useEffect(() => {
    if (!initialServices.length) {
      fetchServices();
    }
  }, [activeCategory, initialServices.length]);
  
  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await getServices({
        category: activeCategory !== 'all' ? activeCategory : undefined
      });
      setServices(limit ? data.slice(0, limit) : data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de chargement');
      setServices(getFallbackServices());
    } finally {
      setLoading(false);
    }
  };
  
  const getFallbackServices = (): Service[] => [
    {
      id: 'iot-tracking',
      title: 'IOT & Tracking',
      slug: 'iot-tracking',
      description: 'Suivez en temps réel vos véhicules, colis, missions ou personnel grâce à notre solution Vibecro Tracking.',
      icon: '📡',
      features: ['Géolocalisation temps réel', 'Alertes intelligentes', 'Dashboard analytics'],
      category: 'iot'
    },
    {
      id: 'rh-ia-solutions',
      title: 'Solution RH-IA',
      slug: 'rh-ia-solutions',
      description: 'Plateforme intelligente qui automatise et améliore vos processus RH grâce à l\'IA.',
      icon: '🤖',
      features: ['Recrutement automatisé', 'Analyse performances', 'Gestion talents'],
      category: 'ia'
    },
    {
      id: 'clientele-plus',
      title: 'Clientèle Plus',
      slug: 'clientele-plus',
      description: 'Solution numérique sur-mesure pour optimiser la gestion et l\'expérience client.',
      icon: '👥',
      features: ['CRM personnalisé', 'Analytics client', 'Marketing automation'],
      category: 'digital'
    },
    {
      id: 'conciergerie-touristique',
      title: 'Conciergerie Touristique & Numérique',
      slug: 'conciergerie-touristique',
      description: 'Expérience de voyage haut de gamme avec solutions de conciergerie numérique.',
      icon: '🏨',
      features: ['Réservations VIP', 'Itinéraires sur-mesure', 'Assistance 24/7'],
      category: 'tourisme'
    },
    {
      id: 'developpement-web',
      title: 'Développement Web & Mobile',
      slug: 'developpement-web',
      description: 'Applications modernes et performantes pour le web et les mobiles.',
      icon: '💻',
      features: ['React/Next.js', 'Applications natives', 'PWA', 'API REST'],
      category: 'tech'
    },
    {
      id: 'consulting-digital',
      title: 'Stratégie Digitale & Conseil',
      slug: 'consulting-digital',
      description: 'Accompagnement stratégique pour votre transformation digitale.',
      icon: '🎯',
      features: ['Audit digital', 'Roadmap stratégique', 'Formation équipes'],
      category: 'consulting'
    }
  ];
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => 
        service.category === activeCategory || 
        service.title.toLowerCase().includes(activeCategory)
      );

  if (loading) {
    return (
      <div className="w-full flex justify-center py-12 md:py-20">
        <div className="w-4/5 max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-40 md:h-48 bg-gray-200 rounded-xl mb-3 md:mb-4"></div>
                <div className="h-5 md:h-6 bg-gray-200 rounded w-3/4 mb-2 md:mb-3"></div>
                <div className="h-3 md:h-4 bg-gray-200 rounded w-full mb-1 md:mb-2"></div>
                <div className="h-3 md:h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
                Chez Vibecro, nous croyons que chaque entreprise mérite des solutions adaptées à ses besoins uniques. 
                Que vous soyez une startup en pleine croissance ou une entreprise déjà établie.
              </p>
              
              <button className="px-6 md:px-8 py-2 md:py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition flex items-center gap-2 text-sm md:text-base">
                Découvrir tous nos services
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
            
            {/* Image/Illustration à droite */}
            <div className="order-1 lg:order-2">
              <div className="relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <div className="text-5xl md:text-6xl mb-4">🚀</div>
                    <h3 className="text-lg md:text-xl font-semibold text-black">Services</h3>
                    <p className="text-gray-700 text-sm md:text-base">Solutions sur mesure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {error ? (
          <div className="text-center py-8 md:py-12">
            <div className="text-red-600 mb-3 md:mb-4 text-sm md:text-base">{error}</div>
            <button 
              onClick={fetchServices}
              className="px-5 md:px-6 py-1.5 md:py-2 bg-[#e38f00] text-white rounded-lg hover:bg-[#d48500] transition-colors text-sm md:text-base"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <>
            {showFilter && (
              <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition-colors text-xs md:text-sm ${
                      activeCategory === category.id
                        ? 'bg-[#e38f00] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-8 md:py-12">
                <p className="text-gray-700 text-sm md:text-base">Aucun service trouvé dans cette catégorie.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesGrid;