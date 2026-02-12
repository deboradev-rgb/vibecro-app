import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { dashboardAPI } from '@/lib/apiClient';
import api from '@/lib/apiClient';
import ProjectsManager from '@/components/admin/ProjectsManager';
import TeamManager from '@/components/admin/TeamManager';
import ContactMessagesManager from '@/components/admin/ContactMessagesManager';
import BlogManager from '@/components/admin/BlogManager'; // ← NOUVEAU
import Logo from '@/public/Logo.png';
import {
  LogOut, Briefcase, Users, MessageSquare, Home, Settings,
  Bell, ChevronRight, ChevronLeft, Activity, Clock,
  Target, Plus, X, Menu, Search, Edit
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Tab = 'dashboard' | 'projects' | 'team' | 'messages' | 'blog'  | 'settings';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  time: string;
  read: boolean;
  link?: Tab;
}

interface StatCard {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  time: string;
  icon: React.ReactNode;
  color?: string;
  type?: 'add' | 'update' | 'delete' | 'message';
}

interface ProjectInProgress {
  id: number | string;
  title: string;
  progress: number;
  start_date: string | null;
  deadline: string | null;
  status: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [counters, setCounters] = useState({
    projects: 0,
    members: 0,
    messages: 0,
    successRate: 0,
    // articles: 0,  // ← tu peux l’ajouter si tu veux un compteur blog
  });

  const [projectsInProgress, setProjectsInProgress] = useState<ProjectInProgress[]>([]);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ProjectInProgress>>({});

  const [activities, setActivities] = useState<ActivityItem[]>([]);

  const { t, i18n } = useTranslation();

  // Préférences utilisateur
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('adminPreferences');
    return saved
      ? JSON.parse(saved)
      : {
          darkMode: true,
          emailNotifications: true,
          pushNotifications: true,
          preferredLanguage: 'fr',
        };
  });

  const savePreferences = (updates: Partial<typeof preferences>) => {
    setPreferences(prev => {
      const newPrefs = { ...prev, ...updates };
      localStorage.setItem('adminPreferences', JSON.stringify(newPrefs));
      return newPrefs;
    });
  };

  useEffect(() => {
    if (preferences.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [preferences.darkMode]);

  useEffect(() => {
    i18n.changeLanguage(preferences.preferredLanguage);
  }, [preferences.preferredLanguage, i18n]);

  // Ajouter une activité
  const addActivity = (action: string, icon: React.ReactNode, type?: ActivityItem['type'], color?: string) => {
    const now = new Date();
    const timeAgo = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    setActivities(prev => {
      const newItem: ActivityItem = {
        id: now.getTime().toString(),
        user: user?.name || 'Admin',
        action,
        time: timeAgo,
        icon,
        type,
        color: color || 'text-slate-300',
      };
      return [newItem, ...prev].slice(0, 12);
    });
  };

  const loadDashboardData = async () => {
    try {
      const statsRes = await dashboardAPI.getStats();
      setCounters({
        projects: statsRes.data.projects || 0,
        members: statsRes.data.members || 0,
        messages: statsRes.data.messages || 0,
        successRate: statsRes.data.successRate || 0,
      });

      const notifRes = await api.get('/notifications');
      setNotifications(notifRes.data);

      const projectsRes = await api.get('/projects', {
        params: { status: 'en_cours' },
      });
      setProjectsInProgress(projectsRes.data.data || projectsRes.data || []);
    } catch (error) {
      console.error('Erreur chargement dashboard:', error);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleProjectAdded = () => {
    addActivity('a ajouté un nouveau projet', <Plus className="w-5 h-5" />, 'add', 'text-emerald-400');
    loadDashboardData();
  };

  const handleMemberAdded = () => {
    addActivity('a ajouté un membre à l’équipe', <Users className="w-5 h-5" />, 'add', 'text-emerald-400');
    loadDashboardData();
  };

  const handleMessageReceived = () => {
    addActivity('nouveau message reçu', <MessageSquare className="w-5 h-5" />, 'message', 'text-violet-400');
    loadDashboardData();
  };

  const handleBlogPostSaved = () => {
    addActivity('a publié / modifié un article de blog', <Edit className="w-5 h-5" />, 'add', 'text-sky-400');
    // Optionnel : recharger stats si tu ajoutes un compteur articles
  };

  const stats: StatCard[] = [
    { label: 'Projets actifs', value: counters.projects, icon: <Activity className="w-7 h-7" />, color: 'from-blue-600 to-blue-500' },
    { label: 'Membres équipe', value: counters.members, icon: <Users className="w-7 h-7" />, color: 'from-emerald-600 to-emerald-500' },
    { label: 'Messages non lus', value: counters.messages, icon: <MessageSquare className="w-7 h-7" />, color: 'from-violet-600 to-violet-500' },
    { label: 'Taux de réussite', value: `${counters.successRate}%`, icon: <Target className="w-7 h-7" />, color: 'from-amber-600 to-amber-500' },
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'projects', label: 'Projets', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'team', label: 'Équipe', icon: <Users className="w-5 h-5" /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'blog', label: 'Blog', icon: <Edit className="w-5 h-5" /> }, // ← NOUVEL ONGLET
    { id: 'settings', label: 'Paramètres', icon: <Settings className="w-5 h-5" /> },
  ] as const;

  useEffect(() => {
    document.title = `Vibecro Admin - ${tabs.find(t => t.id === activeTab)?.label || 'Dashboard'}`;
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }, [activeTab, mobileMenuOpen]);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      navigate('/admin/login');
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => setNotifications([]);

  const renderDashboard = () => (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Tableau de bord
          </h1>
          <p className="text-slate-400 mt-2">
            Bienvenue{user?.name ? `, ${user.name}` : ''} • {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          let targetTab: Tab | null = null;
          if (stat.label === 'Projets actifs') targetTab = 'projects';
          if (stat.label === 'Membres équipe') targetTab = 'team';
          if (stat.label === 'Messages non lus') targetTab = 'messages';

          return (
            <button
              key={stat.label}
              onClick={() => targetTab && setActiveTab(targetTab)}
              className={`
                group relative w-full text-left
                bg-slate-800/70 backdrop-blur-md border border-slate-700/80
                rounded-2xl p-6 lg:p-7
                hover:border-slate-500/60 hover:shadow-xl hover:shadow-slate-900/30
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:ring-offset-2 focus:ring-offset-slate-950
                cursor-pointer
              `}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {stat.icon}
                </div>
              </div>

              <div className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
                {stat.value}
              </div>

              <div className="text-lg font-medium text-slate-300 group-hover:text-slate-100 transition-colors flex items-center gap-2">
                {stat.label}
                {targetTab && (
                  <span className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                    → voir
                  </span>
                )}
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight className="w-6 h-6 text-amber-400" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Activité récente */}
      <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-7 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Activité récente</h2>
          <Clock className="w-6 h-6 text-slate-400" />
        </div>

        {activities.length === 0 ? (
          <div className="text-center py-16 text-slate-500 text-lg">
            Aucune activité récente pour le moment
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
            {activities.map(act => (
              <div
                key={act.id}
                className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                  act.type === 'add' ? 'bg-emerald-950/20' :
                  act.type === 'delete' ? 'bg-rose-950/20' :
                  act.type === 'message' ? 'bg-violet-950/20' :
                  'bg-slate-700/30'
                }`}
              >
                <div className={`p-3 rounded-xl shrink-0 ${
                  act.type === 'add' ? 'bg-emerald-500/20 text-emerald-400' :
                  act.type === 'delete' ? 'bg-rose-500/20 text-rose-400' :
                  act.type === 'message' ? 'bg-violet-500/20 text-violet-400' :
                  'bg-slate-600/70 text-slate-300'
                }`}>
                  {act.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-slate-100">
                    <span className="font-semibold">{act.user}</span>{' '}
                    {act.action}
                  </p>
                  <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                    <Clock size={14} /> {act.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();

      case 'projects':
        return <ProjectsManager onProjectAdded={handleProjectAdded} />;

      case 'team':
        return <TeamManager onMemberAdded={handleMemberAdded} />;

      case 'messages':
        return <ContactMessagesManager onNewMessage={handleMessageReceived} />;

      case 'blog':
        return <BlogManager onPostSaved={handleBlogPostSaved} />; // ← INTÉGRATION ICI


      case 'settings':
        return (
          <div className="max-w-3xl mx-auto space-y-10">
            {/* ... (le code des paramètres reste identique) */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-800
          transform transition-transform duration-300 lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-1 border-b border-slate-800 flex items-center justify-center relative">
          <div className="w-20 h-20 lg:w-24 lg:h-24 transition-all duration-300 group">
            <img
              src={Logo}
              alt="Vibecro Logo"
              className="
                w-full h-full object-contain
                drop-shadow-[0_8px_16px_rgba(245,158,11,0.35)]
                group-hover:drop-shadow-[0_12px_24px_rgba(245,158,11,0.5)]
                group-hover:scale-110
                transition-all duration-300 ease-out
              "
            />
          </div>

          <button
            className="absolute right-6 top-6 lg:hidden text-slate-400 hover:text-amber-400 transition-colors duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-lg shadow-md">
              {user?.name?.[0]?.toUpperCase() || 'A'}
            </div>
            <div className="min-w-0">
              <p className="font-semibold truncate">{user?.name || 'Administrateur'}</p>
              <p className="text-sm text-slate-400 truncate">{user?.email}</p>
            </div>
          </div>
        </div>

        <nav className="p-5 space-y-1.5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-colors text-left
                ${activeTab === tab.id
                  ? 'bg-amber-500/20 text-amber-300 border-l-4 border-amber-500 font-medium'
                  : 'text-slate-300 hover:bg-slate-800/70'
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-8 left-5 right-5">
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-rose-950/70 hover:bg-rose-900/80 text-rose-300 transition disabled:opacity-50"
          >
            <LogOut size={18} />
            {isLoading ? 'Déconnexion...' : 'Déconnexion'}
          </button>
        </div>
      </aside>

      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'lg:ml-72' : ''} transition-all duration-300`}>
        <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800/80 backdrop-blur-lg shadow-sm">
          <div className="px-6 py-3.5 flex items-center justify-between gap-6">
            <div className="flex items-center gap-5 flex-1">
              <button 
                className="lg:hidden text-slate-300 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>

              <button 
                className="hidden lg:block text-slate-400 hover:text-slate-200 p-2 rounded-lg hover:bg-slate-800/60 transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>

              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un projet, membre, message..."
                    className="w-full bg-slate-900/70 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-600/70 transition-colors placeholder:text-slate-500"
                  />
                  <Search 
                    size={16} 
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" 
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative">
                <button 
                  className="p-2 rounded-xl hover:bg-slate-800/70 relative transition-colors"
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                >
                  <Bell size={20} className="text-slate-300" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold min-w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-slate-950">
                      {unreadCount}
                    </span>
                  )}
                </button>

              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-600/90 flex items-center justify-center font-semibold shadow-md border border-amber-500/30">
                  {user?.name?.[0]?.toUpperCase() || '?'}
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium">{user?.name ?? 'Administrateur'}</div>
                  <div className="text-xs text-slate-500">{user?.email ? user.email.split('@')[0] : '—'}</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {renderContent()}
        </main>

        <footer className="sticky bottom-0 z-20 bg-gray-950/95 backdrop-blur-lg border-t border-gray-800/50 px-6 py-4 text-sm text-gray-400 flex justify-between items-center">
          <div>© {new Date().getFullYear()} Vibecro Admin</div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              Système opérationnel
            </span>
            <span>Version 2.5</span>
          </div>
        </footer>
      </div>
    </div>
  );
}