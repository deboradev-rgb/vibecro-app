// src/lib/apiClient.ts
import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://newvibecroapi.vibecro.com/api';

// Configuration de l'instance axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Ne pas définir Content-Type pour FormData (laisser axios le faire)
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  
  // Log pour débogage
  if (import.meta.env.DEV) {
    console.log('🌐 Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      hasFormData: config.data instanceof FormData,
      headers: config.headers,
    });
  }
  
  return config;
}, (error) => {
  console.error('❌ Request Error:', error);
  return Promise.reject(error);
});

// Intercepteur pour gérer les réponses
api.interceptors.response.use(
  (response) => {
    // Log pour débogage
    if (import.meta.env.DEV) {
      console.log('✅ Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data
      });
    }
    
    // Stocker le token si présent dans la réponse de login/register
    if (response.config.url?.includes('/login') || response.config.url?.includes('/register')) {
      if (response.data.access_token) {
        localStorage.setItem('auth_token', response.data.access_token);
        if (response.data.refresh_token) {
          localStorage.setItem('refresh_token', response.data.refresh_token);
        }
        localStorage.setItem('user', JSON.stringify(response.data.user || response.data));
        console.log('🔐 Token stocké dans localStorage');
      }
    }
    
    return response;
  },
  (error: AxiosError) => {
    const originalRequest = error.config as any;
    const isLoginRequest = originalRequest?.url === '/login';
    const isAuthRequest = originalRequest?.url?.includes('/login') || 
                         originalRequest?.url?.includes('/register') || 
                         originalRequest?.url?.includes('/refresh');
    
    // Log détaillé des erreurs
    if (error.response) {
      console.error('❌ API Error:', {
        status: error.response.status,
        statusText: error.response.statusText,
        url: error.response.config.url,
        data: error.response.data,
      });
      
      if (error.response.status === 422) {
        console.log('🔍 Validation errors:', error.response.data);
      }
    } else if (error.request) {
      console.error('❌ No response received:', {
        request: error.request,
        message: 'La requête a été faite mais aucune réponse n\'a été reçue'
      });
    } else {
      console.error('❌ Request setup error:', error.message);
    }
    
    // Gestion de l'expiration du token (401)
    if (error.response?.status === 401) {
      if (isAuthRequest) {
        console.warn('🔒 Erreur d\'authentification:', 
          isLoginRequest ? 'Identifiants incorrects' : 'Token invalide'
        );
        return Promise.reject(error);
      }
      
      console.warn('⚠️ Token expiré, tentative de rafraîchissement...');
      
      if (originalRequest && !originalRequest._retry) {
        originalRequest._retry = true;
        
        const refreshToken = localStorage.getItem('refresh_token');
        
        if (refreshToken) {
          return api.post('/refresh', { refresh_token: refreshToken })
            .then(refreshResponse => {
              localStorage.setItem('auth_token', refreshResponse.data.access_token);
              localStorage.setItem('refresh_token', refreshResponse.data.refresh_token);
              
              originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access_token}`;
              return api(originalRequest);
            })
            .catch(refreshError => {
              console.warn('⚠️ Refresh token échoué, déconnexion...');
              localStorage.removeItem('auth_token');
              localStorage.removeItem('refresh_token');
              localStorage.removeItem('user');
              
              if (!window.location.pathname.includes('/login')) {
                window.location.href = '/admin/login';
              }
              return Promise.reject(refreshError);
            });
        } else {
          console.warn('⚠️ Pas de refresh token disponible, déconnexion...');
        }
      }
      
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/admin/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Fonction utilitaire pour gérer les erreurs API
export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 422:
          if (data.errors) {
            const errors = Object.values(data.errors).flat();
            return `Erreur de validation: ${errors.join(', ')}`;
          }
          return data.message || 'Erreur de validation';
        case 401:
          return error.config?.url?.includes('/login') 
            ? 'Identifiants incorrects. Veuillez vérifier votre email et mot de passe.'
            : 'Session expirée. Veuillez vous reconnecter.';
        case 403:
          return 'Vous n\'avez pas la permission d\'effectuer cette action.';
        case 404:
          return 'Ressource non trouvée.';
        case 500:
          return 'Erreur serveur interne. Veuillez réessayer plus tard.';
        default:
          return data.message || `Erreur serveur (${status})`;
      }
    } else if (error.request) {
      return 'Impossible de contacter le serveur. Vérifiez votre connexion internet.';
    }
  }
  
  return error.message || 'Une erreur inattendue est survenue';
};

// Auth APIs
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
};

// Team Members APIs - Modifié pour gérer FormData
export const teamAPI = {
  getAll: () => api.get('/team-members'),
  getById: (id: number) => api.get(`/team-members/${id}`),
  
  create: (data: any) => {
    // Si les données sont un FormData, ne pas modifier les headers (laisser axios gérer)
    if (data instanceof FormData) {
      return api.post('/team-members', data);
    }
    return api.post('/team-members', data);
  },
  
  update: (id: number, data: any) => {
    // Si les données sont un FormData, utiliser POST avec _method=PUT pour Laravel
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      return api.post(`/team-members/${id}`, data);
    }
    return api.put(`/team-members/${id}`, data);
  },
  
  delete: (id: number) => api.delete(`/team-members/${id}`),
};

// Projects APIs
export const projectAPI = {
  getAll: () => api.get('/projects'),
  getById: (id: string | number) => api.get(`/projects/${id}`),
  
  create: (data: any) => {
    if (data instanceof FormData) {
      return api.post('/projects', data);
    }
    return api.post('/projects', data);
  },
  
  update: (id: number, data: any) => {
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      return api.post(`/projects/${id}`, data);
    }
    return api.put(`/projects/${id}`, data);
  },
  
  delete: (id: number) => api.delete(`/projects/${id}`),
};

// Contact Messages APIs
export const contactAPI = {
  getAll: () => api.get('/contact-messages'),
  getById: (id: number) => api.get(`/contact-messages/${id}`),
  create: (data: any) => api.post('/contact-messages', data),
  update: (id: number, data: any) => api.put(`/contact-messages/${id}`, data),
  delete: (id: number) => api.delete(`/contact-messages/${id}`),
};

// Dashboard Statistics APIs
export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
  getRecentActivities: () => api.get('/dashboard/activities'),
  getProjectStatus: () => api.get('/dashboard/project-status'),
  getTeamPerformance: () => api.get('/dashboard/team-performance'),
};

export default api;