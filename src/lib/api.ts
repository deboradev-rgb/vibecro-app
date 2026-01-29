// src/lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

interface ApiResponse<T> {
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.loadToken();
  }

  private loadToken() {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token');
    }
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  async request<T = any>(
    method: string,
    endpoint: string,
    data?: any
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    const options: RequestInit = {
      method,
      headers: this.getHeaders(),
    };

    if (data && (method !== 'GET' && method !== 'HEAD')) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const error = await response.json();
        return {
          message: error.message || 'An error occurred',
          errors: error.errors,
        };
      }

      const responseData = await response.json();
      return { data: responseData };
    } catch (error) {
      return {
        message: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // Auth endpoints
  async register(name: string, email: string, password: string, passwordConfirmation: string) {
    return this.request('/register', 'POST', {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });
  }

  async login(email: string, password: string) {
    const response = await this.request<{ user: any; token: string }>('/login', 'POST', {
      email,
      password,
    });

    if (response.data?.token) {
      this.setToken(response.data.token);
    }

    return response;
  }

  async logout() {
    const response = await this.request('/logout', 'POST');
    this.clearToken();
    return response;
  }

  async getMe() {
    return this.request('/me', 'GET');
  }

  // Team Members
  async getTeamMembers() {
    return this.request('/team-members', 'GET');
  }

  async getTeamMember(id: number) {
    return this.request(`/team-members/${id}`, 'GET');
  }

  async createTeamMember(data: any) {
    return this.request('/team-members', 'POST', data);
  }

  async updateTeamMember(id: number, data: any) {
    return this.request(`/team-members/${id}`, 'PATCH', data);
  }

  async deleteTeamMember(id: number) {
    return this.request(`/team-members/${id}`, 'DELETE');
  }

  // Projects
  async getProjects() {
    return this.request('/projects', 'GET');
  }

  async getProject(id: string | number) {
    return this.request(`/projects/${id}`, 'GET');
  }

  async createProject(data: any) {
    return this.request('/projects', 'POST', data);
  }

  async updateProject(id: number, data: any) {
    return this.request(`/projects/${id}`, 'PATCH', data);
  }

  async deleteProject(id: number) {
    return this.request(`/projects/${id}`, 'DELETE');
  }

  // Contact Messages
  async sendContactMessage(data: any) {
    return this.request('/contact-messages', 'POST', data);
  }

  async getContactMessages() {
    return this.request('/contact-messages', 'GET');
  }

  async getContactMessage(id: number) {
    return this.request(`/contact-messages/${id}`, 'GET');
  }

  async replyContactMessage(id: number, reply: string) {
    return this.request(`/contact-messages/${id}`, 'PATCH', {
      status: 'replied',
      admin_reply: reply,
    });
  }

  async deleteContactMessage(id: number) {
    return this.request(`/contact-messages/${id}`, 'DELETE');
  }
}

export const apiClient = new ApiClient();
export default apiClient;
