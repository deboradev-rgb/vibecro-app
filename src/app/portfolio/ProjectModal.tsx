// frontend/src/components/portfolio/ProjectModal.tsx
'use client';

import { X, ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ProjectModal({ project, isOpen, onClose, onNext, onPrev }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-gray-600">{project.client}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Image principale */}
          <div className="relative h-96 bg-gradient-to-br from-primary-500 to-cyan-500">
            {/* Contenu de l'image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-xl opacity-90">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Détails */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Informations principales */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4">À propos du projet</h3>
                <p className="text-gray-600 mb-6">
                  {project.fullDescription || project.description}
                </p>

                <h4 className="text-lg font-bold mb-3">Défis & Solutions</h4>
                <ul className="space-y-3 mb-8">
                  {project.challenges?.map((challenge: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-bold mb-3">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag: string, idx: number) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-cyan-50 text-primary-700 rounded-lg font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats & Infos */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">Chiffres clés</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Durée du projet</div>
                      <div className="text-xl font-bold text-gray-900">{project.stats.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Taille de l'équipe</div>
                      <div className="text-xl font-bold text-gray-900">{project.stats.team}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Satisfaction client</div>
                      <div className="text-xl font-bold text-gray-900">{project.stats.satisfaction}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-bold mb-4">Résultats</h4>
                  <ul className="space-y-3">
                    {project.results?.map((result: string, idx: number) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visiter le site
                  </button>
                  <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Github className="w-5 h-5 mr-2" />
                    Code source
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}