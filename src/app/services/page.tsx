// frontend/src/app/services/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceFilter from '@/components/sections/ServiceFilter';
import ServiceEcosystem from '@/components/services/ServiceEcosystem';
import CTASection from '@/components/sections/CTASection';
import ParallaxBackground from '@/components/services/ParallaxBackground';
import { ArrowRight, CheckCircle, Star, Sparkles, Zap, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'

export default function ServicesPage() {
  const services = [
    {
      id: 'iot-tracking',
      title: 'IOT & Tracking',
      description: 'Suivez en temps réel vos véhicules, colis, missions ou personnel grâce à notre solution Vibecro Tracking.',
      icon: '📡',
      features: [
        'Géolocalisation en temps réel',
        'Alertes automatiques',
        'Rapports analytiques',
        'API d\'intégration'
      ],
      stats: [
        { value: '50+', label: 'Projets IoT livrés' },
        { value: '99.9%', label: 'Disponibilité' },
        { value: '2-5m', label: 'Précision' }
      ]
    },
    {
      id: 'rh-ia-solutions',
      title: 'Solution RH-IA',
      description: 'Plateforme intelligente qui automatise et améliore vos processus RH grâce à l\'IA.',
      icon: '🤖',
      features: [
        'Automatisation des recrutements',
        'Analyse des performances',
        'Gestion des talents',
        'Prédiction des besoins'
      ],
      stats: [
        { value: '-60%', label: 'Temps de recrutement' },
        { value: '+40%', label: 'Qualité des embauches' },
        { value: '24/7', label: 'Disponible' }
      ]
    },
    {
      id: 'clientele-plus',
      title: 'Clientèle Plus',
      description: 'Solution numérique sur-mesure conçue pour optimiser la gestion et l\'expérience client.',
      icon: '👥',
      features: [
        'CRM personnalisé',
        'Analytics client',
        'Automatisation marketing',
        'Support multi-canal'
      ],
      stats: [
        { value: '+30%', label: 'Fidélisation' },
        { value: '+25%', label: 'Ventes croisées' },
        { value: '360°', label: 'Vue client' }
      ]
    },
    {
      id: 'conciergerie-touristique',
      title: 'Conciergerie Touristique & Numérique',
      description: 'Trouvez ici toutes les informations pour réserver, organiser et vivre une expérience de voyage haut de gamme.',
      icon: '🏨',
      features: [
        'Réservations intelligentes',
        'Itinéraires personnalisés',
        'Assistance 24/7',
        'Expériences VIP'
      ],
      stats: [
        { value: '+70%', label: 'Réservations' },
        { value: '4.9/5', label: 'Satisfaction' },
        { value: '100+', label: 'Destinations' }
      ]
    },
    {
      id: 'developpement-web',
      title: 'Développement Web & Mobile',
      description: 'Applications modernes et performantes pour le web et les mobiles avec les dernières technologies.',
      icon: '💻',
      features: [
        'React/Next.js',
        'Applications natives',
        'PWA',
        'API REST'
      ],
      stats: [
        { value: '95+', label: 'Score Performance' },
        { value: '<100ms', label: 'Temps de réponse' },
        { value: '100%', label: 'Responsive' }
      ]
    },
    {
      id: 'consulting-digital',
      title: 'Stratégie Digitale & Conseil',
      description: 'Accompagnement stratégique pour votre transformation digitale et optimisation de vos processus.',
      icon: '🎯',
      features: [
        'Audit digital',
        'Roadmap stratégique',
        'Formation équipes',
        'Optimisation processus'
      ],
      stats: [
        { value: '+50%', label: 'Efficacité' },
        { value: '-35%', label: 'Coûts' },
        { value: '6 mois', label: 'ROI moyen' }
      ]
    }
  ];

  return (
    <ParallaxBackground images={['/tech.jpg', '/service.jpg', '/propos.jpg']}>
      <Header />
      
      <main>
        {/* Hero Section - Texte à gauche, Image à droite */}
        <section 
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `url('/tech.jpg'), url('/service.jpg')`,
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center right, center left',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundColor: '#f8f9fa'
          }}
        >
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
          
          <div className="w-full flex justify-center relative z-10">
            <div className="w-4/5 max-w-7xl px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Texte à gauche */}
                <div className="text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-[#e38f00]/10 rounded-full text-[#e38f00] font-bold mb-8 shadow-sm">
                    <Star className="w-4 h-4 mr-2" />
                    Services Premium
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                    <span className="block text-black">
                      Nous offrons une pile complète
                    </span>
                    <span className="block text-[#e38f00]">
                      de services numériques
                    </span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                    Chez Vibecro, nous offrons une pile complète de services numériques conçus pour aider les entreprises à grandir, 
                    se démarquer et performer en ligne. De la création d'expériences digitales engageantes à l'optimisation de 
                    la visibilité sur le web, nous mettons à votre disposition une expertise globale et intégrée.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact?type=quote" 
                      className="inline-flex items-center justify-center px-8 py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition-all shadow-lg hover:shadow-xl group"
                    >
                      <span>Demander un devis</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    
                    <Link 
                      href="#services" 
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#e38f00] text-[#e38f00] font-semibold rounded-lg hover:bg-[#e38f00]/10 transition-all group"
                    >
                      <span>Découvrir nos services</span>
                    </Link>
                  </div>
                </div>
                
                {/* Image/Visual à droite */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-square bg-gradient-to-br from-[#e38f00] via-[#d48500] to-[#c67b00] relative">
                      {/* Animated elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="relative w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                            <div className="text-white text-center">
                              <Sparkles className="w-16 h-16 mx-auto mb-4 animate-spin-slow" />
                              <div className="text-2xl font-bold">VIBECRO</div>
                              <div className="text-sm opacity-80">Services Digitaux</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating badges */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold">
                        <Zap className="w-4 h-4 inline mr-2" />
                        Solutions IA
                      </div>
                      <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold">
                        <Shield className="w-4 h-4 inline mr-2" />
                        Sécurisé
                      </div>
                    </div>
                  </div>
                  
                  {/* Infos supplémentaires autour de l'image */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-[#e38f00] mb-1">6+</div>
                      <div className="text-sm text-gray-700">Services principaux</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-[#e38f00] mb-1">150+</div>
                      <div className="text-sm text-gray-700">Projets livrés</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <div className="w-full flex justify-center">
          <div className="w-4/5 max-w-7xl px-4">
            <ServiceEcosystem />
          </div>
        </div>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="w-full flex justify-center">
            <div className="w-4/5 max-w-7xl px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Trouvez des solutions pour vos entreprises
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Chez Vibecro, nous croyons que chaque entreprise mérite des solutions adaptées à ses besoins uniques. 
                  Que vous soyez une startup en pleine croissance ou une entreprise déjà établie.
                </p>
              </div>

              <ServiceFilter />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="w-full flex justify-center">
            <div className="w-4/5 max-w-7xl px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-6">
                    Notre approche unique
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#e38f00]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#e38f00]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Compréhension approfondie</h3>
                        <p className="text-gray-700">
                          Nous prenons le temps de comprendre vos défis, vos objectifs et votre environnement avant de proposer une solution.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#e38f00]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#e38f00]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Solutions sur-mesure</h3>
                        <p className="text-gray-700">
                          Pas de solutions pré-packagées. Chaque projet est unique et mérite une approche personnalisée.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#e38f00]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#e38f00]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Support continu</h3>
                        <p className="text-gray-700">
                          Notre engagement ne s'arrête pas à la livraison. Nous assurons un support et des améliorations continues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-black">Processus de travail</h3>
                  
                  <div className="space-y-6">
                    {[
                      { step: '1', title: 'Découverte & Analyse', desc: 'Compréhension de vos besoins et objectifs' },
                      { step: '2', title: 'Proposition & Planning', desc: 'Définition de la solution et du calendrier' },
                      { step: '3', title: 'Développement & Tests', desc: 'Création et validation de la solution' },
                      { step: '4', title: 'Déploiement & Formation', desc: 'Mise en production et accompagnement' },
                      { step: '5', title: 'Support & Évolution', desc: 'Maintenance et améliorations continues' }
                    ].map((item) => (
                      <div key={item.step} className="flex items-start group">
                        <div className="w-10 h-10 bg-[#e38f00]/20 text-[#e38f00] rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 group-hover:bg-[#e38f00] group-hover:text-white transition-colors">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-black group-hover:text-[#e38f00] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="w-full flex justify-center">
          <div className="w-4/5 max-w-7xl px-4">
            <CTASection 
              title="Vous avez un projet spécifique ?"
              description="Parlons-en ensemble pour trouver la solution parfaitement adaptée à vos besoins"
              primaryButtonText="Discuter avec un expert"
              primaryButtonLink="/contact?type=consulting"
              secondaryButtonText="Voir nos réalisations"
              secondaryButtonLink="/portfolio"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </ParallaxBackground>
  );
}