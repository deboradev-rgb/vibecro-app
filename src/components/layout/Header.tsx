import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import GlobalThemeToggle from '@/components/layout/GlobalThemeToggle'
import Logo from '@/public/Logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { 
      label: 'Accueil', 
      to: '/',
      exact: true,
    },
    { 
      label: 'Services', 
      to: '/services',
      dropdown: [
        { label: 'IoT & Tracking', to: '/services/iot-tracking' },
        { label: 'Solutions RH-IA', to: '/services/rh-ia-solutions' },
        { label: 'Clientèle Plus', to: '/services/clientele-plus'},
        { label: 'Conciergerie Touristique', to: '/services/conciergerie-touristique'},
        { label: 'Développement Web', to: '/services/developpement-web' },
        { label: 'Tous les services', to: '/services' }
      ]
    },
    { 
      label: 'Realisation', 
      to: '/realisation'
    },
    { 
      label: 'Blog', 
      to: '/blog'
    },
    { 
      label: 'À propos', 
      to: '/about'
    },
    { 
      label: 'Contact', 
      to: '/contact'
    }
  ];

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const isActive = (to: string, exact = false) => {
    if (exact) {
      return pathname === to
    }
    return pathname.startsWith(to)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white dark:bg-black backdrop-blur-xl border-b border-white/20 dark:border-black/20 shadow-2xl shadow-primary/20"
          : "bg-white dark:bg-black backdrop-blur-xl"
      )}
    >
      <div className="w-full h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src={Logo} alt="Vibecro Logo" className="w-50 h-10 object-contain" />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className={cn(
                      "flex items-center font-medium transition-colors duration-300 relative",
                      isActive(item.to) 
                        ? "text-primary-600 dark:text-primary-400 font-semibold" 
                        : "text-black/90 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 ml-1 transition-transform duration-300",
                      openDropdown === item.label && "rotate-180"
                    )} />
                  </button>
                  
                  {/* Dropdown Indicator for active item */}
                  {isActive(item.to) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  )}
                  
                  {/* Dropdown Menu */}
                  <div className={cn(
                    "absolute left-0 mt-2 w-64 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/20 border border-white/20 dark:border-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2",
                    openDropdown === item.label && "opacity-100 visible translate-y-0"
                  )}>
                    <div className="p-2">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          to={subItem.to}
                          className="flex items-center px-4 py-3 text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-white/50 dark:hover:bg-black/50 group/item"
                          style={{ transitionDelay: `${index * 50}ms` }}
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="font-medium">{subItem.label}</span>
                          <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
              <div key={item.label} className="relative">
                {isActive(item.to, item.exact) ? (
                  <div className="text-primary-600 dark:text-primary-400 font-semibold relative">
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {/* Vous pouvez ajouter une navigation ici si nécessaire */}}
                  >
                    <Link
                      to={item.to}
                      className="text-black/90 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.button>
                )}
              </div>
            );
          })}

          {/* Theme Toggle */}
          <div className="ml-4">
            <GlobalThemeToggle />
          </div>
        </div>

        {/* CTA Button + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* CTA Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <Link 
              to="/contact?type=quote" 
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform group-hover:scale-105">
                <span className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Demander un devis
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-black dark:text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden py-6 border-t border-white/20 dark:border-black/20"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.label} className="space-y-2">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={cn(
                        "flex items-center justify-between w-full text-left font-medium transition-colors duration-300 py-3",
                        isActive(item.to)
                          ? "text-primary-600 dark:text-primary-400 font-semibold"
                          : "text-black/90 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        openDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                    
                    <div className={cn(
                      "pl-4 space-y-2 transition-all duration-300 overflow-hidden",
                      openDropdown === item.label ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.to}
                          className="block py-2 text-black/70 dark:text-white/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setOpenDropdown(null)
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "py-3 font-medium transition-colors duration-300",
                    isActive(item.to, item.exact)
                      ? "text-primary-600 dark:text-primary-400 font-semibold relative"
                      : "text-black/90 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {isActive(item.to, item.exact) && (
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 mt-1" />
                  )}
                </Link>
              );
            })}
            
            {/* Theme Toggle Mobile */}
            <div className="pt-4 border-t border-white/20 dark:border-black/20">
              <div className="flex items-center justify-between py-3">
                <span className="text-black/90 dark:text-white/90">Mode sombre</span>
                <GlobalThemeToggle />
              </div>
            </div>
            
            {/* CTA Mobile */}
            <div className="pt-4">
              <Link 
                to="/contact?type=quote" 
                className="block w-full p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Demander un devis
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}