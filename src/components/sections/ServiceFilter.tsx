'use client';

// src/components/sections/ServiceFilter.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Search, Filter } from 'lucide-react';

interface ServiceFilterProps {
  categories?: string[];
  onFilterChange?: (filters: { category: string; search: string }) => void;
  className?: string;
}

const ServiceFilter = ({
  categories = ['Tous', 'IoT', 'RH & IA', 'Clientele', 'Conciergerie', 'Web', 'Consulting'],
  onFilterChange,
  className = ''
}: ServiceFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onFilterChange?.({ category, search: searchTerm });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange?.({ category: selectedCategory, search: value });
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher un service..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => handleCategoryClick(category)}
            className="flex items-center gap-2"
          >
            {category === 'Tous' && <Filter className="w-4 h-4" />}
            {category}
          </Button>
        ))}
      </div>

      {/* Info sur les filtres actifs */}
      {(selectedCategory !== 'Tous' || searchTerm) && (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Filtres actifs :</span>
            {selectedCategory !== 'Tous' && (
              <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                {selectedCategory}
              </span>
            )}
            {searchTerm && (
              <span className="px-2 py-1 bg-secondary-100 text-secondary-800 rounded-full text-xs">
                Recherche: "{searchTerm}"
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedCategory('Tous');
              setSearchTerm('');
              onFilterChange?.({ category: 'Tous', search: '' });
            }}
          >
            Réinitialiser
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceFilter;