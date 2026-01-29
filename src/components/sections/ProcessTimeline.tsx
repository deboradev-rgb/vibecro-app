// src/components/sections/ProcessTimeline.tsx
import { CheckCircle, Calendar, Users, Rocket, BarChart } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      id: 1,
      title: 'Planification du projet',
      description: 'Transformation de votre idée en un plan d\'action concret, détaillé et réalisable. Création du plan de route qui guidera l\'ensemble de votre projet.',
      icon: Calendar,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Image de marque du produit',
      description: 'Développement de la personnalité de votre produit et de la promesse que vous faites à vos clients. Différenciation par rapport à la concurrence.',
      icon: Users,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Conception UI/UX',
      description: 'Création d\'interfaces numériques esthétiques, intuitives et efficaces pour répondre aux besoins des utilisateurs.',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 4,
      title: 'Marketing et gestion',
      description: 'Stratégies marketing et gestion pour assurer la croissance et la pérennité de votre entreprise.',
      icon: BarChart,
      color: 'orange'
    },
    {
      id: 5,
      title: 'Lancement et support',
      description: 'Déploiement du projet et support continu pour assurer son succès à long terme.',
      icon: Rocket,
      color: 'red'
    }
  ];
  
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 md:w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
      
      {/* Steps */}
      <div className="space-y-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={step.id}
              className={`relative flex flex-col md:flex-row items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                <div className={`w-8 h-8 rounded-full bg-${step.color}-500 border-4 border-white shadow-lg flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-${step.color}-100 text-${step.color}-800`}>
                    Étape {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block w-5/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;