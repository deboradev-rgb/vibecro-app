// src/components/admin/ContactMessagesManager.tsx
import React, { useState, useEffect } from 'react';
import { contactAPI } from '@/lib/apiClient';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, Clock, CheckCircle, XCircle, Reply, Trash2, 
  Loader2, ChevronLeft, ChevronRight, Search 
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
}

export default function ContactMessagesManager() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      const response = await contactAPI.getAll();
      setMessages(response.data || []);
    } catch (err: any) {
      setError('Erreur lors du chargement des messages');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkAsRead = async (id: number) => {
    try {
      await contactAPI.update(id, { status: 'read' });
      fetchMessages();
    } catch (err) {
      setError('Erreur lors de la mise à jour du statut');
    }
  };

  const handleReply = async (id: number) => {
    if (!replyText.trim()) {
      setError('Veuillez entrer une réponse');
      return;
    }

    try {
      await contactAPI.update(id, {
        status: 'replied',
        admin_reply: replyText,
      });
      setSuccessMessage('Réponse envoyée avec succès !');
      setReplyText('');
      setSelectedMessage(null);
      fetchMessages();
    } catch (err) {
      setError('Erreur lors de l\'envoi de la réponse');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Confirmer la suppression définitive ?')) return;

    try {
      await contactAPI.delete(id);
      setSuccessMessage('Message supprimé');
      setSelectedMessage(null);
      fetchMessages();
    } catch (err) {
      setError('Erreur lors de la suppression');
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      new: 'bg-red-600/20 text-red-300 border-red-500/30',
      read: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
      replied: 'bg-green-600/20 text-green-300 border-green-500/30',
    };

    const labels = {
      new: 'Nouveau',
      read: 'Lu',
      replied: 'Répondu',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-[#e38f00]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Messages */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 flex items-center gap-3"
        >
          <XCircle className="w-5 h-5 flex-shrink-0" />
          {error}
        </motion.div>
      )}

      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          {successMessage}
        </motion.div>
      )}

      {/* En-tête */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Messages de contact</h2>
          <p className="text-gray-400 mt-1">
            {messages.length} message{messages.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un message..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all"
          />
        </div>
      </div>

      {/* Liste ou détail */}
      {selectedMessage ? (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {
                setSelectedMessage(null);
                setReplyText('');
              }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
              Retour à la liste
            </button>

            {getStatusBadge(selectedMessage.status)}
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">{selectedMessage.subject}</h3>

          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gray-800/50 p-4 rounded-xl">
              <div>
                <p className="text-gray-300 font-medium">{selectedMessage.name}</p>
                <p className="text-gray-400 text-sm">{selectedMessage.email}</p>
                {selectedMessage.phone && (
                  <p className="text-gray-400 text-sm">Tél: {selectedMessage.phone}</p>
                )}
              </div>
              <div className="text-gray-500 text-sm sm:ml-auto">
                {new Date(selectedMessage.created_at).toLocaleString('fr-FR', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </div>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border-l-4 border-[#e38f00]">
              <p className="text-gray-300 whitespace-pre-line">{selectedMessage.message}</p>
            </div>

            {selectedMessage.admin_reply && (
              <div className="bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                <p className="text-blue-300 text-sm font-medium mb-2">Réponse envoyée :</p>
                <p className="text-gray-300 whitespace-pre-line">{selectedMessage.admin_reply}</p>
              </div>
            )}
          </div>

          {selectedMessage.status !== 'replied' && (
            <div className="space-y-4">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Tapez votre réponse ici..."
                className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all min-h-[140px]"
                rows={6}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleReply(selectedMessage.id)}
                  className="flex-1 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white py-3 px-6 rounded-xl font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Reply size={18} />
                  Envoyer la réponse
                </button>

                <button
                  onClick={() => handleDelete(selectedMessage.id)}
                  className="flex-1 bg-red-900/50 hover:bg-red-800/50 text-red-300 py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Trash2 size={18} />
                  Supprimer
                </button>
              </div>
            </div>
          )}
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {messages.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <Mail className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Aucun message</h3>
              <p>Les messages de contact apparaîtront ici</p>
            </div>
          ) : (
            messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-xl border cursor-pointer transition-all ${
                  message.status === 'new'
                    ? 'bg-red-900/20 border-red-500/30 hover:bg-red-900/30'
                    : 'bg-gray-900/70 border-gray-800/50 hover:border-gray-600/50'
                }`}
                onClick={() => {
                  setSelectedMessage(message);
                  if (message.status === 'new') handleMarkAsRead(message.id);
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusBadge(message.status)}
                      <h4 className="font-semibold text-white truncate">{message.subject}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      De : <span className="text-white">{message.name}</span> • {message.email}
                    </p>
                  </div>

                  <div className="text-right text-sm text-gray-500">
                    {new Date(message.created_at).toLocaleDateString('fr-FR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
}