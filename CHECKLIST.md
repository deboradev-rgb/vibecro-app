# ✅ CHECKLIST: Migration Next.js → React + Vite

## 📦 Installation & Setup

- [ ] Ouvrir le terminal dans le dossier `vibecro.app`
- [ ] Exécuter `npm install` pour installer les dépendances
- [ ] Attendre que l'installation se termine (peut prendre 1-2 minutes)
- [ ] Exécuter `npm run dev` pour lancer le serveur
- [ ] Ouvrir http://localhost:3000 dans le navigateur
- [ ] Vérifier que la page d'accueil s'affiche correctement

## 🎨 Navigation & Routing

- [ ] Tester le lien "Accueil" - doit rester sur `/`
- [ ] Tester le lien "Services" - doit aller à `/services`
- [ ] Tester le lien "Portfolio" - doit aller à `/portfolio`
- [ ] Tester le lien "À propos" - doit aller à `/about`
- [ ] Tester le lien "Contact" - doit aller à `/contact`
- [ ] Tester les liens légaux - doivent aller à `/legal/*`
- [ ] Vérifier que le header s'affiche sur toutes les pages
- [ ] Vérifier que le footer s'affiche sur toutes les pages

## 🌓 Thème (Clair/Sombre)

- [ ] Voir le bouton de thème dans le header
- [ ] Cliquer sur le bouton pour changer le thème
- [ ] Vérifier que les couleurs changent
- [ ] Rafraîchir la page - le thème doit persister
- [ ] Vérifier que le stockage local fonctionne

## 💻 Code & Performance

- [ ] Ouvrir les DevTools (F12)
- [ ] Aller à l'onglet Console - pas d'erreurs graves
- [ ] Aller à l'onglet Network - les requêtes se font bien
- [ ] Vérifier la vitesse de chargement (Lighthouse)
- [ ] Tester le hot reload en modifiant un fichier `.tsx`

## 🚀 Production

- [ ] Exécuter `npm run build`
- [ ] Attendre la fin du build
- [ ] Vérifier qu'un dossier `dist/` a été créé
- [ ] Exécuter `npm run preview`
- [ ] Tester la version production localement
- [ ] Vérifier que tout fonctionne correctement

## 📝 Contenu & Pages

- [ ] HomePage - page d'accueil complète ✅
- [ ] AboutPage - contenu à ajouter (page stub visible)
- [ ] ServicesPage - contenu à ajouter (page stub visible)
- [ ] PortfolioPage - contenu à ajouter (page stub visible)
- [ ] ContactPage - contenu à ajouter (page stub visible)
- [ ] Pages légales - contenu à ajouter (pages stub visibles)

## 📚 Documentation

- [ ] Lire `MIGRATION_COMPLETE.md` pour le résumé
- [ ] Lire `MIGRATION.md` pour les détails techniques
- [ ] Lire `SETUP.md` pour les guides d'utilisation
- [ ] Lire `GUIDE_USAGE.md` pour les exemples de code

## 🔧 Intégration API

- [ ] Vérifier la configuration dans `src/lib/laravel/client.ts`
- [ ] Adapter l'URL de base de l'API si nécessaire
- [ ] Tester une requête API simple
- [ ] Vérifier que les données s'affichent correctement

## 🎯 Déploiement (Optionnel)

- [ ] Créer un compte sur Vercel ou Netlify
- [ ] Connecter le repository GitHub
- [ ] Configurer les variables d'environnement
- [ ] Lancer le premier déploiement
- [ ] Tester le site en production

## ⚠️ Points à vérifier

### Imports Next.js
- [ ] Aucun `import Link from 'next/link'` (doit être `react-router-dom`)
- [ ] Aucun `import { usePathname } from 'next/navigation'` (doit être `useLocation`)
- [ ] Aucun `import Image from 'next/image'` (doit être `<img>` ou composant custom)
- [ ] Aucun `'use client'` au début des fichiers

### Routes
- [ ] Tous les liens utilisent `to` au lieu de `href`
- [ ] Les paramètres de route `:slug` sont correctement gérés
- [ ] Les redirections fonctionnent correctement

### Styles
- [ ] Tailwind CSS fonctionne (couleurs, espacements, etc.)
- [ ] Les classes `dark:*` fonctionnent en mode sombre
- [ ] Les animations Framer Motion sont fluides

### Composants
- [ ] Header avec navigation fonctionne
- [ ] Footer affiche tous les liens
- [ ] Formulaires de contact fonctionnent (si implémentés)
- [ ] Animations sont fluides et sans bugs

## 📊 Metrics de migration

- [ ] Taille du bundle: `npm run build` (vérifier dans la console)
- [ ] Temps de démarrage dev: < 500ms (Vite)
- [ ] HMR: < 100ms (React Router)
- [ ] Lighthouse Score: > 85 (performance)

## 🎉 MIGRATION COMPLÈTE!

Une fois que vous avez coché toutes les cases et que tout fonctionne:

1. **Supprimer les anciens fichiers** (optionnel mais recommandé)
   ```bash
   rm -rf .next/              # Dossier build Next.js
   rm next.config.ts          # Config Next.js
   rm -rf src/app/            # Structure App Router (si pages migrées)
   ```

2. **Commit les changements**
   ```bash
   git add .
   git commit -m "Migrate: Next.js → React + Vite"
   git push
   ```

3. **Célébrer la migration réussie! 🎉**

---

**Notes importantes:**
- Gardez une copie de sauvegarde du code original
- Testez complètement avant d'aller en production
- Gardez les fichiers de documentation à portée
- Documentez vos modifications personnalisées

**Besoin d'aide?**
- Consultez la documentation dans les fichiers `.md`
- Vérifiez les erreurs dans la console du navigateur
- Consultez la documentation officielle de Vite et React Router

**Bon développement! 🚀**
