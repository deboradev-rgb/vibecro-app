'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceNav from '@/components/services/ServiceNav';
import FeatureGrid from '@/components/services/FeatureGrid';
import UseCaseCarousel from '@/components/services/UseCaseCarousel';
import PricingSection from '@/components/services/PricingSection';
import FAQSection from '@/components/services/FAQSection';
import TechStack from '@/components/services/TechStack';
import ParallaxBackground from '@/components/services/ParallaxBackground';

export default function IotTrackingPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const serviceData = {
    title: 'IOT & Tracking',
    subtitle: 'Suivez en temps réel vos véhicules, colis, missions ou personnel',
    description: 'Solution complète de géolocalisation et monitoring d\'actifs pour optimiser vos opérations',
    badge: 'Technologie Brevetée',
    image: '/images/iot-dashboard.jpg'
  };

  const features = [
    {
      icon: '📍',
      title: 'Géolocalisation en temps réel',
      description: 'Position précise de vos actifs avec mise à jour toutes les 30 secondes'
    },
    {
      icon: '🚨',
      title: 'Alertes intelligentes',
      description: 'Notifications instantanées pour sortie de zone, immobilisation, ou maintenance'
    },
    {
      icon: '📊',
      title: 'Analytics avancés',
      description: 'Rapports détaillés sur l\'utilisation, les trajets et les performances'
    },
    {
      icon: '🔗',
      title: 'Intégration API',
      description: 'Connectez notre solution à vos systèmes existants (ERP, CRM, etc.)'
    },
    {
      icon: '🛡️',
      title: 'Sécurité maximale',
      description: 'Chiffrement des données et conformité RGPD'
    },
    {
      icon: '📱',
      title: 'Application mobile',
      description: 'Suivez vos actifs depuis votre smartphone ou tablette'
    }
  ];

  const useCases = [
    {
      industry: 'Logistique & Transport',
      problem: 'Perte de visibilité sur les flottes de véhicules',
      solution: 'Tracking temps réel avec optimisation des routes',
      results: '-35% de coûts logistiques'
    },
    {
      industry: 'Santé',
      problem: 'Difficulté à localiser les équipements médicaux',
      solution: 'Géolocalisation des équipements critiques',
      results: '+50% d\'efficacité opérationnelle'
    },
    {
      industry: 'Construction',
      problem: 'Vol ou mauvaise utilisation des équipements',
      solution: 'Monitoring des actifs avec alertes de mouvement',
      results: '-60% de pertes d\'équipements'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '49',
      period: 'mois',
      devices: 'jusqu\'à 50 appareils',
      features: [
        'Géolocalisation temps réel',
        '10 alertes personnalisées',
        'Rapports mensuels',
        'Support par email',
        '1 an d\'historique'
      ],
      ctaText: 'Démarrer l\'essai gratuit',
      highlighted: false
    },
    {
      name: 'Business',
      price: '149',
      period: 'mois',
      devices: 'jusqu\'à 500 appareils',
      features: [
        'Toutes les fonctionnalités Starter',
        'Alertes illimitées',
        'Rapports hebdomadaires',
        'Support téléphonique',
        '3 ans d\'historique',
        'API complète',
        'Formation équipe'
      ],
      ctaText: 'Choisir ce plan',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Contactez-nous',
      period: 'personnalisé',
      devices: 'illimité',
      features: [
        'Toutes les fonctionnalités Business',
        'Développements sur mesure',
        'Support 24/7 dédié',
        'Intégration personnalisée',
        'Historique illimité',
        'SLA 99.9%',
        'Audit de sécurité'
      ],
      ctaText: 'Demander un devis',
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: 'Quelle est la précision de la géolocalisation ?',
      answer: 'Notre solution offre une précision de 2 à 5 mètres en extérieur grâce à la combinaison GPS, GLONASS et réseau cellulaire.'
    },
    {
      question: 'Les données sont-elles sécurisées ?',
      answer: 'Oui, toutes les données sont chiffrées de bout en bout et nous sommes conformes RGPD. Vos informations restent votre propriété.'
    },
    {
      question: 'Puis-je essayer gratuitement ?',
      answer: 'Oui, nous offrons un essai gratuit de 14 jours sans engagement et sans carte de crédit requise.'
    },
    {
      question: 'Combien de temps les données sont-elles conservées ?',
      answer: 'L\'historique est conservé pendant 1 an pour le plan Starter, 3 ans pour Business, et illimité pour Enterprise.'
    }
  ];

  return (
    <ParallaxBackground images={['/tech.jpg', '/service.jpg']}>
      <Header />
      
      <main>
        {/* Hero Section avec texte à gauche et image à droite */}
        <div 
          className="w-full flex justify-center py-12 md:py-20 relative overflow-hidden"
          style={{
            backgroundImage: `url('/tech.jpg'), url('/service.jpg')`,
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center right, center left',
            backgroundRepeat: 'no-repeat, no-repeat',
            // backgroundColor: '#f8f9fa'
          }}
        >
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
          
          <div className="w-4/5 max-w-7xl px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contenu texte à gauche */}
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#e38f00]/10 text-[#e38f00] text-sm font-semibold rounded-full">
                    {serviceData.badge}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  {serviceData.title}
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">
                  {serviceData.subtitle}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  {serviceData.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact?service=iot" 
                    className="px-8 py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition text-center"
                  >
                    Demander une démo
                  </a>
                  <a 
                    href="#pricing" 
                    className="px-8 py-3 border-2 border-[#e38f00] text-[#e38f00] font-semibold rounded-lg hover:bg-[#e38f00]/10 transition text-center"
                  >
                    Voir les tarifs
                  </a>
                </div>
              </div>
              
              {/* Image à droite */}
              <div className="order-1 lg:order-2">
                <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Image placeholder - remplacez par votre image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/20 to-black/50 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-4xl mb-4">📍</div>
                      <p className="text-xl font-semibold">Dashboard IoT & Tracking</p>
                      <p className="mt-2 opacity-90">Interface de monitoring temps réel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ServiceNav 
          sections={['overview', 'features', 'usecases', 'pricing', 'faq']}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        {/* Contenu principal avec 80% de largeur */}
        <div className="w-full flex justify-center">
          <div className="w-4/5 max-w-7xl px-4 py-12">
            {/* Overview Section - 80% width */}
            <section id="overview" className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-black">Problème & Solution</h2>
                  <div className="space-y-4">
                    <div className="p-6 bg-[#e38f00]/5 rounded-lg border-l-4 border-[#e38f00]">
                      <h3 className="font-semibold text-[#e38f00] mb-2">Le problème</h3>
                      <p className="text-gray-700">
                        Vous perdez la trace de vos actifs mobiles ? Les retards de livraison impactent votre réputation ? 
                        Les coûts logistiques sont incontrôlables ?
                      </p>
                    </div>
                    
                    <div className="p-6 bg-[#e38f00]/5 rounded-lg border-l-4 border-[#e38f00]">
                      <h3 className="font-semibold text-[#e38f00] mb-2">Notre solution</h3>
                      <p className="text-gray-700">
                        Notre plateforme IoT offre une visibilité temps réel sur tous vos actifs, permettant une optimisation 
                        continue de vos opérations et une réduction significative des coûts.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-black rounded-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Impact mesurable</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Réduction des coûts logistiques</span>
                          <span className="font-bold">-35%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-[#e38f00] rounded-full w-3/4"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Efficacité opérationnelle</span>
                          <span className="font-bold">+50%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-[#e38f00] rounded-full w-1/2"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>ROI moyen</span>
                          <span className="font-bold">6 mois</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-[#e38f00] rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Features Section - 80% width */}
            <section id="features" className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-black">Fonctionnalités principales</h2>
              <FeatureGrid features={features} />
            </section>
            
            {/* Use Cases - 80% width */}
            <section id="usecases" className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-black">Cas d'usage par industrie</h2>
              <UseCaseCarousel useCases={useCases} />
            </section>
            
            {/* Tech Stack - 80% width */}
            <section className="mb-20">
              <TechStack 
                technologies={[
                  'React/Next.js',
                  'Node.js',
                  'MongoDB',
                  'AWS IoT Core',
                  'AWS Lambda',
                  'WebSocket'
                ]}
              />
            </section>
            
            {/* Pricing - 80% width */}
            <section id="pricing" className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-black">Tarification flexible</h2>
              <PricingSection plans={pricingPlans} />
            </section>
            
            {/* FAQ - 80% width */}
            <section id="faq" className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-black">Questions fréquentes</h2>
              <FAQSection faqs={faqs} />
            </section>
            
            {/* Final CTA - 80% width */}
            <section className="bg-gradient-to-r from-[#e38f00] via-[#d48500] to-[#c67b00] rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Prêt à optimiser votre suivi d'actifs ?</h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez les 50+ entreprises qui nous font déjà confiance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=iot" 
                  className="px-8 py-3 bg-white text-[#e38f00] font-semibold rounded-lg hover:bg-gray-100 transition"
                >
                  Demander une démo
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
                >
                  Essai gratuit 14 jours
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </ParallaxBackground>
  );
}