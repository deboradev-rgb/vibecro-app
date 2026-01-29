// frontend/src/app/layout.tsx (extrait corrigé)
<head>
  {/* ... vos autres meta tags ... */}
  
  <style
    dangerouslySetInnerHTML={{
      __html: `
        /* Dégradés avec la couleur primaire #e38f00 */
        .text-gradient-primary {
          background: linear-gradient(135deg, #e38f00 0%, #f7b333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #e38f00 0%, #f7b333 100%);
        }
        
        .bg-gradient-to-r-primary {
          background: linear-gradient(to right, #e38f00, #d48500, #c67b00);
        }
        
        /* Animation au scroll */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Animation de spin lente */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        /* Pattern de grille pour l'arrière-plan */
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e38f00' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        /* Amélioration de l'accessibilité */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .sr-only:focus {
          position: fixed;
          top: 4px;
          left: 4px;
          width: auto;
          height: auto;
          padding: 0.75rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
          background-color: #e38f00;
          color: white;
          z-index: 9999;
        }

        /* Responsive Typography */
        @media (max-width: 640px) {
          h1 { font-size: 1.5rem; }
          h2 { font-size: 1.25rem; }
          h3 { font-size: 1.125rem; }
          p { font-size: 0.875rem; }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          h1 { font-size: 1.875rem; }
          h2 { font-size: 1.5rem; }
          h3 { font-size: 1.25rem; }
          p { font-size: 0.9375rem; }
        }

        @media (min-width: 769px) {
          h1 { font-size: 2.25rem; }
          h2 { font-size: 1.875rem; }
          h3 { font-size: 1.5rem; }
          p { font-size: 1rem; }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `,
    }}
  />
</head>