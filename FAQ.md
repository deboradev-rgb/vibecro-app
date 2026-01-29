# ❓ FAQ - Questions Fréquemment Posées

## Questions Générales

### Q: Pourquoi passer de Next.js à Vite?
**R:** Vite offre plusieurs avantages:
- ⚡ Démarrage ultra-rapide (~300ms vs 4-6s avec Next.js)
- 🔥 Hot Module Replacement instantané (<100ms)
- 📦 Bundle plus léger
- 🎯 Configuration plus simple
- 🚀 Parfait pour les SPA (Single Page Applications)

### Q: Vais-je perdre des fonctionnalités?
**R:** Non, vous avez tous les outils dont vous avez besoin:
- ✅ React (même version 19)
- ✅ React Router pour le routing
- ✅ Tailwind CSS pour les styles
- ✅ Framer Motion pour les animations
- ✅ React Hook Form pour les formulaires
- ✅ Axios pour les requêtes API

### Q: Pourquoi pas Remix ou autre framework?
**R:** Vite + React est un excellent choix pour:
- ✅ Les applications front-end pures
- ✅ Les SPA (Single Page Applications)
- ✅ Les applications web modernes
- ✅ La flexibilité maximale

Si vous avez besoin de SSR (Server-Side Rendering), consultez Remix ou Next.js.

---

## Installation et Démarrage

### Q: Combien de temps prend l'installation?
**R:** Environ 2-5 minutes selon votre vitesse de connexion.
```bash
npm install  # ~2-5 minutes
npm run dev  # Lance le serveur
```

### Q: Que faire si npm install échoue?
**R:** Essayez:
```bash
# Option 1: Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install

# Option 2: Utiliser npm cache
npm cache clean --force
npm install

# Option 3: Utiliser yarn ou pnpm
yarn install
# ou
pnpm install
```

### Q: Comment changer le port de développement?
**R:** Le port par défaut est 3000 (ou 5173 avec Vite par défaut). Pour changer:
```bash
npm run dev -- --port 3001
```

Ou éditer `vite.config.ts`:
```ts
export default defineConfig({
  server: {
    port: 3001, // Changez ici
  },
})
```

---

## Navigation et Routing

### Q: Comment créer une nouvelle page?
**R:** En 3 étapes:

1. Créer le fichier page dans `src/pages/`:
```tsx
// src/pages/BlogPage.tsx
export default function BlogPage() {
  return <h1>Blog</h1>
}
```

2. Ajouter la route dans `src/App.tsx`:
```tsx
<Route path="/blog" element={<BlogPage />} />
```

3. Ajouter le lien dans le header:
```tsx
<Link to="/blog">Blog</Link>
```

### Q: Comment gérer les chemins dynamiques?
**R:** Utiliser les paramètres d'URL:

```tsx
// Route dans App.tsx
<Route path="/products/:id" element={<ProductDetail />} />

// Composant
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()
  return <h1>Produit {id}</h1>
}
```

### Q: Comment gérer les query parameters?
**R:** Utiliser `useSearchParams`:

```tsx
import { useSearchParams } from 'react-router-dom'

export default function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q') // /search?q=test → "test"
  
  return <h1>Résultats pour: {query}</h1>
}
```

### Q: Comment rediriger vers une autre page?
**R:** Utiliser `useNavigate`:

```tsx
import { useNavigate } from 'react-router-dom'

export default function MyComponent() {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/about')
  }
  
  return <button onClick={handleClick}>Aller à À propos</button>
}
```

---

## Styling et Thème

### Q: Comment utiliser Tailwind CSS?
**R:** C'est déjà configuré! Utilisez simplement les classes:
```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Du contenu
</div>
```

### Q: Comment faire des styles clair/sombre?
**R:** Utilisez les classes Tailwind `dark:`:
```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Contenu adaptatif
</div>
```

Pour l'accès programmatique:
```tsx
import { useTheme } from '@/components/providers/ThemeWrapper'

export default function MyComponent() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️ Clair' : '🌙 Sombre'}
    </button>
  )
}
```

### Q: Comment ajouter des styles personnalisés?
**R:** Plusieurs options:

Option 1: Inline styles
```tsx
<div style={{ backgroundColor: 'red', padding: '10px' }}>Contenu</div>
```

Option 2: Fichier CSS
```tsx
// src/components/MyComponent.css
.custom-style {
  background-color: red;
  padding: 10px;
}

// src/components/MyComponent.tsx
import './MyComponent.css'
<div className="custom-style">Contenu</div>
```

Option 3: Utility class personnalisée (Tailwind)
```ts
// tailwind.config.ts
extend: {
  colors: {
    custom: '#FF5733'
  }
}
```

### Q: Comment utiliser Framer Motion?
**R:** Déjà installé! Voici un exemple:
```tsx
import { motion } from 'framer-motion'

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Contenu animé
    </motion.div>
  )
}
```

---

## API et Données

### Q: Comment faire des requêtes API?
**R:** Utilisez axios (déjà installé):

```tsx
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function MyComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    axios.get('/api/data')
      .then(res => setData(res.data))
      .finally(() => setLoading(false))
  }, [])
  
  return <div>{loading ? 'Chargement...' : JSON.stringify(data)}</div>
}
```

### Q: Comment configurer l'URL de base de l'API?
**R:** Via des variables d'environnement:

1. Créer `.env.local`:
```
VITE_API_URL=http://localhost:8000
```

2. Utiliser dans le code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
```

3. Ou créer un client:
```ts
// src/lib/api.ts
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
```

### Q: Comment gérer l'authentification?
**R:** Exemple avec token JWT:

```tsx
// src/lib/api.ts
import axios from 'axios'

const token = localStorage.getItem('auth_token')

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})
```

---

## Formulaires

### Q: Comment utiliser React Hook Form?
**R:** C'est déjà installé! Voici un exemple:

```tsx
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
}

export default function ContactForm() {
  const { register, handleSubmit, watch } = useForm<FormData>()
  
  const onSubmit = (data: FormData) => {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} />
      <input {...register('email', { required: true })} type="email" />
      <button type="submit">Envoyer</button>
    </form>
  )
}
```

### Q: Comment valider les formulaires?
**R:** Utilisez les règles de validation:

```tsx
const { register } = useForm()

<input
  {...register('email', {
    required: 'Email requis',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email invalide'
    }
  })}
/>
```

---

## Performance et Build

### Q: Comment optimiser les performances?
**R:** Plusieurs approches:

1. **Code Splitting** (lazy loading):
```tsx
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))

<Suspense fallback={<div>Chargement...</div>}>
  <HomePage />
</Suspense>
```

2. **Images optimisées**:
```tsx
<img src="/image.jpg" alt="Description" loading="lazy" />
```

3. **Compression**:
```bash
npm run build  # Minifie automatiquement
```

### Q: Quelle est la taille du bundle?
**R:** Après `npm run build`, regardez la console pour les tailles. Généralement:
- Vue + Router: ~50KB (gzippé)
- App code: ~10-50KB (selon la complexité)

### Q: Comment déployer?
**R:** Plusieurs options:

**Vercel** (recommandé):
```bash
npm install -g vercel
vercel login
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

**Serveur statique**:
```bash
npm run build
# Servir le dossier `dist/` avec votre serveur web
```

---

## TypeScript

### Q: Comment utiliser TypeScript?
**R:** C'est déjà configuré! Voici un exemple:

```tsx
interface Props {
  name: string
  age: number
  onSubmit: (data: Props) => void
}

export default function MyComponent({ name, age, onSubmit }: Props) {
  return <div>{name}, {age} ans</div>
}
```

### Q: Comment typer les requêtes API?
**R:** Utilisez les génériques:

```tsx
interface User {
  id: number
  name: string
}

const [users, setUsers] = useState<User[]>([])

axios.get<User[]>('/api/users')
  .then(res => setUsers(res.data))
```

---

## Dépannage

### Q: Les styles Tailwind ne s'appliquent pas
**R:** Vérifiez:
1. Que `npm install` est terminé
2. Que le serveur est redémarré après `npm install`
3. Que le fichier est dans un chemin couvert par `tailwind.config.ts`:
```ts
content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',  // Assurez-vous que c'est correct
]
```

### Q: React Router ne navigue pas
**R:** Vérifiez:
1. Que vous utilisez `<Link to="/path" />` et non `href`
2. Que la route est définie dans `App.tsx`
3. Que `<BrowserRouter>` enveloppe toute l'application

### Q: HMR ne fonctionne pas
**R:** Essayez:
1. Redémarrer le serveur: `npm run dev`
2. Rafraîchir le navigateur: `Ctrl+Shift+R`
3. Nettoyer les dépendances: `rm -rf node_modules && npm install`

### Q: Erreur "Module not found"
**R:** Vérifiez:
1. Le chemin est correct (sensibilité à la casse sur Linux/Mac)
2. Le fichier existe réellement
3. L'import utilise les bonnes guillemets (`'` ou `"`)

---

## Ressources Utiles

- 📖 [Documentation Vite](https://vitejs.dev)
- ⚛️ [Documentation React](https://react.dev)
- 🛣️ [React Router v6](https://reactrouter.com)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🎬 [Framer Motion](https://www.framer.com/motion)

---

**Vous ne trouvez pas votre réponse?**
1. Consultez les fichiers de documentation (.md)
2. Vérifiez la console pour les erreurs
3. Consultez les ressources officielles
4. Demandez dans les communautés de développement

**Bonne chance! 🚀**
