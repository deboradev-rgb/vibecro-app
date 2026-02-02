import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative overflow-hidden text-white w-full bg-black dark:bg-black">
      {/* Background avec seulement les 3 couleurs */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-primary-900 to-black"></div>
      
      {/* Éléments décoratifs orange */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-black text-2xl mb-4 text-gradient-primary">VIBECRO</h3>
            <p className="text-white/80 mb-6 leading-relaxed">Solutions digitales innovantes pour transformer votre entreprise.</p>
            <motion.div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} className="text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Développement Web', to: '/services' },
                { label: 'Solutions IoT', to: '/services' },
                { label: 'Intelligence Artificielle', to: '/services' },
                { label: 'Consonsulation', to: '/services' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    to={item.to}
                    className="text-white/80 hover:text-primary-300 transition-colors inline-flex items-center"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100">→</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Entreprise */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 text-white">Entreprise</h4>
            <ul className="space-y-3">
              {[
                { label: 'À propos', to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
                { label: 'services', to: '/services' }
                
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    to={item.to}
                    className="text-white/80 hover:text-primary-300 transition-colors inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center gap-3 text-white/80 hover:text-white transition"
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail size={18} className="text-white" />
                </motion.div>
                <a href="mailto:hello@vibecro.com" className="hover:text-primary-300">groupe-vibecro@outlook.fr</a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 text-white/80 hover:text-white transition"
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone size={18} className="text-white" />
                </motion.div>
                <a href="tel:+299 01 40 96 33 33" className="hover:text-primary-300">+299 01 40 96 33 33</a>
              </motion.li>
                    
                    <motion.li 
                className="flex items-center gap-3 text-white/80 hover:text-white transition"
                whileHover={{ x: 8 }}>
                    <motion.div
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone size={18} className="text-white" />
                </motion.div>
                <a href="tel:+299 01 21 31 54 64" className="hover:text-primary-300">+299 01 21 31 54 64</a>
              </motion.li>
                 
              <motion.li 
                className="flex items-start gap-3 text-white/80"
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.1 }}
                >
                  <MapPin size={18} className="text-white" />
                </motion.div>
                <span className="pt-0.5">Abomey-Calavi , Derrière le CEG Godomey</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Legal Links */}
        <motion.div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} VIBECRO. Tous droits réservés.</p>
          <motion.div 
            className="flex gap-6 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { label: 'Politique de confidentialité', to: '/legal/privacy' },
              { label: 'Mention Legal', to: '/legal/terms' },
              { label: 'Gestion des cookies', to: '/legal/cookies' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                <Link 
                  to={item.to}
                  className="hover:text-white transition-colors inline-block"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}