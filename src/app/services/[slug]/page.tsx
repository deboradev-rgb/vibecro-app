'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import FeatureGrid from '@/components/services/FeatureGrid';
import PricingSection from '@/components/services/PricingSection';
import FAQSection from '@/components/services/FAQSection';
import ParallaxBackground from '@/components/services/ParallaxBackground';
import { useParams } from 'next/navigation';

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Services data mapping
  const servicesMap: Record<string, any> = {
    'rh-ia-solutions': {
      title: 'Solutions RH-IA',
      subtitle: 'Transformez votre gestion des ressources humaines avec l\'IA',
      description: 'Solutions intelligentes pour la sélection, l\'évaluation et la rétention des talents',
      features: [
        { icon: '🤖', title: 'Recrutement IA', description: 'Matching automatique candidat-poste' },
        { icon: '📊', title: 'Analytics RH', description: 'Insights sur vos talents' },
        { icon: '💡', title: 'Formation IA', description: 'Plans de développement personnalisés' },
        { icon: '🎯', title: 'Performance', description: 'Évaluation objective des collaborateurs' }
      ]
    },
    'clientele-plus': {
      title: 'Clientèle Plus',
      subtitle: 'Plateforme de fidélisation client basée sur l\'IA',
      description: 'Augmentez la rétention et la satisfaction client',
      features: [
        { icon: '💳', title: 'Programme de fidélité', description: 'Système de points intelligent' },
        { icon: '🎁', title: 'Récompenses', description: 'Offres personnalisées basées sur l\'IA' },
        { icon: '📱', title: 'App mobile', description: 'Engagement client constant' },
        { icon: '📈', title: 'Analytics', description: 'Insights comportementaux' }
      ]
    },
    'conciergerie-touristique': {
      title: 'Conciergerie Touristique',
      subtitle: 'Service de conciergerie intelligent pour le tourisme',
      description: 'Expérience client exceptionnelle automatisée',
      features: [
        { icon: '🏨', title: 'Réservations', description: 'Booking intelligent et instantané' },
        { icon: '🗺️', title: 'Recommandations', description: 'Suggestions personnalisées par IA' },
        { icon: '📞', title: 'Support 24/7', description: 'Chat bot multilingue' },
        { icon: '🎫', title: 'Billetterie', description: 'Accès facile aux attractions' }
      ]
    },
    'developpement-web': {
      title: 'Développement Web',
      subtitle: 'Solutions web modernes et performantes',
      description: 'Applications web custom avec les dernières technologies',
      features: [
        { icon: '⚡', title: 'Performance', description: 'Sites ultra-rapides et optimisés' },
        { icon: '📱', title: 'Responsive', description: 'Compatible tous les appareils' },
        { icon: '🔒', title: 'Sécurité', description: 'Protection maximale de vos données' },
        { icon: '🚀', title: 'Scalabilité', description: 'Prêt pour la croissance' }
      ]
    }
  };

  const service = servicesMap[slug] || {
    title: 'Service',
    subtitle: 'Description du service',
    description: 'Contactez-nous pour plus de détails',
    features: []
  };

  return (
    <ParallaxBackground images={['/tech.jpg', '/service.jpg', '/image1.jpg']}>
      <Header />
      
      <main>
        <ServiceHero 
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
        />
        
        {service.features && service.features.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Fonctionnalités Principales
                </span>
              </h2>
              <FeatureGrid features={service.features} />
            </div>
          </section>
        )}
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Prêt à démarrer ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez notre équipe pour une démonstration gratuite
            </p>
            <a
              href="/contact"
              className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition inline-block"
            >
              Demander une démo
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </ParallaxBackground>
  );
}
