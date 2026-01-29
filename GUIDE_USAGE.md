# 📚 GUIDE: Utilisation de l'application migrée

## Table des matières
1. [Navigation avec React Router](#navigation)
2. [Gestion du thème](#theme)
3. [Structure des composants](#composants)
4. [Communication avec l'API](#api)
5. [Exemples pratiques](#exemples)

---

## Navigation avec React Router {#navigation}

### Navigation simple
```tsx
import { Link } from 'react-router-dom'

export default function MyComponent() {
  return (
    <Link to="/about">
      Aller à la page À propos
    </Link>
  )
}
```

### Navigation programmatique
```tsx
import { useNavigate } from 'react-router-dom'

export default function MyComponent() {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/contact')
  }
  
  return <button onClick={handleClick}>Aller au contact</button>
}
```

### Accéder aux paramètres de route
```tsx
import { useParams } from 'react-router-dom'

export default function ServiceDetail() {
  const { slug } = useParams() // /services/iot-tracking → slug = "iot-tracking"
  
  return <h1>Service: {slug}</h1>
}
```

### Accéder au chemin courant
```tsx
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const pathname = location.pathname // "/about", "/services", etc.
  
  const isActive = (path) => pathname === path
  
  return (
    <nav>
      <a className={isActive('/') ? 'active' : ''}>Accueil</a>
      <a className={isActive('/about') ? 'active' : ''}>À propos</a>
    </nav>
  )
}
```

### Requête en URL (Query String)
```tsx
import { useSearchParams } from 'react-router-dom'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') // /contact?type=project → "project"
  
  return <h1>Type: {type}</h1>
}
```

---

## Gestion du thème {#theme}

### Utiliser le thème
```tsx
import { useTheme } from '@/components/providers/ThemeWrapper'

export default function MyComponent() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <div>
      <p>Mode: {isDark ? 'Sombre' : 'Clair'}</p>
      <button onClick={toggleTheme}>
        Changer le thème
      </button>
    </div>
  )
}
```

### Condiitionnels basés sur le thème
```tsx
import { useTheme } from '@/components/providers/ThemeWrapper'

export default function Card() {
  const { isDark } = useTheme()
  
  return (
    <div className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
      Contenu
    </div>
  )
}
```

### Classes Tailwind pour le thème
Le thème utilise la classe `dark` sur le `<html>`:
```tsx
// Ces classes s'appliquent automatiquement
<div className="bg-white dark:bg-gray-900">
  Du contenu
</div>
```

---

## Structure des composants {#composants}

### Layout principal
```tsx
// src/App.tsx
<Router>
  <ThemeProvider>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* ... autres routes */}
    </Routes>
    <Footer />
  </ThemeProvider>
</Router>
```

### Créer une nouvelle page
```tsx
// src/pages/MyPage.tsx
import { Link } from 'react-router-dom'

export default function MyPage() {
  return (
    <div className="min-h-screen">
      <h1>Ma page</h1>
      <p>Contenu de la page</p>
      <Link to="/">Retour</Link>
    </div>
  )
}
```

### Créer un composant réutilisable
```tsx
// src/components/MyComponent.tsx
import { ReactNode } from 'react'

interface MyComponentProps {
  title: string
  children: ReactNode
}

export default function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

---

## Communication avec l'API {#api}

### Utiliser axios (déjà installé)
```tsx
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function MyComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    axios
      .get('/api/services')
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])
  
  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur: {error.message}</p>
  
  return <div>{JSON.stringify(data)}</div>
}
```

### Client API avec configuration
```tsx
// src/lib/api.ts
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Hooks pour utiliser l'API
export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    apiClient
      .get<T>(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])
  
  return { data, loading, error }
}
```

---

## Exemples pratiques {#exemples}

### 1. Page avec formulaire
```tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ContactForm {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const { register, handleSubmit } = useForm<ContactForm>()
  const [submitted, setSubmitted] = useState(false)
  
  const onSubmit = async (data: ContactForm) => {
    console.log('Données du formulaire:', data)
    setSubmitted(true)
  }
  
  if (submitted) return <p>Merci pour votre message!</p>
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: true })}
        placeholder="Votre nom"
      />
      <input
        {...register('email', { required: true })}
        placeholder="Votre email"
        type="email"
      />
      <textarea
        {...register('message', { required: true })}
        placeholder="Votre message"
      />
      <button type="submit">Envoyer</button>
    </form>
  )
}
```

### 2. Page avec animation Framer Motion
```tsx
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Bienvenue</h1>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Cliquez-moi
      </motion.button>
    </motion.div>
  )
}
```

### 3. Page avec paramètres dynamiques
```tsx
import { useParams, useSearchParams } from 'react-router-dom'

export default function ServicePage() {
  const { slug } = useParams() // /services/iot-tracking
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') // ?category=tech
  
  return (
    <div>
      <h1>Service: {slug}</h1>
      <p>Catégorie: {category}</p>
    </div>
  )
}
```

### 4. Composant avec thème et animations
```tsx
import { useTheme } from '@/components/providers/ThemeWrapper'
import { motion } from 'framer-motion'

export default function Card() {
  const { isDark } = useTheme()
  
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={`
        p-6 rounded-lg border-2
        ${isDark 
          ? 'bg-gray-800 border-gray-700 text-white'
          : 'bg-white border-gray-200 text-black'
        }
      `}
    >
      <h3>Contenu</h3>
    </motion.div>
  )
}
```

### 5. Hook personnalisé pour l'API
```tsx
// src/hooks/useServices.ts
import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'

export function useServices() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    apiClient
      .get('/api/services')
      .then(res => setServices(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])
  
  return { services, loading, error }
}

// Utilisation
export default function ServicesPage() {
  const { services, loading } = useServices()
  
  return (
    <div>
      {loading ? <p>Chargement...</p> : services.map(s => <div key={s.id}>{s.name}</div>)}
    </div>
  )
}
```

---

## Aller plus loin

### Ajouter une page
1. Créer `src/pages/NomPage.tsx`
2. Ajouter la route dans `src/App.tsx`
3. Ajouter le lien dans `Header.tsx`

### Ajouter un composant
1. Créer le fichier dans `src/components/`
2. Importer et utiliser dans les pages

### Ajouter des styles
- Tailwind CSS est déjà configuré
- Utiliser les classes `className="..."`
- Pour du CSS custom: créer un fichier `.css` et importer

### Optimiser le build
```bash
npm run build  # Crée le dossier dist/
npm run preview  # Tester la production localement
```

---

**Besoin d'aide? Consultez les fichiers de documentation!** 📚
