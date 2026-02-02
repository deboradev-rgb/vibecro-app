import  'react';
import { motion } from 'framer-motion';
import {LoginForm} from '../../components/admin/LoginForm';
import { Shield, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Fond néon subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#e38f0010] via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-[#d4850010] via-transparent to-transparent opacity-30 bottom-0 right-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo + Titre */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e38f00] via-[#f4a261] to-[#d48500] mb-6 shadow-2xl shadow-[#e38f00]/30"
          >
            <Shield className="w-10 h-10 text-white drop-shadow-md" />
          </motion.div>

          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-3 tracking-tight"
          >
            VIBECRO Admin
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-lg sm:text-xl font-medium"
          >
            Espace sécurisé de gestion
          </motion.p>
        </div>

        {/* Carte de connexion */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="bg-gray-900/70 backdrop-blur-2xl border border-gray-700/50 rounded-3xl shadow-2xl shadow-black/60 p-8 sm:p-10"
        >
          {/* Icône sécurité */}
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <Lock className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Connexion sécurisée
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Entrez vos identifiants
            </p>
          </div>

          {/* Formulaire */}
          <LoginForm />

          {/* Footer */}
          <p className="mt-10 text-center text-sm text-gray-500/80">
            © {new Date().getFullYear()} VIBECRO • Tous droits réservés
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}