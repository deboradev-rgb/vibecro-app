import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0a0e17]"></div>
      
      {/* Subtle overlay glassmorphism + noise texture optionnel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_50%)]"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-6 md:mb-8 text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto mb-10 md:mb-14 font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/services"
            className="group relative px-10 py-5 bg-secondary text-white font-semibold text-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
          >
            <span className="relative z-10">Découvrir Nos Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>

          <Link
            to="/contact"
            className="group relative px-10 py-5 bg-transparent border-2 border-secondary text-secondary font-semibold text-lg rounded-xl overflow-hidden hover:bg-secondary hover:text-white transition-all duration-500 hover:scale-[1.03]"
          >
            <span className="relative z-10">Demander un Devis Gratuit</span>
          </Link>
        </motion.div>
      </div>

      {/* Subtle scroll indicator (optionnel mais élégant) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
