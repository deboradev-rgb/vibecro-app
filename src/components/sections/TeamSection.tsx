


import { useState } from 'react';

import { Linkedin, Mail, Globe, Award } from 'lucide-react';



// ... changez tous les href en to partout dans le fichier

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  linkedin: string;
  expertise: string[];
}

interface TeamSectionProps {
  preview?: boolean;
}

const TeamSection = ({ preview = false }: TeamSectionProps) => {
  const [activeDepartment, setActiveDepartment] = useState('all');
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alexandre Martin',
      role: 'CEO & Fondateur',
      department: 'leadership',
      bio: 'Expert en transformation digitale avec 15 ans d\'expérience dans le conseil technologique.',
      image: '/images/team/alexandre-martin.jpg',
      linkedin: 'https://linkedin.com/in/alexandre-martin',
      expertise: ['Stratégie', 'IoT', 'Leadership']
    },
    {
      id: 2,
      name: 'Sophie Dubois',
      role: 'CTO',
      department: 'technology',
      bio: 'Spécialiste IoT et architectures cloud, ancienne ingénieure chez Google.',
      image: '/images/team/sophie-dubois.jpg',
      linkedin: 'https://linkedin.com/in/sophie-dubois',
      expertise: ['IoT', 'Cloud', 'Architecture']
    },
    {
      id: 3,
      name: 'Thomas Leroy',
      role: 'Directeur RH-IA',
      department: 'ai',
      bio: 'PhD en Intelligence Artificielle appliquée aux RH, auteur de plusieurs publications scientifiques.',
      image: '/images/team/thomas-leroy.jpg',
      linkedin: 'https://linkedin.com/in/thomas-leroy',
      expertise: ['IA', 'Machine Learning', 'Data Science']
    },
    {
      id: 4,
      name: 'Julie Petit',
      role: 'Lead Designer UX/UI',
      department: 'design',
      bio: 'Designer primée avec expertise en expérience utilisateur pour applications complexes.',
      image: '/images/team/julie-petit.jpg',
      linkedin: 'https://linkedin.com/in/julie-petit',
      expertise: ['UX Design', 'UI Design', 'Design System']
    },
    {
      id: 5,
      name: 'Marc Bernard',
      role: 'Responsable IoT',
      department: 'iot',
      bio: 'Ingénieur en télécommunications et systèmes embarqués avec 10 ans d\'expérience.',
      image: '/images/team/marc-bernard.jpg',
      linkedin: 'https://linkedin.com/in/marc-bernard',
      expertise: ['IoT', 'Embedded Systems', 'Telecom']
    },
    {
      id: 6,
      name: 'Claire Moreau',
      role: 'Chef de Projet Digital',
      department: 'project',
      bio: 'Gestion de projets complexes multi-technologies avec certification PMP.',
      image: '/images/team/claire-moreau.jpg',
      linkedin: 'https://linkedin.com/in/claire-moreau',
      expertise: ['Project Management', 'Agile', 'Scrum']
    }
  ];

  const departments = [
    { id: 'all', label: 'Toute l\'équipe' },
    { id: 'leadership', label: 'Direction' },
    { id: 'technology', label: 'Technologie' },
    { id: 'ai', label: 'Intelligence Artificielle' },
    { id: 'design', label: 'Design' },
    { id: 'iot', label: 'IoT' },
    { id: 'project', label: 'Gestion de projet' }
  ];

  const filteredMembers = preview 
    ? teamMembers.slice(0, 4)
    : activeDepartment === 'all'
      ? teamMembers
      : teamMembers.filter(member => member.department === activeDepartment);

  return (
    <div>
      {!preview && (
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDepartment === dept.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div 
            key={member.id} 
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
              </div>
              
              {/* Department badge */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full">
                  {member.department.toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{member.bio}</p>
              </div>
              
              {/* Expertise */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 2).map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 2 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{member.expertise.length - 2}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button 
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label={`Envoyer un email à ${member.name}`}
                >
                  <Mail className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                  aria-label={`Voir le profil de ${member.name}`}
                >
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {preview && teamMembers.length > 4 && (
        <div className="text-center mt-8">
          <div className="inline-flex items-center text-gray-500 text-sm">
            <div className="flex -space-x-2 mr-3">
              {teamMembers.slice(4, 7).map((member, index) => (
                <div 
                  key={member.id}
                  className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-2 border-white"
                  style={{ zIndex: 3 - index }}
                />
              ))}
            </div>
            <span>Et {teamMembers.length - 4} autres experts</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;