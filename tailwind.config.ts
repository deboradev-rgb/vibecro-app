// frontend/tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Seulement 3 couleurs
        primary: {
          50: '#fef6e6',
          100: '#fdeccc',
          200: '#fbd999',
          300: '#f9c666',
          400: '#f7b333',
          500: '#e38f00',
          600: '#cc8100',
          700: '#b67300',
          800: '#9f6600',
          900: '#885800',
        },
        // Blanc avec dégradés
        white: {
          DEFAULT: '#ffffff',
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#f2f2f2',
          300: '#e6e6e6',
          400: '#d9d9d9',
          500: '#cccccc',
        },
        // Noir avec dégradés
        black: {
          DEFAULT: '#000000',
          50: '#1a1a1a',
          100: '#333333',
          200: '#4d4d4d',
          300: '#666666',
          400: '#808080',
          500: '#999999',
        },
        // Ajout des couleurs pour les gradients du formulaire
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        purple: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        indigo: {
          900: '#312e81',
        },
        red: {
          500: '#ef4444',
        },
        green: {
          400: '#34d399',
        },
        slate: {
          900: '#0f172a',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float-delayed': 'float 6s ease-in-out infinite 1s',
        'blob': 'blob 10s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      boxShadow: {
        'primary': '0 10px 30px rgba(227, 143, 0, 0.3)',
        'primary-lg': '0 20px 60px rgba(227, 143, 0, 0.4)',
        'primary-xl': '0 25px 80px rgba(227, 143, 0, 0.5)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 16px 64px rgba(31, 38, 135, 0.45)',
        'neumorphic': '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
        'neumorphic-inset': 'inset 5px 5px 10px #d9d9d9, inset -5px -5px 10px #ffffff',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'gradient-primary': 'linear-gradient(135deg, #e38f00 0%, #f7b333 100%)',
        'gradient-primary-dark': 'linear-gradient(135deg, #b67300 0%, #e38f00 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-blue-purple-dark': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
        'all': 'all',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '102': '1.02',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      blur: {
        '3xl': '64px',
        '4xl': '80px',
      },
    },
    
  },
  plugins: [
    // Supprimez le plugin @tailwindcss/forms qui n'est pas installé
    // et gardez seulement la fonction personnalisée
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.glass-effect': {
          background: 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-effect-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.2)',
        },
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #e38f00 0%, #f7b333 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-blue-purple': {
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.clip-path-hexagon': {
          'clip-path': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
        '.clip-path-diamond': {
          'clip-path': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}


export default config