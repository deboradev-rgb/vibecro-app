# 🚀 GUIDE COMPLET: INSTALLATION & DÉPLOIEMENT

## Table des matières
1. [Installation locale](#installation-locale)
2. [Déploiement sur Vercel](#déploiement-vercel)
3. [Déploiement sur Netlify](#déploiement-netlify)
4. [Déploiement sur serveur statique](#déploiement-serveur)
5. [Troubleshooting](#troubleshooting)

---

## Installation locale {#installation-locale}

### Prérequis
- Node.js 16+ ([télécharger](https://nodejs.org))
- npm 8+ (inclus avec Node.js)
- Git (optionnel)

### Vérifier les versions
```bash
node --version    # Doit être v16.0.0+
npm --version     # Doit être 8.0.0+
```

### Étapes d'installation

#### 1. Ouvrir le terminal
```bash
# Windows: Win+R → "cmd" → Enter
# Mac: Cmd+Space → "terminal" → Enter
# Linux: Ctrl+Alt+T
```

#### 2. Naviguer vers le dossier
```bash
cd "c:\Users\CJPR TTG\Vibecro\vibecro.app"
# ou votre chemin personnel
```

#### 3. Installer les dépendances
```bash
npm install
```

⏱️ **Temps estimé: 2-5 minutes**

Vous devriez voir:
```
added XXX packages in Xs
```

#### 4. Vérifier l'installation
```bash
npm list | grep -E "vite|react-router"
```

Résultat attendu:
```
├── vite@5.4.10
├── react-router-dom@6.28.0
└── react@19.2.0
```

#### 5. Lancer le serveur de développement
```bash
npm run dev
```

Résultat attendu:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Press h to show help
```

#### 6. Ouvrir dans le navigateur
- Cliquer sur le lien `http://localhost:3000/`
- Ou copier-coller dans la barre d'adresse

✅ **Vous avez réussi l'installation!**

---

## Déploiement sur Vercel {#déploiement-vercel}

### Pourquoi Vercel?
- ✅ Optimisé pour Vite et React
- ✅ Gratuit pour les projets publics
- ✅ Déploiement automatique
- ✅ Domaine personnalisé gratuit
- ✅ Aperçu des PR automatique

### Prérequis
- [ ] Compte GitHub (gratuit)
- [ ] Repository sur GitHub
- [ ] Compte Vercel (gratuit)

### Étape 1: Créer un compte Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur "Sign Up" (Inscription)
3. Choisir "Continue with GitHub"
4. Autoriser Vercel sur GitHub

### Étape 2: Créer un repository GitHub

**Si vous n'avez pas encore de repository:**

1. Aller sur [github.com](https://github.com)
2. Cliquer sur "New" (Nouveau)
3. Créer un repository public
4. Nommer: `vibecro-app`
5. Ajouter la description: "VIBECRO - Solutions digitales"
6. Créer le repository

**Ajouter votre code:**

```bash
# Dans le dossier vibecro.app
git init
git add .
git commit -m "Initial commit: Migration Next.js to Vite"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/vibecro-app.git
git push -u origin main
```

### Étape 3: Déployer sur Vercel

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Cliquer sur "Import Git Repository"
3. Chercher `vibecro-app`
4. Cliquer sur "Import"

**Configuration automatique:**
- Framework: ✅ Vercel détecte automatiquement Vite
- Build Command: ✅ `npm run build`
- Output Directory: ✅ `dist`

5. Cliquer sur "Deploy"

⏱️ **Temps de déploiement: 2-5 minutes**

### Étape 4: Tester le déploiement

Vercel vous donnera une URL: `https://vibecro-app-XXXXXX.vercel.app`

1. Ouvrir l'URL dans le navigateur
2. Tester la navigation
3. Vérifier le thème clair/sombre

✅ **Déployé sur Vercel!**

### Domaine personnalisé (Optionnel)

1. Aller sur le dashboard Vercel de votre projet
2. Onglet "Settings" → "Domains"
3. Ajouter un domaine personnalisé
4. Suivre les instructions DNS

---

## Déploiement sur Netlify {#déploiement-netlify}

### Pourquoi Netlify?
- ✅ Simple et gratuit
- ✅ Déploiement drag & drop
- ✅ Build optimisé
- ✅ Forms et redirects faciles

### Prérequis
- [ ] Compte GitHub (recommandé)
- [ ] Repository GitHub avec votre code

### Étape 1: Créer un compte Netlify

1. Aller sur [netlify.com](https://netlify.com)
2. Cliquer sur "Sign up"
3. Choisir "GitHub"
4. Autoriser Netlify

### Étape 2: Nouveau site

1. Cliquer sur "Add new site"
2. Choisir "Import an existing project"
3. Sélectionner "GitHub"
4. Chercher `vibecro-app`
5. Cliquer sur "Install"

**Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: (laisser vide pour l'instant)

6. Cliquer sur "Deploy site"

⏱️ **Temps de déploiement: 2-5 minutes**

### Étape 3: Configurer les redirects

Ajouter `public/_redirects`:

```
/*    /index.html   200
```

Cela assure que React Router fonctionne correctement.

### Étape 4: Tester

Netlify vous donnera une URL: `https://vibecro-app.netlify.app`

---

## Déploiement sur serveur statique {#déploiement-serveur}

### Prérequis
- [ ] Accès au serveur (SSH, FTP, etc.)
- [ ] Espace disque: ~50MB

### Étape 1: Build local

```bash
npm run build
```

Cela crée un dossier `dist/` avec tous les fichiers.

### Étape 2: Transférer les fichiers

**Option A: Avec FTP (FileZilla)**
1. Ouvrir FileZilla
2. Se connecter au serveur
3. Uploader le contenu de `dist/` vers `/public_html/`

**Option B: Avec SSH**
```bash
scp -r dist/* user@server.com:/var/www/html/
```

**Option C: Avec Git**
```bash
git push production main
# Sur le serveur: npm run build && cp -r dist/* /var/www/html/
```

### Étape 3: Configuration du serveur

**Apache (.htaccess dans la racine)**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx (dans la config)**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Étape 4: Tester

Accéder à votre domaine et vérifier que:
- [ ] La page charge
- [ ] La navigation fonctionne
- [ ] Les styles sont appliqués
- [ ] Le thème fonctionne

---

## Troubleshooting {#troubleshooting}

### ❓ npm install échoue

**Solution 1: Nettoyer le cache**
```bash
npm cache clean --force
npm install
```

**Solution 2: Supprimer et réinstaller**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3: Utiliser une version antérieure de npm**
```bash
npm install -g npm@8
npm install
```

### ❓ Le serveur ne démarre pas

**Vérifications:**
```bash
# Est-ce que le port 3000 est libre?
netstat -an | grep 3000

# Si occupé, utiliser un autre port:
npm run dev -- --port 3001
```

### ❓ Erreur lors du build

```bash
# Nettoyer et reconstruire
rm -rf node_modules dist
npm install
npm run build
```

### ❓ Styles ne s'appliquent pas

1. Vérifier que Tailwind est installé
2. Relancer le serveur
3. Hard refresh du navigateur (Ctrl+Shift+R)

### ❓ Routes ne fonctionnent pas

1. Vérifier que le app est servi avec les redirects configurés
2. Pour Vercel/Netlify: c'est automatique
3. Pour serveur: voir la configuration Apache/Nginx

### ❓ Domaine personnalisé ne fonctionne pas

1. Vérifier que les DNS sont correctement configurés
2. Attendre la propagation DNS (24-48h)
3. Contacter le support du fournisseur

### ❓ Le site est lent

**Solutions d'optimisation:**
```bash
# Analyser la taille du bundle
npm run build

# Activer la compression
# Sur Vercel/Netlify: automatique
# Sur serveur: configurer gzip dans Nginx/Apache
```

### ❓ Erreur 404 sur les pages

**Cause:** Les redirects vers index.html ne fonctionnent pas

**Solution:**
1. Vercel: Automatique ✅
2. Netlify: Ajouter `_redirects` ✅
3. Serveur: Configurer `.htaccess` ou Nginx ✅

---

## Checklist de déploiement

### Avant le déploiement
- [ ] Code testé localement
- [ ] `npm run build` fonctionne
- [ ] Pas d'erreurs console
- [ ] Tous les liens de navigation fonctionnent
- [ ] Thème clair/sombre fonctionne
- [ ] Images s'affichent correctement
- [ ] Performance acceptable

### Après le déploiement
- [ ] Site accessible via l'URL
- [ ] Navigation fonctionne
- [ ] Thème persiste au rechargement
- [ ] Styles sont appliqués
- [ ] Console sans erreurs
- [ ] Pas de 404
- [ ] Responsive sur mobile

---

## Commandes utiles

```bash
# Développement
npm run dev              # Lancer le serveur

# Production
npm run build            # Construire
npm run preview          # Tester en local
npm run build --report   # Rapport de build

# Maintenance
npm update              # Mettre à jour les packages
npm audit fix           # Corriger les vulnérabilités

# Lint
npm run lint            # Vérifier le code
```

---

## Support

Si vous avez besoin d'aide:

1. **Vercel**: [vercel.com/support](https://vercel.com/support)
2. **Netlify**: [netlify.com/support](https://netlify.com/support)
3. **Documentation Vite**: [vitejs.dev](https://vitejs.dev)
4. **Documentation React**: [react.dev](https://react.dev)

---

**Bravo! Votre application est déployée en production! 🎉**
