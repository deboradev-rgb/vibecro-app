'use client';

import { useState } from 'react';
import { Network, Cpu, Database, Cloud, Smartphone, Users } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const ServiceEcosystem = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const nodes = [
    {
      id: 'iot',
      title: 'IoT & Capteurs',
      description: 'Collecte de données en temps réel',
      icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
      position: 'top-1/2 left-1/4',
    },
    {
      id: 'data',
      title: 'Traitement Data',
      description: 'Analyse et transformation des données',
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      position: 'top-1/3 left-1/2',
    },
    {
      id: 'ia',
      title: 'Intelligence Artificielle',
      description: 'Algorithmes prédictifs et automatisation',
      icon: <Network className="w-6 h-6 md:w-8 md:h-8" />,
      position: 'top-2/3 left-1/2',
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      description: 'Hébergement scalable et sécurisé',
      icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" />,
      position: 'top-1/2 right-1/4',
    },
    {
      id: 'apps',
      title: 'Applications',
      description: 'Web, mobile et interfaces utilisateur',
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
      position: 'bottom-10 left-1/3',
    },
    {
      id: 'users',
      title: 'Utilisateurs',
      description: 'Expérience et valeur business',
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      position: 'bottom-10 right-1/3',
    }
  ];
  
  const connections = [
    { from: 'iot', to: 'data' },
    { from: 'data', to: 'ia' },
    { from: 'ia', to: 'cloud' },
    { from: 'cloud', to: 'apps' },
    { from: 'apps', to: 'users' },
    { from: 'data', to: 'apps' },
    { from: 'ia', to: 'users' }
  ];

  return (
    <div className="w-full flex justify-center py-12 md:py-20">
      <div className="w-4/5 max-w-7xl px-4">
        {/* Hero Section pour ServiceEcosystem */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          {/* Texte à gauche */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
              Écosystème technologique intégré
            </h2>
            
            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Chez Vibecro, nous offrons une pile complète de services numériques conçus pour aider les entreprises 
              à grandir, se démarquer et performer en ligne.
            </p>
            
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              Toutes nos solutions sont interconnectées pour offrir une expérience complète et cohérente, 
              de la création d'expériences digitales engageantes à l'optimisation de la visibilité sur le web.
            </p>
            
            <button className="px-6 md:px-8 py-2 md:py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition flex items-center gap-2 text-sm md:text-base">
              Découvrir notre approche
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
          
          {/* Visualisation à droite */}
          <div className="order-1 lg:order-2">
            <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#e38f00]/10 to-[#e38f00]/5">
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                  {/* Diagramme simplifié */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#e38f00] rounded-full flex items-center justify-center">
                    <Cpu className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#e38f00]/80 rounded-full flex items-center justify-center">
                    <Database className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#e38f00]/80 rounded-full flex items-center justify-center">
                    <Network className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#e38f00]/80 rounded-full flex items-center justify-center">
                    <Cloud className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#e38f00]/80 rounded-full flex items-center justify-center">
                    <Smartphone className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#e38f00] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Lignes de connexion */}
                  <div className="absolute top-0 left-1/2 w-1 h-24 md:h-32 bg-[#e38f00]/30 -translate-x-1/2"></div>
                  <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-1 bg-[#e38f00]/30"></div>
                  <div className="absolute top-1/4 right-1/4 w-24 md:w-32 h-1 bg-[#e38f00]/30"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-24 md:w-32 h-1 bg-[#e38f00]/30"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 md:w-32 h-1 bg-[#e38f00]/30"></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-24 md:h-32 bg-[#e38f00]/30 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section détaillée de l'écosystème */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 text-black">
            Comment nos technologies s'articulent
          </h3>
          
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden">
            {/* Connections */}
            <svg className="absolute inset-0 w-full h-full">
              {connections.map((conn, index) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                
                if (!fromNode || !toNode) return null;
                
                return (
                  <line
                    key={index}
                    x1="25%"
                    y1="50%"
                    x2="50%"
                    y2="33%"
                    stroke={activeNode === conn.from || activeNode === conn.to ? '#e38f00' : '#d1d5db'}
                    strokeWidth="2"
                    className="transition-colors duration-300"
                  />
                );
              })}
            </svg>
            
            {/* Nodes */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className={`
                  relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 
                  border-[#e38f00]
                  ${activeNode === node.id ? 'scale-110' : ''}
                  transition-all duration-300
                  flex items-center justify-center
                  bg-[#e38f00]
                  cursor-pointer group
                `}>
                  <div className="text-white">
                    {node.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-20 md:-bottom-24 left-1/2 transform -translate-x-1/2 w-48 md:w-64 p-3 md:p-4 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-200">
                    <h4 className="font-bold text-black mb-1 text-sm md:text-base">{node.title}</h4>
                    <p className="text-xs md:text-sm text-gray-700">{node.description}</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200" />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-[#e38f00] to-[#d48500] border-6 md:border-8 border-white shadow-2xl flex items-center justify-center">
                  <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">VIBECRO</span>
                </div>
                
                {/* Pulsing animation */}
                <div className="absolute inset-0 rounded-full bg-[#e38f00] animate-ping opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceEcosystem;