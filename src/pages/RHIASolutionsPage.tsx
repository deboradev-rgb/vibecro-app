import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  CheckCircle,
  Zap,
  CalendarDays, 
  Target, 
  FileText, 
  ShieldCheck, 
  FolderOpen,
  ArrowRight, 
  BarChart3 
} from 'lucide-react'

export default function RHIASolutionsPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-slate-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 pt-24 pb-12">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        {/* Nouvelle image de fond - RH & IA Professionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="RH-IA Background - Professional HR Analytics"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2070&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 dark:from-black/75 dark:via-black/65 dark:to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-[#e38f00]/20 mb-6">
              <Brain className="w-5 h-5 text-[#e38f00]" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Solutions RH-IA</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text mb-6">
              Solutions RH-<span className="text-[#e38f00]">IA</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Automatisation intelligente et IA pour optimiser vos processus de recrutement, gestion des talents et développement RH
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION SOLUTION RH-IA – Contexte africain */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-950 dark:via-indigo-950/20 dark:to-gray-950"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* GAUCHE : Texte descriptif */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 flex flex-col"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-indigo-100/60 dark:bg-indigo-900/40 rounded-full text-indigo-700 dark:text-indigo-300 font-medium text-sm">
                <Zap className="w-5 h-5" />
                <span>Solution RH Innovante</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                La solution <span className="text-indigo-600 dark:text-indigo-400">RH-IA</span>
              </h2>

              <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                <p>
                  La solution RH-IA optimise la gestion des ressources humaines grâce à l'intelligence artificielle. 
                  Elle automatise les processus de recrutement, analyse les compétences et prédit les besoins en talents.
                </p>
                
                <p>
                  Grâce au machine learning, elle personnalise les parcours de formation, améliore l'engagement des collaborateurs 
                  et simplifie les tâches administratives.
                </p>

                <p>
                  Les outils analytiques fournissent des insights en temps réel pour une prise de décision éclairée. 
                  Cette solution agile réduit les biais, augmente la productivité et s'adapte aux évolutions du marché africain.
                </p>

                <p className="font-semibold text-gray-900 dark:text-white text-xl pt-3">
                  Une approche data-driven qui transforme la fonction RH en levier stratégique, 
                  alliant performance opérationnelle et expérience collaborateur.
                </p>

                <p className="text-indigo-600 dark:text-indigo-400 font-medium italic pt-4">
                  Votre succès digital commence ici.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="https://rh.vibecro.com"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Découvrir la solution RH-IA
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* DROITE : Image africaine + RH-IA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-gray-700 h-full"
            >
              <img
                src="https://thumbs.dreamstime.com/b/black-woman-specialist-examine-kpi-reports-artificial-intelligence-tools-computer-working-ai-neural-networks-machine-429620533.jpg"
                alt="Femme noire professionnelle RH analysant des données IA et KPI sur ordinateur dans un bureau africain moderne"
                className="w-full h-full object-cover brightness-105 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Solutions Overview - Version Modernisée avec vos couleurs */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 lg:py-28 bg-white/50 dark:bg-black/20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e38f00]">
                Services RH-IA Premium
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Nos <span className="text-[#e38f00]">Solutions</span> Complètes
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Découvrez notre suite d'outils RH-IA conçus pour optimiser chaque aspect de la gestion de vos talents
            </p>
          </motion.div>

          {/* Grille des services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Congés & Absences automatisés',
                description: 'Finis les tableaux Excel et les erreurs de calcul. Vos collaborateurs déposent leurs demandes en 2 clics, les managers valident en 1 clic, et tout est tracé en temps réel.',
                icon: CalendarDays,
                delay: 0.1
              },
              {
                title: 'Suivi de carrière & formations',
                description: 'Chaque salarié visualise ses objectifs, ses formations disponibles et ses perspectives d\'évolution. Le manager suit les progrès et valide les étapes en ligne.',
                icon: Target,
                delay: 0.2
              },
              {
                title: 'Demandes administratives',
                description: 'Congés, avance sur salaire, changement d\'adresse… vos équipes déposent toutes leurs demandes depuis leur téléphone ou ordinateur. Plus besoin d\'envoyer d\'e-mails.',
                icon: FileText,
                delay: 0.3
              },
              {
                title: 'Gestion des conflits',
                description: 'Un employé peut signaler un conflit anonymement. Le service RH est alerté, ouvre un dossier, propose un médiateur et suit l\'issue de l\'affaire en toute confidentialité.',
                icon: ShieldCheck,
                delay: 0.4
              },
              {
                title: 'Tableau de bord RH',
                description: 'Absentéisme, taux de rotation, soldes de congés, demandes en attente… tous vos indicateurs sont visibles en un clin d\'œil pour décider plus vite.',
                icon: BarChart3,
                delay: 0.5
              },
              {
                title: 'Documents RH partagés',
                description: 'Contrats, bulletins de paie, attestations, règlement intérieur… vos salariés téléchargent les documents officiels quand ils en ont besoin, sans solliciter le service RH.',
                icon: FolderOpen,
                delay: 0.6
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Effet de fond au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/5 to-[#d48500]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Carte principale */}
                <div className="relative bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-[#e38f00]/30 dark:group-hover:border-[#e38f00]/20">
                  
                  {/* Effet de couleur en arrière-plan */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e38f00]/5 to-[#d48500]/5 opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500"></div>
                  
                  {/* Icône stylée */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e38f00]/10 to-[#d48500]/10 opacity-10 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative">
                    {item.title}
                    <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-[#e38f00]/30 to-transparent dark:from-[#e38f00]/50 rounded-full"></div>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  
                  {/* Bouton élégant */}
                  <div className="pt-6 border-t border-slate-200/50 dark:border-white/10">
                    <Link
                      to="https://rh.vibecro.com"
                      className="inline-flex items-center justify-between w-full group/btn"
                    >
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover/btn:text-[#e38f00] transition-colors">
                        Accéder au site officiel
                      </span>
                      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#e38f00] to-[#d48500] flex items-center justify-center transition-transform group-hover/btn:scale-110">
                        <ArrowRight className="w-5 h-5 text-white transform group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover/btn:opacity-100"></div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Points décoratifs */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-[#e38f00] to-[#d48500] rounded-full blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Use Cases */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/5 dark:to-[#d48500]/5"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* GAUCHE : Texte et cases */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-[#e38f00]/10 to-[#d48500]/10 dark:from-[#e38f00]/20 dark:to-[#d48500]/20 rounded-full text-[#e38f00] dark:text-[#f44d0b] font-medium text-sm">
                <div className="w-2 h-2 bg-[#e38f00] rounded-full"></div>
                <span>Applications Sectorielles</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Secteurs <span className="text-[#e38f00]">d'Application</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Tech & Startups',
                    desc: 'Recrutement rapide de talents tech, gestion d\'équipes distribuées, analyse des compétences.'
                  },
                  {
                    title: 'Grandes Entreprises',
                    desc: 'Transformation RH, conformité RGPD, équité salariale, gestion des carrières.'
                  },
                  {
                    title: 'Retail & E-commerce',
                    desc: 'Gestion des saisonniers, prédiction des pics d\'activité, optimisation des plannings.'
                  },
                  {
                    title: 'Santé & Pharma',
                    desc: 'Gestion des talents spécialisés, conformité réglementaire, suivi des certifications.'
                  }
                ].map((useCase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 dark:bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-white/10 hover:border-[#e38f00]/30 transition-all"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{useCase.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{useCase.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact?type=secteurs"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  En savoir plus sur nos solutions sectorielles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* DROITE : Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-700"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Divers secteurs professionnels utilisant les solutions RH-IA - équipes multinationales travaillant ensemble"
                className="w-full h-auto object-cover brightness-105 contrast-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=2070&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge sur l'image */}
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#e38f00] rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">Solutions Multi-Secteurs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Transformez Votre RH avec l'IA
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Automatisez vos processus RH et créez une culture d'excellence avec nos solutions IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?type=quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e38f00] to-[#d48500] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <span>Demander une Démo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#e38f00] text-[#e38f00] dark:text-[#f44d0b] font-bold py-4 px-8 rounded-xl hover:bg-[#e38f00]/10 transition-all"
            >
              <span>Contactez-nous</span>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}