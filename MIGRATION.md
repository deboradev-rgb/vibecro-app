# Migration de Next.js vers Vite + React

## Résumé des changements

### ✅ Completed
1. **Configuration Vite** - `vite.config.ts` créé avec support React et alias `@`
2. **Index HTML** - Fichier d'entrée `index.html` créé
3. **Point d'entrée** - `src/main.tsx` créé avec React Root
4. **Routing** - React Router intégré (`BrowserRouter`, `Routes`, `Link`)
5. **Pages** - Toutes les pages créées dans `src/pages/`
  - HomePage.tsx
  - AboutPage.tsx
  - ServicesPage.tsx
  - PortfolioPage.tsx
  - ContactPage.tsx
  - Legal pages (Privacy, Terms, Cookies)
6. **Composants adaptés**
  - Header.tsx - Convertis imports Next.js vers React Router
  - Footer.tsx - Convertis imports Next.js vers React Router
  - ThemeProvider - Remplace next-themes
7. **Package.json** - Dépendances mises à jour
  - Ajout: vite, @vitejs/plugin-react, react-router-dom
  - Suppression: next, next-themes
8. **TypeScript** - tsconfig.json optimisé pour Vite

## 🚀 Démarrage du projet

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la build production
npm run preview
```

## 📁 Structure du projet

```
src/
├── main.tsx                 # Point d'entrée React
├── App.tsx                  # Composant principal avec routing
├── index.css                # Styles globaux
├── pages/                   # Pages principales
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── PortfolioPage.tsx
│   ├── ContactPage.tsx
│   └── legal/
│       ├── PrivacyPage.tsx
│       ├── TermsPage.tsx
│       └── CookiesPage.tsx
├── components/              # Composants réutilisables
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── providers/
│   │   └── ThemeWrapper.tsx # Theme Context Provider
│   └── ...
└── lib/
    └── utils/
        └── cn.ts            # Utility pour classer les noms

index.html                   # Fichier HTML d'entrée
vite.config.ts              # Configuration Vite
tsconfig.json               # Configuration TypeScript
```

## 🔄 Différences clés par rapport à Next.js

### Routing
- **Avant (Next.js)**: Structure de fichiers App Router automatique
- **Après (React Router)**: Routes définies dans `App.tsx`

### Pages
- **Avant**: Fichiers dans `src/app/` avec layouts automatiques
- **Après**: Composants dans `src/pages/` importés dans `App.tsx`

### Navigation
- **Avant**: `import Link from 'next/link'` + `href="/path"`
- **Après**: `import { Link } from 'react-router-dom'` + `to="/path"`

### Routing dynamique
- **Avant**: `[slug]/page.tsx`
- **Après**: `<Route path="/services/:slug" element={<ServicePage />} />`

### Theme
- **Avant**: `next-themes`
- **Après**: Context API personnalisée dans `ThemeProvider`

### Métadonnées
- **Avant**: Export `metadata` dans `layout.tsx`
- **Après**: Utiliser `<Helmet>` (à implémenter) ou gérer manuellement

## 📋 Prochaines étapes recommandées

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Tester le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Adapter les composants spécifiques**
   - Vérifier les imports de composants
   - Adapter les composants qui utilisent encore Next.js

4. **Implémenter les pages manquantes**
   - Remplir le contenu des pages stub (Services, Portfolio, etc.)

5. **Gérer les métadonnées**
   - Installer `react-helmet-async` pour gérer le `<head>`

6. **Tests et déploiement**
   - Tester tous les chemins de navigation
   - Builder et déployer: `npm run build` → dossier `dist/`

## ⚠️ Points d'attention

- Les composants doivent être sans `'use client'` (ce n'est pas Next.js)
- Utiliser `<Link to="/path" />` au lieu de `<Link href="/path" />`
- Utiliser `useLocation()` au lieu de `usePathname()`
- Pour les métadonnées dynamiques, utiliser `react-helmet-async`

## 🔗 Ressources utiles

- [Vite Documentation](https://vitejs.dev)
- [React Router v6](https://reactrouter.com)
- [Create React App to Vite Migration](https://vitejs.dev/guide/migration.html)
