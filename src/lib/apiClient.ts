// src/lib/apiClient.ts
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// ========================================================================
// CONFIGURATION
// ========================================================================
const API_URL = import.meta.env.VITE_API_URL || 'http://newvibecroapi.vibecro.com/api';

// ========================================================================
// TYPES & INTERFACES
// ========================================================================
interface TokenResponse {
  access_token: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
  [key: string]: any;
}

// ========================================================================
// CONFIGURATION DES ROUTES PUBLIQUES PAR MÉTHODE HTTP
// ========================================================================
const PUBLIC_ROUTES = {
  // ✅ GET : Routes publiques en lecture seule
  GET: [
    '/blog',
    '/blog/',
    '/projects',
    '/projects/',
    '/team-members',
    '/team-members/',
    '/storage',
    '/storage/',
    '/test',
    '/health',
  ],
  
  // ✅ POST : Routes publiques en écriture (formulaires, auth)
  POST: [
    '/contact-messages',
    '/login',
    '/register',
  ],
  
  // ❌ PUT : AUCUNE route publique en modification
  PUT: [],
  
  // ❌ PATCH : AUCUNE route publique en modification partielle
  PATCH: [],
  
  // ❌ DELETE : AUCUNE route publique en suppression
  DELETE: [],
};

// ========================================================================
// FONCTION DE VÉRIFICATION DES ROUTES PUBLIQUES
// ========================================================================
const isPublicRoute = (url: string = '', method: string = 'GET'): boolean => {
  const normalizedMethod = method.toUpperCase();
  const normalizedUrl = url.split('?')[0]; // Ignorer les query params
  
  // Vérifier selon la méthode HTTP
  switch (normalizedMethod) {
    case 'GET':
      return PUBLIC_ROUTES.GET.some(route => normalizedUrl.startsWith(route));
    
    case 'POST':
      return PUBLIC_ROUTES.POST.some(route => normalizedUrl.startsWith(route));
    
    case 'PUT':
    case 'PATCH':
    case 'DELETE':
      return false; // Jamais public
    
    default:
      return false;
  }
};

// ========================================================================
// INSTANCE AXIOS
// ========================================================================
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: true,
  timeout: 30000, // 30 secondes
});

// ========================================================================
// INTERCEPTEUR REQUÊTE
// ========================================================================
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('auth_token');
    const url = config.url || '';
    const method = (config.method || 'get').toUpperCase();
    
    // Vérifier si c'est une route publique
    const isPublic = isPublicRoute(url, method);

    // 🔍 DEBUG MODE
    if (import.meta.env.DEV) {
      console.group(`🌐 [${method}] ${url}`);
      console.log('  ├─ isPublic:', isPublic);
      console.log('  ├─ hasToken:', !!token);
      console.log('  ├─ willSendToken:', !isPublic && !!token);
      console.log('  ├─ isFormData:', config.data instanceof FormData);
      console.log('  └─ headers:', config.headers);
      console.groupEnd();
    }

    // ========================================================================
    // RÈGLE D'OR : Route publique = JAMAIS de token
    // ========================================================================
    if (isPublic) {
      delete config.headers.Authorization;
      return config;
    }

    // ========================================================================
    // ROUTES PROTÉGÉES = TOUJOURS le token si disponible
    // ========================================================================
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // Pas de token pour route protégée = erreur 401 inévitable
      console.warn(`⚠️ Route protégée [${method}] ${url} mais aucun token disponible`);
    }

    // ========================================================================
    // GESTION SPÉCIALE FORMDATA
    // ========================================================================
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type']; // Laisse axios définir le boundary
    }

    return config;
  },
  (error) => {
    console.error('❌ Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

// ========================================================================
// INTERCEPTEUR RÉPONSE
// ========================================================================
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // 🔍 DEBUG MODE
    if (import.meta.env.DEV) {
      console.log(`✅ [${response.status}] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        data: response.data,
      });
    }

    // ========================================================================
    // STOCKAGE DU TOKEN APRÈS LOGIN/REGISTER
    // ========================================================================
    if (response.config.url?.includes('/login') || response.config.url?.includes('/register')) {
      const data = response.data as TokenResponse & { user?: User };
      
      if (data.access_token) {
        localStorage.setItem('auth_token', data.access_token);
        
        if (data.refresh_token) {
          localStorage.setItem('refresh_token', data.refresh_token);
        }
        
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        
        console.log('🔐 Token stocké avec succès');
      }
    }

    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    const url = originalRequest?.url || '';
    const method = (originalRequest?.method || 'get').toUpperCase();
    
    // Vérifier si c'est une route publique
    const isPublic = isPublicRoute(url, method);

    // 🔍 DEBUG MODE
    if (error.response) {
      console.error(`❌ [${error.response.status}] ${method} ${url}`, {
        isPublic,
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error('❌ No response received:', {
        url,
        method,
        message: 'Le serveur ne répond pas',
      });
    } else {
      console.error('❌ Request error:', error.message);
    }

    // ========================================================================
    // GESTION DES ERREURS 401
    // ========================================================================
    if (error.response?.status === 401) {
      
      // ========================================================================
      // CAS 1: ROUTE PUBLIQUE - PAS DE REDIRECTION
      // ========================================================================
      if (isPublic) {
        console.warn(`⚠️ 401 sur route PUBLIQUE [${method}] ${url} - Aucune redirection`);
        return Promise.reject(error);
      }

      // ========================================================================
      // CAS 2: ROUTE PROTÉGÉE - TENTATIVE DE REFRESH TOKEN
      // ========================================================================
      console.warn(`⚠️ 401 sur route PROTÉGÉE [${method}] ${url} - Tentative de rafraîchissement...`);

      // Éviter les boucles infinies
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = localStorage.getItem('refresh_token');

        if (refreshToken) {
          try {
            // Tentative de rafraîchissement du token
            const refreshResponse = await api.post('/refresh', { 
              refresh_token: refreshToken 
            });

            const { access_token, refresh_token } = refreshResponse.data;

            // Stocker les nouveaux tokens
            localStorage.setItem('auth_token', access_token);
            
            if (refresh_token) {
              localStorage.setItem('refresh_token', refresh_token);
            }

            // Réessayer la requête originale avec le nouveau token
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${access_token}`;
            }
            
            console.log('🔄 Token rafraîchi avec succès, nouvelle tentative...');
            return api(originalRequest);
            
          } catch (refreshError) {
            console.error('❌ Échec du rafraîchissement du token:', refreshError);
            
            // Nettoyer les tokens
            localStorage.removeItem('auth_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            
            // Rediriger vers login
            if (!window.location.pathname.includes('/login')) {
              window.location.href = '/admin/login';
            }
            
            return Promise.reject(refreshError);
          }
        }
      }

      // ========================================================================
      // CAS 3: PAS DE REFRESH TOKEN - DÉCONNEXION
      // ========================================================================
      console.warn('🚪 Pas de refresh token, redirection vers login');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/admin/login';
      }
    }

    // ========================================================================
    // GESTION DES AUTRES ERREURS HTTP
    // ========================================================================
    if (error.response?.status === 403) {
      console.error('⛔ Accès interdit (403)');
    }

    if (error.response?.status === 422) {
      console.error('📋 Erreur de validation (422):', error.response.data);
    }

    if (error.response?.status === 429) {
      console.error('⏰ Trop de requêtes (429)');
    }

    if (error.response?.status === 500) {
      console.error('💥 Erreur serveur interne (500)');
    }

    return Promise.reject(error);
  }
);

// ========================================================================
// FONCTION UTILITAIRE - GESTION DES ERREURS API
// ========================================================================
export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    // Erreur avec réponse du serveur
    if (error.response) {
      const { status, data } = error.response;
      
      // Erreurs de validation (422)
      if (status === 422 && data.errors) {
        const errors = Object.values(data.errors).flat();
        return `Erreur de validation: ${errors.join(', ')}`;
      }
      
      // Message d'erreur standard
      if (data.message) {
        return data.message;
      }
      
      // Messages par statut HTTP
      switch (status) {
        case 400: return 'Requête invalide. Vérifiez les données envoyées.';
        case 401: return 'Session expirée. Veuillez vous reconnecter.';
        case 403: return 'Vous n\'avez pas les permissions nécessaires.';
        case 404: return 'Ressource non trouvée.';
        case 409: return 'Conflit avec les données existantes.';
        case 422: return 'Données invalides. Vérifiez le formulaire.';
        case 429: return 'Trop de requêtes. Veuillez patienter.';
        case 500: return 'Erreur serveur. Veuillez réessayer plus tard.';
        case 503: return 'Service indisponible. Maintenance en cours.';
        default: return `Erreur serveur (${status})`;
      }
    }
    
    // Pas de réponse du serveur
    if (error.request) {
      if (error.code === 'ECONNABORTED') {
        return 'Délai d\'attente dépassé. Vérifiez votre connexion.';
      }
      if (error.code === 'ERR_NETWORK') {
        return 'Impossible de contacter le serveur. Vérifiez votre connexion internet.';
      }
      return 'Aucune réponse du serveur. Vérifiez votre connexion.';
    }
  }
  
  // Erreur inattendue
  return error?.message || 'Une erreur inattendue est survenue';
};

// ========================================================================
// SERVICE AUTH
// ========================================================================
export const authAPI = {
  login: (email: string, password: string) => 
    api.post('/login', { email, password }),
  
  register: (name: string, email: string, password: string, passwordConfirmation: string) =>
    api.post('/register', { 
      name, 
      email, 
      password, 
      password_confirmation: passwordConfirmation 
    }),
  
  logout: () => api.post('/logout'),
  
  getMe: () => api.get('/me'),
  
  refreshToken: (refreshToken: string) => 
    api.post('/refresh', { refresh_token: refreshToken }),
  
  validateToken: () => api.get('/validate-token'),
};

// ========================================================================
// SERVICE TEAM MEMBERS - CORRIGÉ ET FORTEMENT TYPÉ
// ========================================================================
export const teamAPI = {
  // ✅ GET - Public (pas de token)
  getAll: () => {
    return api.get('/team-members', {
      headers: {
        // Force l'absence de token
        Authorization: undefined
      }
    });
  },
  
  // ✅ GET by ID - Public (pas de token)
  getById: (id: number) => {
    return api.get(`/team-members/${id}`, {
      headers: {
        Authorization: undefined
      }
    });
  },
  
  // ✅ POST - PROTÉGÉ (token OBLIGATOIRE)
  create: (data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      console.error('❌ Tentative de création sans token - Redirection vers login');
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    
    if (data instanceof FormData) {
      return api.post('/team-members', data, {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data',
        }
      });
    }
    
    return api.post('/team-members', data, config);
  },
  
  // ✅ PUT - PROTÉGÉ (token OBLIGATOIRE)
  update: (id: number, data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      console.error('❌ Tentative de modification sans token');
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      return api.post(`/team-members/${id}`, data, {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data',
        }
      });
    }
    
    return api.put(`/team-members/${id}`, data, config);
  },
  
  // ✅ DELETE - PROTÉGÉ (token OBLIGATOIRE)
  delete: (id: number) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      console.error('❌ Tentative de suppression sans token');
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.delete(`/team-members/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
};

// ========================================================================
// SERVICE PROJECTS
// ========================================================================
export const projectAPI = {
  // ✅ GET - Public
  getAll: (params?: any) => api.get('/projects', { params }),
  getById: (id: number) => api.get(`/projects/${id}`),
  getStats: () => api.get('/projects/stats'),
  
  // ✅ POST - PROTÉGÉ
  create: (data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    
    if (data instanceof FormData) {
      return api.post('/projects', data, {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`📤 Upload: ${percent}%`);
          }
        },
      });
    }
    
    return api.post('/projects', data, config);
  },
  
  // ✅ PUT - PROTÉGÉ
  update: (id: number, data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      return api.post(`/projects/${id}`, data, {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`📤 Upload: ${percent}%`);
          }
        },
      });
    }
    
    return api.put(`/projects/${id}`, data, config);
  },
  
  // ✅ DELETE - PROTÉGÉ
  delete: (id: number) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.delete(`/projects/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
};

// ========================================================================
// SERVICE BLOG - COMPLET
// ========================================================================
export const blogAPI = {
  // ✅ GET - Public (pas de token)
  getAll: (params?: any) => {
    return api.get('/blog', { 
      params,
      headers: {
        Authorization: undefined
      }
    });
  },
  
  getOne: (id: number) => {
    return api.get(`/blog/${id}`, {
      headers: {
        Authorization: undefined
      }
    });
  },
  
  getBySlug: (slug: string) => {
    return api.get(`/blog/slug/${slug}`, {
      headers: {
        Authorization: undefined
      }
    });
  },
  
  // ✅ POST - PROTÉGÉ (FormData pour upload d'image)
  create: (data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    
    if (data instanceof FormData) {
      return api.post('/blog', data, {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`📤 Upload image: ${percent}%`);
          }
        },
      });
    }
    
    return api.post('/blog', data, config);
  },
  
  // ✅ PUT - PROTÉGÉ (FormData pour upload d'image)
  update: (id: number, data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      return api.post(`/blog/${id}`, data, {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`📤 Upload image: ${percent}%`);
          }
        },
      });
    }
    
    return api.put(`/blog/${id}`, data, config);
  },
  
  // ✅ DELETE - PROTÉGÉ
  delete: (id: number) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.delete(`/blog/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
};

// ========================================================================
// SERVICE CONTACT
// ========================================================================
export const contactAPI = {
  // ✅ POST - Public
  create: (data: any) => api.post('/contact-messages', data),
  
  // ✅ GET - PROTÉGÉ (Admin)
  getAll: (params?: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.get('/contact-messages', {
      params,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  getById: (id: number) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.get(`/contact-messages/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  update: (id: number, data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.put(`/contact-messages/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  delete: (id: number) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.delete(`/contact-messages/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  markAllRead: () => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.post('/contact-messages/mark-all-read', {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
};

// ========================================================================
// SERVICE DASHBOARD
// ========================================================================
export const dashboardAPI = {
  getStats: () => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.get('/dashboard/stats', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  getNotifications: () => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.get('/notifications', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  getActivities: (params?: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.get('/activities', {
      params,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
};

// ========================================================================
// SERVICE USER PREFERENCES
// ========================================================================
export const userAPI = {
  getPreferences: () => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.get('/user/preferences', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  updatePreferences: (data: any) => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      window.location.href = '/admin/login';
      return Promise.reject(new Error('Non authentifié'));
    }
    
    return api.put('/user/preferences', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
};

// ========================================================================
// FONCTION DE DÉCONNEXION
// ========================================================================
export const logout = async () => {
  try {
    const token = localStorage.getItem('auth_token');
    if (token) {
      await api.post('/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    }
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  } finally {
    // Nettoyer le localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    
    // Rediriger vers login
    window.location.href = '/admin/login';
  }
};

// ========================================================================
// EXPORT DEFAULT
// ========================================================================
export default api;