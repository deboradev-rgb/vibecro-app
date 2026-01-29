// frontend/src/lib/laravel/client.ts

// Interface pour les données de fallback (en attendant le backend)
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  icon: string;
  color: string;
  features: string[];
  category?: string;
  meta_title?: string;
  meta_description?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  client: string;
  industry: string;
  technologies: string[];
  results: Array<{ metric: string; label: string }>;
  image_url?: string;
  demo_url?: string;
  github_url?: string;
  category: string;
  is_featured: boolean;
}

export interface ContactRequest {
  type: 'quote' | 'support' | 'partner' | 'career';
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  priority?: string;
  partner_type?: string;
  company_size?: string;
  position?: string;
  linkedin?: string;
  portfolio?: string;
  consent: boolean;
}

// Données de fallback en attendant l'API Laravel
const fallbackServices: Service[] = [
  {
    id: 'iot-tracking',
    title: 'IOT & Tracking',
    slug: 'iot-tracking',
    description: 'Suivez en temps réel vos véhicules, colis, missions ou personnel grâce à notre solution Vibecro Tracking.',
    icon: '📡',
    color: 'blue',
    features: ['Géolocalisation temps réel', 'Alertes intelligentes', 'Dashboard analytics', 'API d\'intégration'],
    category: 'iot'
  },
  {
    id: 'rh-ia-solutions',
    title: 'Solution RH-IA',
    slug: 'rh-ia-solutions',
    description: 'Plateforme intelligente qui automatise et améliore vos processus RH grâce à l\'IA.',
    icon: '🤖',
    color: 'purple',
    features: ['Recrutement automatisé', 'Analyse performances', 'Gestion talents', 'Prédiction besoins'],
    category: 'ia'
  },
  {
    id: 'clientele-plus',
    title: 'Clientèle Plus',
    slug: 'clientele-plus',
    description: 'Solution numérique sur-mesure pour optimiser la gestion et l\'expérience client.',
    icon: '👥',
    color: 'green',
    features: ['CRM personnalisé', 'Analytics client', 'Marketing automation', 'Support multi-canal'],
    category: 'digital'
  },
  {
    id: 'conciergerie-touristique',
    title: 'Conciergerie Touristique & Numérique',
    slug: 'conciergerie-touristique',
    description: 'Expérience de voyage haut de gamme avec solutions de conciergerie numérique.',
    icon: '🏨',
    color: 'orange',
    features: ['Réservations VIP', 'Itinéraires sur-mesure', 'Assistance 24/7', 'Expériences exclusives'],
    category: 'tourisme'
  },
  {
    id: 'developpement-web',
    title: 'Développement Web & Mobile',
    slug: 'developpement-web',
    description: 'Applications modernes et performantes pour le web et les mobiles.',
    icon: '💻',
    color: 'indigo',
    features: ['React/Next.js', 'Applications natives', 'PWA', 'API REST', 'Performance optimale'],
    category: 'tech'
  },
  {
    id: 'consulting-digital',
    title: 'Stratégie Digitale & Conseil',
    slug: 'consulting-digital',
    description: 'Accompagnement stratégique pour votre transformation digitale.',
    icon: '🎯',
    color: 'red',
    features: ['Audit digital', 'Roadmap stratégique', 'Formation équipes', 'Optimisation processus'],
    category: 'consulting'
  }
];

// Fonctions API (mode simulation jusqu'à ce que le backend Laravel soit prêt)
export async function getServices(params?: {
  category?: string;
  featured?: boolean;
}): Promise<Service[]> {
  // Simulation de délai réseau
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let services = [...fallbackServices];
  
  if (params?.category) {
    services = services.filter(service => service.category === params.category);
  }
  
  if (params?.featured) {
    services = services.slice(0, 3); // Retourne seulement 3 services pour "featured"
  }
  
  return services;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const service = fallbackServices.find(s => s.slug === slug);
  return service || null;
}

export async function getFeaturedServices(): Promise<Service[]> {
  return getServices({ featured: true });
}

export async function getProjects(params?: {
  category?: string;
  featured?: boolean;
}): Promise<{ data: Project[]; meta: any }> {
  await new Promise(resolve => setTimeout(resolve, 400));
  
  // Données de fallback pour les projets
  const fallbackProjects: Project[] = [
    {
      id: '1',
      title: 'Plateforme IoT pour Transport X',
      slug: 'plateforme-iot-transport-x',
      description: 'Solution de tracking temps réel pour une flotte de 200 véhicules',
      client: 'Transport X',
      industry: 'Logistique',
      technologies: ['React', 'Node.js', 'AWS IoT', 'MongoDB'],
      results: [
        { metric: '-35%', label: 'Coûts logistiques' },
        { metric: '+50%', label: 'Efficacité' }
      ],
      category: 'iot',
      is_featured: true
    },
    {
      id: '2',
      title: 'Solution RH-IA pour Groupe Y',
      slug: 'solution-rh-ia-groupe-y',
      description: 'Plateforme d\'IA pour automatisation du recrutement',
      client: 'Groupe Y',
      industry: 'Ressources Humaines',
      technologies: ['Python', 'React', 'TensorFlow', 'FastAPI'],
      results: [
        { metric: '-60%', label: 'Temps de recrutement' },
        { metric: '+40%', label: 'Qualité des candidats' }
      ],
      category: 'rh-ia',
      is_featured: true
    }
  ];
  
  let projects = [...fallbackProjects];
  
  if (params?.category) {
    projects = projects.filter(project => project.category === params.category);
  }
  
  if (params?.featured) {
    projects = projects.filter(project => project.is_featured);
  }
  
  return {
    data: projects,
    meta: {
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: projects.length
    }
  };
}

export async function submitContactRequest(data: ContactRequest): Promise<{ message: string }> {
  // Simulation d'envoi au backend
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Contact form submitted:', data);
  
  return {
    message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
  };
}

export async function getSiteStats(): Promise<{
  clients: number;
  quality: number;
  projects: number;
  countries: number;
}> {
  return {
    clients: 50000,
    quality: 95,
    projects: 10000,
    countries: 15
  };
}

// Fonction pour basculer entre mode simulation et mode réel
const API_MODE = 'simulation'; // 'simulation' ou 'production'

export function setApiMode(mode: 'simulation' | 'production') {
  console.log(`API mode set to: ${mode}`);
}