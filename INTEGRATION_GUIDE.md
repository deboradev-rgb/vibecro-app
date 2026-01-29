# Guide d'Intégration Complet - Vibecro API & Dashboard

## 📋 Résumé

Vous avez maintenant:
1. **API Laravel complète** dans `vibecro-app.api/`
2. **Dashboard Admin en React** dans `vibecro.app-main/`
3. **Système d'authentification** avec tokens

## 🚀 Installation du Backend Laravel

### Étape 1: Configuration de la base de données

```bash
cd "c:\Users\CJPR TTG\Vibecro\vibecro-app.api"
```

Créez une base de données MySQL:
```sql
CREATE DATABASE vibecro_api;
```

Éditez `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=vibecro_api
DB_USERNAME=root
DB_PASSWORD=
```

### Étape 2: Installation des dépendances

```bash
# Générer la clé d'application
php artisan key:generate

# Installer Sanctum pour l'authentification
composer require laravel/sanctum

# Publier les fichiers de Sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Éditer config/sanctum.php
# Ajouter à 'stateful' = ['localhost:5173', '127.0.0.1:5173']
```

### Étape 3: Configuration des migrations

Les fichiers de migration ont été créés. Éditez-les selon le guide API_SETUP_GUIDE.md.

```bash
php artisan migrate
```

### Étape 4: Créer un utilisateur admin

```bash
php artisan tinker
```

```php
App\Models\User::create([
    'name' => 'Admin',
    'email' => 'admin@example.com',
    'password' => Hash::make('password'),
]);
exit
```

### Étape 5: Lancer le serveur

```bash
php artisan serve
```

Le serveur sera accessible à: `http://localhost:8000/api`

## 🎨 Configuration du Frontend React

### Étape 1: Installer react-router-dom (si pas encore installé)

```bash
cd "c:\Users\CJPR TTG\Vibecro\vibecro.app-main"
npm install react-router-dom
```

### Étape 2: Configurer les routes

Mettez à jour votre fichier `src/App.tsx` ou votre fichier de routes principal:

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/admin/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          {/* Vos autres routes ici */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
```

### Étape 3: Créer fichier .env

```bash
cp .env.example .env
```

Vérifiez que `.env` contient:
```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Vibecro
VITE_APP_URL=http://localhost:5173
```

### Étape 4: Démarrer le serveur React

```bash
npm run dev
```

## 🔗 Endpoints de l'API

### Authentification (Public)
- `POST /api/register` - S'enregistrer
- `POST /api/login` - Se connecter
- `POST /api/logout` - Se déconnecter (Protégé)
- `GET /api/me` - Données utilisateur (Protégé)

### Équipe (Public: lecture, Protégé: CRUD)
- `GET /api/team-members` - Lister les membres
- `GET /api/team-members/{id}` - Voir un membre
- `POST /api/team-members` - Créer (Protégé)
- `PATCH /api/team-members/{id}` - Modifier (Protégé)
- `DELETE /api/team-members/{id}` - Supprimer (Protégé)

### Projets (Public: lecture, Protégé: CRUD)
- `GET /api/projects` - Lister les projets
- `GET /api/projects/{id}` - Voir un projet (par ID ou slug)
- `POST /api/projects` - Créer (Protégé)
- `PATCH /api/projects/{id}` - Modifier (Protégé)
- `DELETE /api/projects/{id}` - Supprimer (Protégé)

### Messages de Contact
- `POST /api/contact-messages` - Envoyer un message (Public)
- `GET /api/contact-messages` - Lister (Protégé)
- `GET /api/contact-messages/{id}` - Voir (Protégé)
- `PATCH /api/contact-messages/{id}` - Répondre (Protégé)
- `DELETE /api/contact-messages/{id}` - Supprimer (Protégé)

## 📱 Intégration avec les pages existantes

### Page À propos (team-members)

```tsx
import { useEffect, useState } from 'react';
import apiClient from '../lib/api';

export function AboutPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const loadTeam = async () => {
      const response = await apiClient.getTeamMembers();
      if (response.data) {
        setTeamMembers(response.data);
      }
    };
    loadTeam();
  }, []);

  return (
    <div>
      {teamMembers.map(member => (
        <div key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.position}</p>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
}
```

### Page Portfolio (projects)

```tsx
import { useEffect, useState } from 'react';
import apiClient from '../lib/api';

export function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await apiClient.getProjects();
      if (response.data) {
        setProjects(response.data);
      }
    };
    loadProjects();
  }, []);

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.image && <img src={project.image} alt={project.title} />}
        </div>
      ))}
    </div>
  );
}
```

### Formulaire de Contact

```tsx
import { useState } from 'react';
import apiClient from '../lib/api';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await apiClient.sendContactMessage(formData);
    if (response.data) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* champs du formulaire */}
    </form>
  );
}
```

## 🔒 CORS Configuration (Important!)

Dans `config/cors.php` de Laravel:

```php
'allowed_origins' => ['localhost:5173', '127.0.0.1:5173'],
'supports_credentials' => true,
```

## 🧪 Test des endpoints

### Avec cURL

```bash
# Login
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password"}'

# Récupérer les projets
curl http://localhost:8000/api/projects

# Créer un projet (avec token)
curl -X POST http://localhost:8000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title":"Mon Projet","description":"Description...","status":"completed"}'
```

### Avec Postman

1. Créer une nouvelle collection
2. Ajouter les variables:
   - `base_url`: http://localhost:8000/api
   - `token`: (sera remplie après le login)
3. Tester les endpoints

## 📝 Notes importantes

1. **CORS**: Assurez-vous que CORS est activé dans Laravel
2. **Sanctum**: L'authentification se fait avec des tokens Bearer
3. **Images**: Utilisez des URLs externes (stockage cloud) ou implémentez un système de upload
4. **Validation**: Toutes les validations sont configurées côté backend
5. **Mot de passe**: Pour la démo, utilisez password: "password"

## 🐛 Dépannage

### Erreur: "CORS policy"
- Vérifier config/cors.php
- Redémarrer le serveur Laravel

### Erreur: "Unauthenticated"
- Vérifier le token est envoyé correctement
- Vérifier que le token n'est pas expiré

### Erreur: "Table not found"
- Exécuter: `php artisan migrate`
- Vérifier la configuration de la base de données

## 📞 Support

Pour toute question, consultez les fichiers:
- `API_SETUP_GUIDE.md` - Guide détaillé de l'API
- `routes/api-new.php` - Configuration des routes
- `src/lib/api.ts` - Client API

Bon développement! 🚀
