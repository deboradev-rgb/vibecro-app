// src/pages/AllProjects.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Loader2, Image as ImageIcon } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://newvibecroapi.vibecro.com/api';

interface Project {
  id: number;
  title?: string;
  technologies?: string | null;
  image_url?: string | null;
  link?: string | null;
  status?: 'en_cours' | 'realise';
  description?: string;
  category?: 'web' | 'mobile' | 'autre'; // ← on va utiliser ça pour grouper
  created_at?: string;
}

export default function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/projects`);
        let projectList = Array.isArray(response.data?.data) ? response.data.data : response.data || [];

        // Tri par date (plus récent en premier)
        projectList.sort((a: Project, b: Project) => {
          const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
          const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
          return dateB - dateA;
        });

        setProjects(projectList);
      } catch (err) {
        setError('Impossible de charger les projets');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Grouper les projets par catégorie
  const groupedProjects = {
    web: projects.filter(p => p.category === 'web' || p.title?.toLowerCase().includes('web')),
    mobile: projects.filter(p => p.category === 'mobile' || p.title?.toLowerCase().includes('mobile')),
    enCours: projects.filter(p => p.status === 'en_cours'),
    realises: projects.filter(p => p.status === 'realise'),
    autres: projects.filter(p => 
      !['web', 'mobile'].includes(p.category || '') && 
      !['en_cours', 'realise'].includes(p.status || '')
    ),
  };

  const categories = [
    { key: 'web', title: 'Applications Web', icon: '🌐' },
    { key: 'mobile', title: 'Applications Mobiles', icon: '📱' },
    { key: 'enCours', title: 'Projets en cours', icon: '⚙️' },
    { key: 'realises', title: 'Projets réalisés', icon: '🏆' },
    { key: 'autres', title: 'Autres réalisations', icon: '✨' },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black pt-24 pb-20">
      <div className="w-4/5 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Toutes nos <span className="text-[#e38f00]">réalisations</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos projets classés par catégorie et par statut
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-32">
            <Loader2 className="w-16 h-16 animate-spin text-[#e38f00]" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-600 font-medium">
            {error}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 text-gray-500 italic">
            Aucun projet disponible pour le moment
          </div>
        ) : (
          <div className="space-y-20">
            {categories.map((cat) => {
              const projectsInCat = groupedProjects[cat.key as keyof typeof groupedProjects] || [];
              if (projectsInCat.length === 0) return null;

              return (
                <motion.section
                  key={cat.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                    <span className="text-5xl">{cat.icon}</span>
                    {cat.title}
                    <span className="text-2xl text-gray-500">({projectsInCat.length})</span>
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsInCat.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-[#e38f00]/50 transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                          {project.image_url ? (
                            <img
                              src={project.image_url}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                              <ImageIcon className="w-16 h-16" />
                            </div>
                          )}
                        </div>

                        {/* Contenu */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                            {project.title || 'Projet sans titre'}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4 min-h-[6rem]">
                            {project.description || 'Aucune description disponible.'}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies?.split(',').map((tech, j) => (
                              <span
                                key={j}
                                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                              >
                                {tech.trim()}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                              project.status === 'realise' 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                                : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                            }`}>
                              {project.status === 'realise' ? 'Réalisé' : 'En cours'}
                            </span>

                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[#e38f00] font-medium hover:gap-3 transition-all"
                              >
                                Voir le projet
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}