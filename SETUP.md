# 🚀 VIBECRO - Migration Next.js → React Vite

Bienvenue! Votre application a été migrée de **Next.js** vers **React + Vite**. 

## ✨ Ce qui a changé

### Framework
- ❌ Next.js 16.1.2
- ✅ React 19.2.0 + Vite 5.4.10

### Routing
- ❌ Next.js App Router (basé sur la structure de fichiers)
- ✅ React Router v6 (routes centralisées dans `App.tsx`)

### Navigation
- ❌ `Link href="/path"`
- ✅ `Link to="/path"`

### Theme Management
- ❌ next-themes
- ✅ Context API personnalisée

## 🎯 Installation rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm run dev

# 3. Accéder à http://localhost:5173
```

## 📦 Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement (port 3000)
npm run build    # Construire pour la production
npm run preview  # Prévisualiser la build production
npm run lint     # Vérifier le code avec ESLint
```

## 📂 Structure du projet

```
src/
├── main.tsx                      # Point d'entrée React
├── App.tsx                       # App principale avec routing
├── index.css                     # Styles globaux
├── App.css                       # Styles de l'app
│
├── pages/                        # 📄 Pages principales
│   ├── HomePage.tsx              # Page d'accueil
│   ├── AboutPage.tsx             # À propos
│   ├── ServicesPage.tsx          # Services
│   ├── PortfolioPage.tsx         # Portfolio
│   ├── ContactPage.tsx           # Contact
│   └── legal/
│       ├── PrivacyPage.tsx       # Politique de confidentialité
│       ├── TermsPage.tsx         # Conditions d'utilisation
│       └── CookiesPage.tsx       # Gestion des cookies
│
├── components/                   # 🧩 Composants réutilisables
│   ├── layout/
│   │   ├── Header.tsx            # En-tête / Navigation
│   │   ├── Footer.tsx            # Pied de page
│   │   └── GlobalThemeToggle.tsx  # Commutateur de thème
│   │
│   ├── providers/
│   │   └── ThemeWrapper.tsx       # Provider de thème
│   │
│   ├── sections/
│   ├── services/
│   ├── ui/
│   └── ...
│
├── assets/                       # 🖼️ Images et ressources
├── hooks/                        # 🪝 Hooks personnalisés
├── lib/
│   ├── laravel/                  # Client API Laravel
│   └── utils/
│       └── cn.ts                 # Utilité classNames
└── types/                        # 📋 Types TypeScript

index.html                        # Fichier HTML d'entrée
vite.config.ts                   # Configuration Vite
tsconfig.json                    # Configuration TypeScript
```

## 🔄 Conversion des components Next.js

### Avant (Next.js)
```tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MyComponent() {
  const pathname = usePathname();
  return <Link href="/about">À propos</Link>;
}
```

### Après (React + Vite)
```tsx
import { Link, useLocation } from 'react-router-dom';

export default function MyComponent() {
  const location = useLocation();
  const pathname = location.pathname;
  return <Link to="/about">À propos</Link>;
}
```

## 🎨 Gestion du thème

### Utiliser le thème dans un composant
```tsx
import { useTheme } from '@/components/providers/ThemeWrapper';

export default function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Mode actuel: {isDark ? 'Sombre' : 'Clair'}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}
```

## 📝 Métadonnées SEO

### Avant (Next.js)
```tsx
export const metadata: Metadata = {
  title: 'Ma page',
  description: 'Description'
};
```

### Après (React Router)
Pour les métadonnées dynamiques, installez `react-helmet-async`:
```bash
npm install react-helmet-async
```

```tsx
import { Helmet } from 'react-helmet-async';

export default function MyPage() {
  return (
    <>
      <Helmet>
        <title>Ma page</title>
        <meta name="description" content="Description" />
      </Helmet>
      <h1>Contenu</h1>
    </>
  );
}
```

## 🔗 Routes disponibles

| Route | Page | Composant |
|-------|------|-----------|
| `/` | Accueil | `HomePage.tsx` |
| `/about` | À propos | `AboutPage.tsx` |
| `/services` | Services | `ServicesPage.tsx` |
| `/services/:slug` | Service détail | `ServicesPage.tsx` |
| `/portfolio` | Portfolio | `PortfolioPage.tsx` |
| `/portfolio/:slug` | Projet détail | `PortfolioPage.tsx` |
| `/contact` | Contact | `ContactPage.tsx` |
| `/legal/privacy` | Confidentialité | `PrivacyPage.tsx` |
| `/legal/terms` | Conditions | `TermsPage.tsx` |
| `/legal/cookies` | Cookies | `CookiesPage.tsx` |

## 🚀 Déploiement

### Build pour production
```bash
npm run build
```

Cela crée un dossier `dist/` avec les fichiers optimisés.

### Plateformes supportées
- **Vercel**: Supporté natif (détection Vite automatique)
- **Netlify**: Configuration simple
- **GitHub Pages**: Nécessite configuration
- **Serveur statique**: Juste servir les fichiers du dossier `dist/`

## 🔧 Configuration Vite

Le fichier `vite.config.ts` inclut:
- ✅ Support React
- ✅ Alias `@` pour les imports
- ✅ Port de dev: 3000
- ✅ Source maps en développement

## 📚 Ressources utiles

- [Documentation Vite](https://vitejs.dev)
- [React Router v6](https://reactrouter.com)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## ❓ FAQ

**Q: Pourquoi Vite au lieu de Next.js?**
A: Vite offre un démarrage plus rapide, un HMR (Hot Module Replacement) plus rapide, et est plus léger pour les applications SPA.

**Q: Comment gérer les variables d'environnement?**
A: Les variables doivent être préfixées avec `VITE_`. Voir `.env` et `.env.local`.

**Q: Comment ajouter de nouvelles pages?**
A: Créer un fichier dans `src/pages/`, puis ajouter la route dans `App.tsx`.

**Q: Comment déployer sur Vercel?**
A: Vercel détecte automatiquement Vite et configure la build.

## 🐛 Troubleshooting

### Port 3000 déjà en utilisation
```bash
npm run dev -- --port 3001
```

### CSS Tailwind non chargé
- Vérifiez que `tailwindcss` est dans `devDependencies`
- Exécutez `npm install`
- Redémarrez le serveur: `npm run dev`

### Routes ne fonctionnent pas
- Vérifiez que les routes sont définies dans `App.tsx`
- Vérifiez les chemins dans `Link to="/path"`

## 📞 Support

Pour des questions ou problèmes:
1. Consultez la [documentation Vite](https://vitejs.dev)
2. Consultez la [documentation React Router](https://reactrouter.com)
3. Vérifiez les fichiers dans `MIGRATION.md`

---

**Bienvenue dans l'écosystème Vite + React! 🎉**
