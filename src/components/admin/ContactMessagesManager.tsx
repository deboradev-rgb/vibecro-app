// src/components/admin/ContactMessagesManager.tsx
import { useState, useEffect } from 'react';
import { contactAPI } from '@/lib/apiClient';
import { motion } from 'framer-motion';
import {
  Mail, CheckCircle, XCircle, Reply, Trash2,
  Loader2, ChevronLeft, Search, Clock, User,
  Phone, Send, Filter, RefreshCw
} from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  admin_reply?: string;
  created_at: string;
  updated_at?: string;
}

interface ContactMessagesManagerProps {
  onMessageProcessed?: () => void;
}

export default function ContactMessagesManager({ onMessageProcessed }: ContactMessagesManagerProps) {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [replyText, setReplyText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isReplying, setIsReplying] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    filterMessages();
  }, [messages, searchTerm, statusFilter]);

  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await contactAPI.getAll();
      
      // Adapter selon la structure de réponse de ton API
      const messagesData = response.data?.data || response.data || [];
      setMessages(Array.isArray(messagesData) ? messagesData : []);
      
    } catch (err: any) {
      console.error('❌ Erreur chargement messages:', err);
      setError(err.response?.data?.message || 'Impossible de charger les messages de contact');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchMessages();
  };

  const filterMessages = () => {
    let filtered = [...messages];

    // Filtre par recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(msg => 
        msg.name.toLowerCase().includes(term) ||
        msg.email.toLowerCase().includes(term) ||
        msg.subject.toLowerCase().includes(term) ||
        msg.message.toLowerCase().includes(term) ||
        (msg.phone && msg.phone.toLowerCase().includes(term))
      );
    }

    // Filtre par statut
    if (statusFilter !== 'all') {
      filtered = filtered.filter(msg => msg.status === statusFilter);
    }

    // Tri : les plus récents en premier
    filtered.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    setFilteredMessages(filtered);
  };

  const handleMarkAsRead = async (id: number) => {
    try {
      await contactAPI.update(id, { status: 'read' });
      setSuccessMessage('Message marqué comme lu');
      onMessageProcessed?.();
      await fetchMessages();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('❌ Erreur mark as read:', err);
      setError('Erreur lors de la mise à jour du statut');
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleReply = async (id: number) => {
    if (!replyText.trim()) {
      setError('Veuillez entrer une réponse');
      setTimeout(() => setError(null), 3000);
      return;
    }

    try {
      setIsReplying(true);
      
      await contactAPI.update(id, {
        status: 'replied',
        admin_reply: replyText.trim(),
      });

      setSuccessMessage('✅ Réponse envoyée avec succès !');
      setReplyText('');
      setSelectedMessage(null);
      onMessageProcessed?.();
      await fetchMessages();
      
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err: any) {
      console.error('❌ Erreur envoi réponse:', err);
      setError(err.response?.data?.message || 'Erreur lors de l\'envoi de la réponse');
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsReplying(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('⚠️ Confirmer la suppression définitive de ce message ?')) return;

    try {
      await contactAPI.delete(id);
      setSuccessMessage('🗑️ Message supprimé avec succès');
      
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
      
      onMessageProcessed?.();
      await fetchMessages();
      
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err: any) {
      console.error('❌ Erreur suppression:', err);
      setError(err.response?.data?.message || 'Erreur lors de la suppression du message');
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      const unreadMessages = messages.filter(m => m.status === 'new');
      
      for (const msg of unreadMessages) {
        await contactAPI.update(msg.id, { status: 'read' });
      }
      
      setSuccessMessage(`📚 ${unreadMessages.length} message(s) marqué(s) comme lu`);
      onMessageProcessed?.();
      await fetchMessages();
      
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('❌ Erreur mark all as read:', err);
      setError('Erreur lors du marquage des messages');
      setTimeout(() => setError(null), 3000);
    }
  };

  const getStatusBadge = (status: ContactMessage['status']) => {
    const styles = {
      new: 'bg-red-600/20 text-red-300 border-red-500/30',
      read: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
      replied: 'bg-green-600/20 text-green-300 border-green-500/30',
    };

    const labels = {
      new: '🆕 Nouveau',
      read: '📖 Lu',
      replied: '✅ Répondu',
    };

    return (
      <span className={`inline-flex px-3 py-1 text-xs font-medium border rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));

    if (diffMinutes < 60) {
      return `Il y a ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`;
    } else if (diffHours < 24) {
      return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`;
    } else if (diffDays === 1) {
      return 'Hier';
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} jours`;
    } else {
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  const getStatusCount = (status: string) => {
    return messages.filter(m => m.status === status).length;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 animate-spin text-[#e38f00] mb-4" />
        <p className="text-gray-400">Chargement des messages...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Messages de notification */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 flex items-center gap-3 shadow-lg"
        >
          <XCircle className="w-5 h-5 flex-shrink-0" />
          <span className="flex-1">{error}</span>
          <button onClick={() => setError(null)} className="text-red-300 hover:text-red-100">
            <XCircle className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300 flex items-center gap-3 shadow-lg"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="flex-1">{successMessage}</span>
        </motion.div>
      )}

      {/* En-tête avec statistiques */}
      <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Mail className="w-8 h-8 text-[#e38f00]" />
              Messages de contact
            </h2>
            <p className="text-gray-400 mt-2">
              {filteredMessages.length} message{filteredMessages.length !== 1 ? 's' : ''} affiché{filteredMessages.length !== 1 ? 's' : ''}
              {messages.length !== filteredMessages.length && ` (sur ${messages.length} total)`}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
              Actualiser
            </button>
            
            {messages.filter(m => m.status === 'new').length > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                className="px-4 py-2 bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-300 rounded-xl transition-all flex items-center gap-2"
              >
                <CheckCircle size={18} />
                Tout marquer comme lu
              </button>
            )}
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Total</span>
              <Mail className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-2xl font-bold text-white">{messages.length}</span>
          </div>
          
          <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-300 text-sm">Nouveaux</span>
              <span className="text-red-400">🆕</span>
            </div>
            <span className="text-2xl font-bold text-red-300">{getStatusCount('new')}</span>
          </div>
          
          <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-300 text-sm">En cours</span>
              <Clock className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-yellow-300">{getStatusCount('read')}</span>
          </div>
          
          <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-300 text-sm">Répondus</span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-2xl font-bold text-green-300">{getStatusCount('replied')}</span>
          </div>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher par nom, email, sujet..."
            className="w-full pl-12 pr-4 py-3 bg-gray-900/70 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
          />
        </div>

        <div className="flex gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 bg-gray-900/70 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
          >
            <option value="all">📋 Tous les statuts</option>
            <option value="new">🆕 Nouveaux</option>
            <option value="read">📖 Lus</option>
            <option value="replied">✅ Répondus</option>
          </select>

          {(searchTerm || statusFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
              }}
              className="px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all flex items-center gap-2"
            >
              <Filter size={18} />
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      {/* Vue détaillée ou liste */}
      {selectedMessage ? (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl p-6 sm:p-8"
        >
          {/* En-tête du message détaillé */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
            <button
              onClick={() => {
                setSelectedMessage(null);
                setReplyText('');
              }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour à la liste
            </button>

            <div className="flex items-center gap-3">
              {getStatusBadge(selectedMessage.status)}
              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="p-2 bg-red-900/30 hover:bg-red-800/50 text-red-300 rounded-lg transition-all"
                title="Supprimer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Informations expéditeur */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{selectedMessage.subject}</h3>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-5 bg-gray-800/50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e38f00] to-[#d48500] flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">{selectedMessage.name}</p>
                  <a href={`mailto:${selectedMessage.email}`} className="text-[#e38f00] text-sm hover:underline">
                    {selectedMessage.email}
                  </a>
                  {selectedMessage.phone && (
                    <a href={`tel:${selectedMessage.phone}`} className="flex items-center gap-1 text-gray-400 text-sm mt-1 hover:text-white">
                      <Phone size={14} />
                      {selectedMessage.phone}
                    </a>
                  )}
                </div>
              </div>
              
              <div className="sm:ml-auto text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {formatDate(selectedMessage.created_at)}
                </div>
              </div>
            </div>
          </div>

          {/* Message original */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Message :</h4>
            <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-[#e38f00]">
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                {selectedMessage.message}
              </p>
            </div>
          </div>

          {/* Réponse précédente si existe */}
          {selectedMessage.admin_reply && (
            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                <Reply size={16} />
                Votre réponse :
              </h4>
              <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {selectedMessage.admin_reply}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  Envoyé le {new Date(selectedMessage.updated_at || '').toLocaleString('fr-FR')}
                </p>
              </div>
            </div>
          )}

          {/* Formulaire de réponse */}
          {selectedMessage.status !== 'replied' && (
            <div className="space-y-4 pt-6 border-t border-gray-800">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Reply size={20} className="text-[#e38f00]" />
                Répondre à {selectedMessage.name}
              </h4>
              
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Tapez votre réponse ici..."
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all min-h-[150px] resize-y"
                rows={6}
                disabled={isReplying}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleReply(selectedMessage.id)}
                  disabled={isReplying || !replyText.trim()}
                  className="flex-1 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white py-4 px-6 rounded-xl font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isReplying ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer la réponse
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    if (selectedMessage.status === 'new') {
                      handleMarkAsRead(selectedMessage.id);
                    }
                  }}
                  disabled={selectedMessage.status !== 'new'}
                  className="px-6 py-4 bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-300 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Marquer comme lu
                </button>
              </div>
            </div>
          )}
        </motion.div>
      ) : (
        /* Liste des messages */
        <div className="space-y-4">
          {filteredMessages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-gray-900/50 border border-gray-800 rounded-2xl"
            >
              <Mail className="w-20 h-20 mx-auto mb-4 text-gray-600" />
              <h3 className="text-2xl font-semibold text-white mb-2">Aucun message trouvé</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm || statusFilter !== 'all'
                  ? 'Essayez de modifier vos filtres de recherche'
                  : 'Les messages de contact apparaîtront ici'}
              </p>
              {(searchTerm || statusFilter !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setStatusFilter('all');
                  }}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-all"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </motion.div>
          ) : (
            filteredMessages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                className={`group relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  message.status === 'new'
                    ? 'bg-red-900/10 border-red-500/30 hover:border-red-500/50 hover:bg-red-900/20'
                    : message.status === 'read'
                    ? 'bg-yellow-900/10 border-yellow-500/30 hover:border-yellow-500/50 hover:bg-yellow-900/20'
                    : 'bg-gray-900/50 border-gray-800 hover:border-[#e38f00]/50 hover:bg-gray-900/70'
                }`}
                onClick={() => {
                  setSelectedMessage(message);
                  if (message.status === 'new') {
                    handleMarkAsRead(message.id);
                  }
                }}
              >
                {/* Indicateur de nouveau message */}
                {message.status === 'new' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-gray-900"
                  >
                    !
                  </motion.div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      {getStatusBadge(message.status)}
                      <h4 className="text-lg font-semibold text-white truncate">
                        {message.subject}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-400 flex items-center gap-1">
                        <User size={14} className="text-gray-500" />
                        <span className="text-white font-medium">{message.name}</span>
                      </span>
                      <span className="text-gray-600">•</span>
                      <a 
                        href={`mailto:${message.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#e38f00] hover:underline truncate max-w-[200px]"
                      >
                        {message.email}
                      </a>
                    </div>

                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {message.message}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                    <div className="text-xs text-gray-500 whitespace-nowrap flex items-center gap-1">
                      <Clock size={12} />
                      {formatDate(message.created_at)}
                    </div>
                    
                    <div className="flex gap-2">
                      {message.status === 'new' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMarkAsRead(message.id);
                          }}
                          className="p-2 bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-300 rounded-lg transition-all"
                          title="Marquer comme lu"
                        >
                          <CheckCircle size={16} />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(message.id);
                        }}
                        className="p-2 bg-red-900/30 hover:bg-red-800/50 text-red-300 rounded-lg transition-all"
                        title="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {message.admin_reply && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-sm text-green-400 flex items-center gap-2">
                      <Reply size={14} />
                      Réponse envoyée
                    </p>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
}