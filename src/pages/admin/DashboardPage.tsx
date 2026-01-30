import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FolderGit2,
  Users,
  LogOut,
  Bell,
  Menu,
  X,
  MessageSquare,
  Zap,
  Shield,
} from 'lucide-react';

import ProjectsManager from '../../components/admin/ProjectsManager';
import TeamManager from '../../components/admin/TeamManager';
import ContactMessagesManager from '../../components/admin/ContactMessagesManager';

const navItems = [
  { icon: LayoutDashboard, label: 'Tableau de bord', id: 'overview' },
  { icon: FolderGit2, label: 'Projets', id: 'projects' },
  { icon: Users, label: 'Équipe', id: 'team' },
  { icon: MessageSquare, label: 'Messages', id: 'messages' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [counters, setCounters] = useState({
    projects: 0,
    members: 0,
    messages: 0,
    other: 0,
  });

  const incrementProject = () => setCounters((prev) => ({ ...prev, projects: prev.projects + 1 }));
  const incrementMember = () => setCounters((prev) => ({ ...prev, members: prev.members + 1 }));
  const incrementMessage = () => setCounters((prev) => ({ ...prev, messages: prev.messages + 1 }));

  const stats = [
    { label: 'Projets', value: counters.projects, icon: FolderGit2, color: 'from-blue-600 to-blue-400', hover: 'hover:border-blue-500/50' },
    { label: 'Membres', value: counters.members, icon: Users, color: 'from-green-600 to-green-400', hover: 'hover:border-green-500/50' },
    { label: 'Messages', value: counters.messages, icon: MessageSquare, color: 'from-purple-600 to-purple-400', hover: 'hover:border-purple-500/50' },
    { label: 'Actions', value: counters.other, icon: Zap, color: 'from-[#e38f00] to-[#d48500]', hover: 'hover:border-[#e38f00]/50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white flex">
      {/* Backdrop mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 24, stiffness: 180 }}
        className="fixed inset-y-0 left-0 z-40 w-72 bg-gray-900/90 backdrop-blur-xl border-r border-gray-800/50 lg:static lg:translate-x-0 overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e38f00] to-[#d48500] flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#e38f00] to-[#d48500] bg-clip-text text-transparent">
              VIBECRO
            </span>
          </div>

          <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 text-gray-300 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[#e38f00]/20 to-[#d48500]/20 text-white border border-[#e38f00]/30 shadow-sm'
                  : 'hover:bg-gray-800/50 text-gray-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-8 left-4 right-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-950/50 hover:bg-red-900/60 text-red-400 hover:text-red-300 transition-all duration-200">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </motion.aside>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-20 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold">
                {navItems.find((item) => item.id === activeTab)?.label || 'Dashboard'}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-800/50 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e38f00] to-[#d48500] flex items-center justify-center font-bold shadow-lg">
                AD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {/* Stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className={`bg-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-[#e38f00]/40 transition-all duration-300 group`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-black text-white/90">{stat.value}</span>
                    </div>
                    <p className="text-gray-400 text-lg">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Activité récente – version unifiée avec stats */}
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">Activité récente</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex flex-col items-center p-6 rounded-2xl border border-gray-800/50 ${stat.hover} transition-all duration-300`}
                    >
                      <div className={`p-4 rounded-xl mb-4 bg-gradient-to-br ${stat.color}/10`}>
                        <stat.icon className="w-8 h-8" style={{ color: stat.color.split('to-')[1]?.replace(']', '') || '#e38f00' }} />
                      </div>
                      <span className="text-3xl font-bold">{stat.value}</span>
                      <span className="text-sm text-gray-400 mt-2">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <ProjectsManager onProjectAdded={incrementProject} />
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <TeamManager onMemberAdded={incrementMember} />
            </motion.div>
          )}

          {activeTab === 'messages' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <ContactMessagesManager onMessageProcessed={incrementMessage} />
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}