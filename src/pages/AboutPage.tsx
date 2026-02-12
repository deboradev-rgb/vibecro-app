import { motion } from 'framer-motion'
import { Sparkles, Target, Shield, Heart, TrendingUp, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { teamAPI } from '@/lib/apiClient'
import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

interface TeamMember {
  id: number
  name: string
  position: string
  image?: string | null
  image_url?: string | null
  email?: string
  linkedin?: string
}

export default function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  // Images d'équipes africaines professionnelles (style formation / réunion / entreprise)
  const heroImages = [
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await teamAPI.getAll()
        let members = Array.isArray(response.data?.data) 
          ? response.data.data 
          : Array.isArray(response.data) 
            ? response.data 
            : []

        members = members.map((m: TeamMember) => {
          let img = m.image_url || m.image || null
          if (img && !img.startsWith('http')) {
            img = `${API_URL}/storage/${img.replace(/^public\//, '')}`
          }
          return { ...m, image_url: img }
        })

        setTeam(members)
      } catch (err) {
        setError('Impossible de charger l\'équipe')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeam()
  }, [])

  const values = [
    { icon: Sparkles, title: 'Innovation', desc: 'Nous créons l’avenir avec des technologies de pointe.' },
    { icon: Target, title: 'Excellence', desc: 'Chaque détail compte dans nos réalisations.' },
    { icon: Shield, title: 'Fiabilité', desc: 'Des solutions solides, sécurisées et durables.' },
    { icon: Heart, title: 'Humain', desc: 'Une relation de confiance avec chaque client.' },
  ]

  const whyChooseUs = [
    { title: 'Expertise reconnue', desc: 'Plus de 7 ans d’expérience en IoT, IA, web et mobile.' },
    { title: 'Solutions sur mesure', desc: 'Chaque projet est unique et adapté à vos besoins réels.' },
    { title: 'Support continu', desc: 'Maintenance, mises à jour et accompagnement post-livraison.' },
    { title: 'Prix compétitifs', desc: 'Qualité premium sans vous ruiner.' },
  ]

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 pt-24 pb-12">
      
    {/* 1. NOTRE HISTOIRE – version concise & responsive */}
<section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      
      {/* GAUCHE : Carrousel – hauteur optimisée */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[380px] lg:h-[500px] order-2 lg:order-1"
      >
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeImage === i ? 1 : 0 }}
            transition={{ duration: 1.4 }}
            className="absolute inset-0"
          >
            <img
              src={img}
              alt="Équipe Vibecro"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </motion.div>
        ))}

        {/* Dots plus discrets et centrés */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeImage === i
                  ? 'bg-[#e38f00] scale-125 shadow-sm shadow-[#e38f00]/50'
                  : 'bg-white/60 hover:bg-white hover:scale-110'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* DROITE : Texte – plus court et percutant */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="order-1 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-left"
      >
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-[#e38f00]">Notre</span> Histoire
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
            D’une vision simple à une offre unique
          </p>
        </div>

        <div className="space-y-5 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
          <p>
            Vibecro est née d’un constat clair : les entreprises excellent dans leur métier, mais la technologie et l’administratif les freinent trop souvent.
          </p>
          <p>
            Fort de 15 ans d’expérience en transformation digitale, notre fondateur a créé un <strong>partenaire unique</strong> combinant IoT, développement logiciel, automatisation RH et conciergerie professionnelle.
          </p>
          <p className="font-medium">
            Aujourd’hui, nous accompagnons des centaines d’entreprises avec sérénité, pour qu’elles se concentrent pleinement sur leur cœur de métier.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* 2. NOS VALEURS */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
        <div className="w-4/5 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            Nos <span className="text-[#e38f00]">Valeurs</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-200/80 dark:border-gray-800/60 hover:border-[#e38f00]/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#e38f00]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#e38f00]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#e38f00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. POURQUOI NOUS CHOISIR - TEXTE À GAUCHE | IMAGE À DROITE */}
      <section className="py-20 md:py-32">
        <div className="w-4/5 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            Pourquoi <span className="text-[#e38f00]">nous choisir</span> ?
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXTE À GAUCHE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10 order-1"
            >
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#e38f00]/10 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-[#e38f00]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* IMAGE À DROITE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl order-2"
            >
              <img
                src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cloud computing et intégration technologique moderne"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. NOTRE ÉQUIPE */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-black/30">
        <div className="w-4/5 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            Notre <span className="text-[#e38f00]">Équipe</span>
          </motion.h2>

          {error && <p className="text-red-600 text-center mb-12">{error}</p>}

          {isLoading ? (
            <div className="grid md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-3xl h-96 animate-pulse" />
              ))}
            </div>
          ) : team.length === 0 ? (
            <p className="text-center text-gray-500 py-12">L'équipe arrive bientôt...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-[#e38f00]/50 transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x400?text=' + member.name)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 flex items-center justify-center">
                        <span className="text-6xl font-bold text-[#e38f00]/30">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#e38f00] font-medium mb-4">{member.position}</p>

                    <div className="flex justify-center gap-5">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 text-gray-600 hover:text-[#e38f00] transition-colors" />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`}>
                          <Mail className="w-5 h-5 text-gray-600 hover:text-[#e38f00] transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

     {/* CTA – version moderne & dynamique */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative py-24 md:py-32 overflow-hidden"
>
  {/* Fond dynamique avec gradient + effet glow/particules */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/10 via-transparent to-[#d48500]/10" />
  
  {/* Overlay subtil avec animation lente */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(227,143,0,0.12)_0%,transparent_50%)] animate-pulse-slow" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="space-y-8 md:space-y-10"
    >
      <motion.h2
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
      >
        Prêt à <span className="text-[#e38f00] relative inline-block">
          donner vie
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e38f00]/60 to-transparent blur-sm" />
        </span> à vos projets ?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
      >
        Rejoignez les entreprises qui nous font confiance et transformons vos idées en solutions puissantes, ensemble.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="pt-6"
      >
        <Link
          to="/contact?type=quote"
          className="group relative inline-flex items-center gap-3 px-10 py-5 md:py-6 lg:px-14 lg:py-7 rounded-full bg-white text-[#e38f00] font-bold text-lg md:text-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.04] active:scale-95"
        >
          {/* Effet ripple / shine */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          
          <Sparkles className="w-6 h-6 md:w-7 md:h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          
          <span className="relative z-10">Démarrer un projet</span>
        </Link>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
    </div>
  )
}