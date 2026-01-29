// frontend/src/components/ThemeManager.tsx
'use client';

import { useEffect } from 'react';

export default function ThemeManager() {
  useEffect(() => {
    // Cette fonction s'exécute sur TOUTES les pages
    const updateTheme = () => {
      const savedTheme = localStorage.getItem('vibecro-theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      let theme = savedTheme;
      if (!theme) {
        theme = systemPrefersDark ? 'dark' : 'light';
      }
      
      // Appliquer à TOUT le document
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        // Forcer le background sur tous les éléments
        document.body.classList.add('dark:bg-gray-950');
        document.body.style.backgroundColor = '#0a0a0a';
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark:bg-gray-950');
        document.body.style.backgroundColor = '#ffffff';
      }
      
      console.log('ThemeManager: Thème appliqué:', theme);
    };
    
    // Exécuter immédiatement
    updateTheme();
    
    // Écouter les changements de thème système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateTheme);
    
    return () => mediaQuery.removeEventListener('change', updateTheme);
  }, []);

  // Ce composant ne rend rien, il ne fait que gérer le thème
  return null;
}