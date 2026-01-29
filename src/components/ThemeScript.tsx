// frontend/src/components/ThemeScript.tsx
'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    // Fonction pour basculer le thème
    const toggleTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
      
      localStorage.setItem('vibecro-theme', newTheme);
    };

    // Exposer la fonction globalement pour les boutons de thème
    (window as any).toggleVibecroTheme = toggleTheme;
  }, []);

  return null;
}