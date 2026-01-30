// src/components/admin/LoginForm.tsx
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, Loader2, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Message d'erreur */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 flex items-center gap-3"
        >
          <X className="w-5 h-5 flex-shrink-0" />
          {error}
        </motion.div>
      )}

      {/* Champ Email */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Adresse email
        </label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
            className="w-full px-5 py-4 pl-12 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all duration-300"
            placeholder="admin@vibecro.com"
            disabled={isLoading}
          />
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Champ Mot de passe */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Mot de passe
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-4 pl-12 pr-12 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e38f00] focus:ring-2 focus:ring-[#e38f00]/30 transition-all duration-300"
            placeholder="••••••••"
            disabled={isLoading}
          />
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            disabled={isLoading}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Bouton Connexion */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Connexion...
          </>
        ) : (
          <>
            <Lock className="w-5 h-5" />
            Se connecter
          </>
        )}
      </motion.button>

      {/* Lien mot de passe oublié */}
      <div className="text-center">
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
          onClick={(e) => e.preventDefault()}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Mot de passe oublié ?
        </a>
      </div>

      {/* Infos test */}
      <div className="mt-6 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-center">
        <p className="text-xs text-gray-400 mb-2">Identifiants de test :</p>
        <div className="text-xs text-gray-300 font-mono space-y-1">
          <p>Email: <span className="text-[#e38f00]">admin@vibecro.com</span></p>
          <p>Mot de passe: <span className="text-[#e38f00]">password</span></p>
        </div>
      </div>
    </motion.form>
  );
}