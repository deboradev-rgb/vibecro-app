// frontend/src/components/ThemeWrapper.tsx
'use client';

import { ReactNode, useEffect } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  useEffect(() => {
    // S'assurer que le thème est appliqué à cette page
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
      // Forcer le thème sombre sur tous les enfants
      document.querySelectorAll('#main-content *').forEach(el => {
        el.classList.add('dark');
      });
    }
  }, []);

  return (
    <div className="dark:bg-gray-950 dark:text-gray-100">
      {children}
    </div>
  );
}