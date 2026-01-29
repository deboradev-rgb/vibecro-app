// frontend/src/components/ThemeWrapper.tsx
'use client';

import { ReactNode, useEffect } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  useEffect(() => {
    // Synchroniser le thème avec l'HTML
    const syncTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Ajouter la classe dark à tous les enfants si nécessaire
      if (isDark) {
        document.body.classList.add('dark-mode-active');
        document.body.setAttribute('data-theme', 'dark');
        
        // Forcer les couleurs sombres sur les éléments principaux
        const forceDarkElements = document.querySelectorAll(
          '.bg-white, .bg-gray-50, .bg-gray-100, .text-gray-900, .text-gray-800, .text-gray-700'
        );
        
        forceDarkElements.forEach(el => {
          el.classList.add('dark');
        });
      } else {
        document.body.classList.remove('dark-mode-active');
        document.body.setAttribute('data-theme', 'light');
      }
    };

    // Exécuter immédiatement et observer les changements
    syncTheme();
    
    // Observer les changements de classe sur l'html
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      {children}
    </div>
  );
}