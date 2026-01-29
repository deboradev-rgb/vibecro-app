import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'data-collection',
      title: '1. Collecte des données',
      content: `Nous collectons les données suivantes :
- Informations de contact (nom, email, téléphone) via nos formulaires
- Données de navigation (adresse IP, cookies, pages visitées)
- Informations professionnelles (entreprise, poste) pour les demandes commerciales
- Données techniques (type d'appareil, navigateur) pour l'optimisation technique`
    },
    {
      id: 'data-usage',
      title: '2. Utilisation des données',
      content: `Vos données sont utilisées pour :
- Répondre à vos demandes et fournir nos services
- Améliorer notre site web et nos services
- Vous envoyer des communications commerciales (avec votre consentement)
- Respecter nos obligations légales`
    },
    {
      id: 'data-sharing',
      title: '3. Partage des données',
      content: `Nous ne partageons vos données qu'avec :
- Nos prestataires techniques (hébergeurs, services d'email)
- Nos partenaires commerciaux (uniquement avec votre accord explicite)
- Les autorités légales (sur demande légale)
Tous nos prestataires sont conformes RGPD et signent des clauses de confidentialité.`
    },
    {
      id: 'data-security',
      title: '4. Sécurité des données',
      content: `Nous mettons en œuvre des mesures de sécurité robustes :
- Chiffrement des données (SSL/TLS)
- Accès restreint aux données sensibles
- Sauvegardes régulières
- Formation des employés à la protection des données
- Audit de sécurité annuel`
    },
    {
      id: 'your-rights',
      title: '5. Vos droits',
      content: `Conformément au RGPD, vous disposez des droits suivants :
- Droit d'accès à vos données
- Droit de rectification
- Droit à l'effacement ("droit à l'oubli")
- Droit à la limitation du traitement
- Droit à la portabilité des données
- Droit d'opposition
Pour exercer ces droits, contactez notre DPO.`
    },
    {
      id: 'cookies',
      title: '6. Cookies',
      content: `Notre site utilise différents types de cookies :
- Cookies essentiels : nécessaires au fonctionnement
- Cookies analytiques : pour comprendre l'utilisation du site
- Cookies de préférences : pour mémoriser vos choix
- Cookies marketing : pour des publicités ciblées
Vous pouvez gérer vos préférences cookies via notre outil dédié.`
    },
    {
      id: 'international-transfers',
      title: '7. Transferts internationaux',
      content: `Vos données peuvent être transférées en dehors de l'UE vers :
- Nos serveurs situés en Europe (principalement France)
- Prestataires cloud (AWS, Google Cloud) avec accords de protection adéquats
Tous les transferts respectent les garanties appropriées selon le RGPD.`
    },
    {
      id: 'contact',
      title: '8. Contact',
      content: `Pour toute question concernant cette politique :
Délégué à la protection des données (DPO) :
Email : dpo@vibecro.com
Adresse : Abomey-Calavi, Derrière le CEG Godomey
Tél : +229 01 40 96 33 33`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">
                Politique de confidentialité
              </h1>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-gray-700">
                  <strong>Dernière mise à jour :</strong> 14 mars 2024<br />
                  <strong>Version :</strong> 2.1
                </p>
              </div>
              
              <p className="text-gray-600 mb-8">
                Chez VIBECRO, nous prenons la protection de vos données personnelles très au sérieux. 
                Cette politique explique comment nous collectons, utilisons, partageons et protégeons vos informations.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Table of Contents */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h3 className="font-bold mb-4">Sommaire</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block py-2 px-4 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                  
                  {/* GDPR Request Form */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-bold mb-3">Exercer vos droits RGPD</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Téléchargez notre formulaire pour faire une demande
                    </p>
                    <a
                      href="/gdpr-request-form.pdf"
                      className="inline-flex items-center px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Formulaire RGPD
                    </a>
                  </div>
                </div>
              </div>

              {/* Policy Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p>
                      Cette politique de confidentialité s'applique à tous les services fournis par VIBECRO 
                      (ci-après "nous", "notre", "nos"), y compris notre site web vibecro.com.
                    </p>
                    <p>
                      Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. 
                      Cette politique vous informera sur la manière dont nous prenons soin de vos données personnelles 
                      et vous dira quels sont vos droits en matière de protection des données.
                    </p>
                  </div>

                  {sections.map((section) => (
                    <div key={section.id} id={section.id} className="mb-12">
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <div className="whitespace-pre-line">{section.content}</div>
                    </div>
                  ))}

                  {/* Data Collection Table */}
                  <div className="mb-12 overflow-x-auto">
                    <h3 className="text-xl font-bold mb-4">Types de données collectées</h3>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type de données
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Exemples
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Base légale
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Durée de conservation
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Données de contact
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Nom, email, téléphone
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Consentement / Exécution contrat
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3 ans après dernier contact
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Données de navigation
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Adresse IP, cookies, pages visitées
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Intérêt légitime
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            13 mois maximum
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Données clients
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Historique commandes, préférences
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Exécution contrat
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            5 ans après fin de contrat
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Changes Notification */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <h3 className="font-bold mb-2">Modifications de cette politique</h3>
                    <p className="text-gray-700">
                      Nous pouvons mettre à jour cette politique de confidentialité périodiquement. 
                      Nous vous informerons de tout changement important en publiant la nouvelle politique sur notre site 
                      ou en vous envoyant une notification directe lorsque cela est requis par la loi.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Nous vous encourageons à consulter régulièrement cette page pour rester informé 
                      de la façon dont nous protégeons vos informations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto text-center">
            <p className="text-gray-600">
              Si vous avez des questions concernant cette politique de confidentialité, 
              veuillez nous contacter à l'adresse <strong>privacy@vibecro.com</strong>
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}