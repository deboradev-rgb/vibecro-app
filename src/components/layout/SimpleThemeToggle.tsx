// frontend/src/components/layout/SimpleThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function SimpleThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Initialisation
  useEffect(() => {
    // Ne rien faire côté serveur
    if (typeof window === 'undefined') return;

    try {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
      
      // Appliquer immédiatement
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
    
    setMounted(true);
  }, []);

  // Gérer le changement de thème
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    try {
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
    
    // Basculer la classe
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    console.log('Theme changed to:', newTheme);
  };

  // Pendant le SSR, retourner un placeholder
  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-white 
                 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl
                 border border-gray-200 dark:border-gray-700 flex items-center justify-center
                 transition-all duration-300 hover:scale-105 active:scale-95
                 group"
      aria-label={`Mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
      title={`Basculer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 group-hover:rotate-180 transition-transform duration-500" />
      )}
    </button>
  );
}