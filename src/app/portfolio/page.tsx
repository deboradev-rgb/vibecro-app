// frontend/src/app/portfolio/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  ArrowRight, 
  FolderKanban, 
  Star, 
  Sparkles,
  Zap,
  Eye,
  ExternalLink,
  Filter,
  Grid,
  List,
  ChevronRight,
  Play,
  Heart,
  Share2,
  Code,
  Palette,
  Smartphone,
  Globe,
  BarChart,
  Users,
  Shield,
  Cloud,
  Brain,
  Target,
  TrendingUp,
  Award,
  Clock,
  Rocket,
  Cpu
} from 'lucide-react';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Animation au scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'Tous les projets', count: 12 },
    { id: 'web', label: 'Développement Web', count: 5},
    { id: 'mobile', label: 'Applications Mobile', count: 3 },
    { id: 'iot', label: 'IoT & Tracking', count: 2},
    { id: 'ai', label: 'Solutions IA', count: 2},
    { id: 'design', label: 'UI/UX Design', count: 4 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Plateforme RH-IA Intelligente',
      category: 'ai',
      client: 'Enterprise Corp',
      description: 'Solution complète de gestion RH avec intelligence artificielle pour l\'analyse prédictive et l\'optimisation des talents.',
      image: '/projects/rh-ai.jpg',
      tags: ['AI/ML', 'React', 'Node.js', 'PostgreSQL'],
      stats: { duration: '4 mois', team: '8 experts', satisfaction: '98%' },
      featured: true
    },
    {
      id: 2,
      title: 'Système de Tracking IoT Global',
      category: 'iot',
      client: 'Logistics Pro',
      description: 'Plateforme de monitoring en temps réel pour la chaîne logistique avec analytics avancés.',
      image: '/projects/iot-tracking.jpg',
      tags: ['IoT', 'React Native', 'AWS', 'Real-time'],
      stats: { duration: '6 mois', team: '12 experts', satisfaction: '99%' },
      featured: true
    },
    {
      id: 3,
      title: 'Marketplace E-commerce Premium',
      category: 'web',
      client: 'Luxe Market',
      description: 'Plateforme e-commerce haut de gamme avec réalité augmentée et paiements sécurisés.',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'AR', 'MongoDB'],
      stats: { duration: '3 mois', team: '6 experts', satisfaction: '97%' },
      featured: false
    },
    {
      id: 4,
      title: 'Application Wellness Mobile',
      category: 'mobile',
      client: 'Health First',
      description: 'Application de suivi santé avec IA personnalisée et intégration wearables.',
      image: '/projects/wellness-app.jpg',
      tags: ['React Native', 'AI', 'HealthKit', 'Firebase'],
      stats: { duration: '5 mois', team: '7 experts', satisfaction: '96%' },
      featured: false
    },
    {
      id: 5,
      title: 'Dashboard Analytics Enterprise',
      category: 'web',
      client: 'Data Insights Inc',
      description: 'Tableau de bord business intelligence avec visualisations interactives en temps réel.',
      image: '/projects/analytics.jpg',
      tags: ['Vue.js', 'D3.js', 'Python', 'Big Data'],
      stats: { duration: '4 mois', team: '9 experts', satisfaction: '99%' },
      featured: false
    },
    {
      id: 6,
      title: 'UI/UX Design System',
      category: 'design',
      client: 'Tech Startup',
      description: 'Système de design complet avec composants réutilisables et guide de marque.',
      image: '/projects/design-system.jpg',
      tags: ['Figma', 'Storybook', 'Design Tokens', 'Accessibility'],
      stats: { duration: '2 mois', team: '4 experts', satisfaction: '100%' },
      featured: false
    }
  ];

  const technologies = [
    { name: 'React/Next.js', count: 8, icon: '⚛️' },
    { name: 'Node.js/Python', count: 10, icon: '🚀' },
    { name: 'AWS/GCP', count: 12, icon: '☁️' },
    { name: 'AI/ML', count: 6, icon: '🧠' },
    { name: 'Mobile', count: 5, icon: '📱' },
    { name: 'IoT', count: 3, icon: '📡' }
  ];

  const stats = [
    { value: '150+', label: 'Projets Livrés'},
    { value: '98%', label: 'Satisfaction Client'},
    { value: '50+', label: 'Technologies Maîtrisées' },
    { value: '15+', label: 'Industries Servies'}
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      <main className="relative">
        {/* Hero Section - Texte à gauche, Image à droite */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="w-full flex justify-center">
            <div className="w-4/5 max-w-7xl px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Texte à gauche */}
                <div className="text-left scroll-animate">
                  <div className="inline-flex items-center px-4 py-2 bg-[#e38f00]/10 rounded-full text-[#e38f00] font-bold mb-8 shadow-sm">
                    <FolderKanban className="w-4 h-4 mr-2" />
                    Galerie d'Innovation
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                    <span className="block text-black">
                      Notre Portfolio
                    </span>
                    <span className="block text-[#e38f00]">
                      d'Excellence
                    </span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                    Découvrez comment nous transformons des idées visionnaires en 
                    <span className="font-bold text-[#e38f00]"> solutions digitales performantes </span>
                    qui redéfinissent les standards de l'industrie.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <div 
                        key={index}
                        className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                      >
                        <div className="text-2xl font-black text-[#e38f00]">
                          {stat.value}
                        </div>
                        <div className="flex items-center mt-2">
                          <span className="text-lg mr-2">{stat.icon}</span>
                          <span className="text-gray-700 font-medium text-sm">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact?type=project"
                      className="inline-flex items-center justify-center px-8 py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition-all shadow-lg hover:shadow-xl group"
                    >
                      <Rocket className="w-5 h-5 mr-3" />
                      <span>Démarrer un projet</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    
                    <Link
                      href="#projects"
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#e38f00] text-[#e38f00] font-semibold rounded-lg hover:bg-[#e38f00]/10 transition-all group"
                    >
                      <Eye className="w-5 h-5 mr-3" />
                      <span>Explorer les projets</span>
                    </Link>
                  </div>
                </div>
                
                {/* Image/Visual à droite */}
                <div className="relative scroll-animate">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-square bg-gradient-to-br from-[#e38f00] via-[#d48500] to-[#c67b00] relative">
                      {/* Animated elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="relative w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                            <div className="text-white text-center">
                              <FolderKanban className="w-16 h-16 mx-auto mb-4 animate-spin-slow" />
                              <div className="text-2xl font-bold">VIBECRO</div>
                              <div className="text-sm opacity-80">Portfolio Premium</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating badges */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold">
                        <Star className="w-4 h-4 inline mr-2" />
                        Projets Featured
                      </div>
                      <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold">
                        <CheckCircle className="w-4 h-4 inline mr-2" />
                        Livraison garantie
                      </div>
                    </div>
                  </div>
                  
                  {/* Infos supplémentaires autour de l'image */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-[#e38f00] mb-1">12+</div>
                      <div className="text-sm text-gray-700">Catégories</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-[#e38f00] mb-1">50+</div>
                      <div className="text-sm text-gray-700">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtres et Technologies - 80% width */}
        <section id="projects" className="py-12 bg-white border-y border-gray-200 scroll-animate">
          <div className="w-full flex justify-center">
            <div className="w-4/5 max-w-7xl px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Catégories */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      className={`inline-flex items-center px-5 py-3 rounded-xl transition-all duration-300 ${
                        filter === category.id
                          ? 'bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white shadow-lg'
                          : 'bg-white text-black hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <span className="mr-2 text-lg">{category.icon}</span>
                      <span className="font-semibold">{category.label}</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                        filter === category.id ? 'bg-white/20' : 'bg-[#e38f00]/10 text-[#e38f00]'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
                
                {/* View Toggle et Technologies */}
                <div className="flex items-center gap-6">
                  {/* Technologies utilisées */}
                  <div className="hidden md:flex items-center gap-3">
                    <div className="text-sm text-gray-700 font-medium">Stack technique :</div>
                    <div className="flex -space-x-2">
                      {technologies.slice(0, 4).map((tech, index) => (
                        <div 
                          key={index}
                          className="w-10 h-10 bg-white border-2 border-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                          title={`${tech.name} (${tech.count} projets)`}
                        >
                          <span className="text-lg">{tech.icon}</span>
                        </div>
                      ))}
                      {technologies.length > 4 && (
                        <div className="w-10 h-10 bg-[#e38f00]/10 border-2 border-white rounded-full flex items-center justify-center text-sm font-bold text-[#e38f00]">
                          +{technologies.length - 4}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* View Toggle */}
                  <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 rounded-lg transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-[#e38f00]/10 shadow-md' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 rounded-lg transition-all ${
                        viewMode === 'list' 
                          ? 'bg-[#e38f00]/10 shadow-md' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projets en grille - 80% width */}
        <section className="py-20 scroll-animate">
          <div className="w-full flex justify-center">
            <div className="w-4/5 max-w-7xl px-4">
              {viewMode === 'grid' ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="group"
                    >
                      <div className="relative transition-all duration-500 group-hover:-translate-y-4">
                        {/* Carte projet */}
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                          {/* Image du projet */}
                          <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00] via-[#d48500] to-[#c67b00]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-white text-center p-8">
                                <div className="text-4xl mb-4">{project.featured ? '⭐' : '🚀'}</div>
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="opacity-90">{project.client}</p>
                              </div>
                            </div>
                            
                            {/* Badge featured */}
                            {project.featured && (
                              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white text-xs font-bold rounded-full">
                                <Sparkles className="w-3 h-3 inline mr-1" />
                                Featured
                              </div>
                            )}
                            
                            {/* Overlay actions */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <Eye className="w-5 h-5 text-[#e38f00]" />
                              </button>
                              <button className="w-12 h-12 bg-[#e38f00] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <ExternalLink className="w-5 h-5 text-white" />
                              </button>
                              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 text-[#e38f00]" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Contenu */}
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h4 className="text-lg font-bold text-black">{project.title}</h4>
                                <div className="text-sm text-gray-700">{project.client}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-gray-600">Durée</div>
                                <div className="font-bold text-[#e38f00]">{project.stats.duration}</div>
                              </div>
                            </div>
                            
                            <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                              {project.description}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-[#e38f00]/10 text-[#e38f00] text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            {/* Stats */}
                            <div className="flex items-center justify-between text-sm text-gray-700">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                <span>{project.stats.team}</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 mr-1 text-[#e38f00]" />
                                <span>{project.stats.satisfaction}</span>
                              </div>
                              <button className="text-[#e38f00] hover:text-[#d48500] font-semibold flex items-center group">
                                <span>Voir le cas</span>
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Vue liste */
                <div className="space-y-6">
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Image */}
                        <div className="lg:w-1/3">
                          <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-[#e38f00] via-[#d48500] to-[#c67b00]">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-white text-center p-6">
                                <div className="text-3xl mb-3">{project.featured ? '⭐' : '💼'}</div>
                                <div className="font-bold text-lg">{project.category.toUpperCase()}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Contenu */}
                        <div className="lg:w-2/3">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                {project.featured && (
                                  <span className="px-3 py-1 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white text-xs font-bold rounded-full">
                                    Featured
                                  </span>
                                )}
                                <span className="text-sm text-gray-700">{project.client}</span>
                              </div>
                              <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                              <p className="text-gray-700">{project.description}</p>
                            </div>
                            <button className="hidden lg:flex w-12 h-12 bg-[#e38f00] rounded-full items-center justify-center hover:scale-110 transition-transform">
                              <ExternalLink className="w-5 h-5 text-white" />
                            </button>
                          </div>
                          
                          <div className="space-y-4">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1.5 bg-[#e38f00]/10 text-[#e38f00] text-sm rounded-lg flex items-center"
                                >
                                  <Zap className="w-3 h-3 mr-1" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            {/* Stats détaillées */}
                            <div className="grid grid-cols-3 gap-4">
                              <div className="bg-[#e38f00]/10 rounded-xl p-3">
                                <div className="flex items-center text-sm text-[#e38f00] mb-1">
                                  <Clock className="w-4 h-4 mr-2" />
                                  Durée
                                </div>
                                <div className="font-bold text-black">{project.stats.duration}</div>
                              </div>
                              <div className="bg-[#e38f00]/10 rounded-xl p-3">
                                <div className="flex items-center text-sm text-[#e38f00] mb-1">
                                  <Users className="w-4 h-4 mr-2" />
                                  Équipe
                                </div>
                                <div className="font-bold text-black">{project.stats.team}</div>
                              </div>
                              <div className="bg-[#e38f00]/10 rounded-xl p-3">
                                <div className="flex items-center text-sm text-[#e38f00] mb-1">
                                  <Star className="w-4 h-4 mr-2 text-[#e38f00]" />
                                  Satisfaction
                                </div>
                                <div className="font-bold text-black">{project.stats.satisfaction}</div>
                              </div>
                            </div>
                            
                            {/* Actions */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <button className="text-[#e38f00] hover:text-[#d48500] font-semibold flex items-center group">
                                <span>Étude de cas complète</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </button>
                              <div className="flex items-center space-x-3">
                                <button className="p-2 hover:bg-[#e38f00]/10 rounded-lg">
                                  <Heart className="w-5 h-5 text-[#e38f00]" />
                                </button>
                                <button className="p-2 hover:bg-[#e38f00]/10 rounded-lg">
                                  <Share2 className="w-5 h-5 text-[#e38f00]" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-lg font-semibold ${
                        page === 1
                          ? 'bg-[#e38f00] text-white'
                          : 'bg-white text-black hover:bg-[#e38f00]/10 border border-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="w-10 h-10 rounded-lg bg-white text-black hover:bg-[#e38f00]/10 border border-gray-200">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Stack - 80% width */}
        <section className="py-20 bg-white scroll-animate">
          <div className="w-full flex justify-center">
            <div className="w-4/5 max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-[#e38f00]/10 text-[#e38f00] rounded-full text-sm font-bold mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  Notre Stack Technique
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                  Technologies
                  <span className="text-[#e38f00] ml-2">Maîtrisées</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Nous exploitons les technologies les plus avancées pour garantir performance, sécurité et évolutivité
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
                  >
                    <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform">
                      {tech.icon}
                    </div>
                    <div className="font-bold text-black mb-2">{tech.name}</div>
                    <div className="text-sm text-gray-700">
                      {tech.count} projets
                    </div>
                    <div className="mt-4 h-2 bg-[#e38f00]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#e38f00] to-[#d48500] rounded-full"
                        style={{ width: `${(tech.count / 12) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Projet - 80% width */}
        <section className="py-20 relative overflow-hidden scroll-animate">
          <div className="absolute inset-0 bg-[#e38f00]/5"></div>
          <div className="w-full flex justify-center">
            <div className="w-4/5 max-w-7xl px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white p-12 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="inline-flex items-center px-6 py-3 bg-[#e38f00]/10 rounded-full mb-8">
                    <Sparkles className="w-5 h-5 mr-2 text-[#e38f00]" />
                    <span className="font-bold text-[#e38f00]">Votre Projet Suivant</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-black mb-8">
                    <span className="text-black">
                      Prêt à lancer votre
                    </span>
                    {' '}
                    <span className="text-[#e38f00]">
                      prochain grand projet ?
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                    Inspirez-vous de nos réalisations et laissez-nous transformer vos idées en succès digitaux.
                    Discutons de votre vision dès aujourd'hui.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href="/contact?type=project"
                      className="inline-flex items-center justify-center px-8 py-3 bg-[#e38f00] text-white font-semibold rounded-lg hover:bg-[#d48500] transition-all shadow-lg hover:shadow-xl group"
                    >
                      <Zap className="w-6 h-6 mr-3" />
                      Démarrer un projet
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#e38f00] text-[#e38f00] font-semibold rounded-lg hover:bg-[#e38f00]/10 transition-all group"
                    >
                      <FolderKanban className="w-6 h-6 mr-3" />
                      Explorer nos services
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className="mt-12 flex items-center justify-center text-gray-600 text-sm">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#e38f00]" />
                    <span>Consultation gratuite • Devis personnalisé • Prototype en 48h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}