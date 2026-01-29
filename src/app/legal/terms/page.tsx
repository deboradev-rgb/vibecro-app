// src/app/legal/terms/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  const sections = [
    {
      id: 'definitions',
      title: '1. Définitions',
      content: `Les termes suivants, employés avec une lettre majuscule, ont le sens qui leur est donné ci-après :
- "Client" : toute personne physique ou morale utilisant les Services.
- "Services" : l'ensemble des prestations fournies par VIBECRO.
- "Site" : le site internet accessible à l'adresse vibecro.com.
- "Contenu" : tous les éléments présents sur le Site.`
    },
    {
      id: 'object',
      title: '2. Objet',
      content: `Les présentes conditions générales ont pour objet de définir les modalités et conditions d'utilisation des Services proposés par VIBECRO sur le Site, ainsi que de définir les droits et obligations des parties dans ce cadre.`
    },
    {
      id: 'services-description',
      title: '3. Description des services',
      content: `VIBECRO propose les services suivants :
- Développement de solutions IoT et systèmes de tracking
- Solutions RH basées sur l'intelligence artificielle
- Développement d'applications web et mobiles sur-mesure
- Services de conseil en stratégie digitale
- Solutions de gestion client (CRM) personnalisées
- Services de conciergerie touristique numérique

Les spécifications détaillées de chaque service sont disponibles sur les pages dédiées du Site.`
    },
    {
      id: 'access-services',
      title: '4. Accès aux services',
      content: `L'accès aux Services est réservé aux Clients ayant la capacité juridique de contracter. Le Client reconnaît être pleinement informé du fait que la fourniture des Services nécessite une connexion à internet et que les coûts afférents à cette connexion sont à sa charge exclusive.`
    },
    {
      id: 'pricing-payment',
      title: '5. Tarifs et paiement',
      content: `Les tarifs des Services sont indiqués en euros toutes taxes comprises.
Les paiements s'effectuent selon les modalités suivantes :
- 50% à la commande
- 25% à la livraison du prototype
- 25% à la mise en production

Tout retard de paiement entraîne l'application de pénalités de retard au taux légal.`
    },
    {
      id: 'intellectual-property',
      title: '6. Propriété intellectuelle',
      content: `VIBECRO conserve la propriété exclusive de tous les éléments de propriété intellectuelle relatifs aux Services, y compris les logiciels, codes source, interfaces, marques, logos et contenus.
Le Client bénéficie d'une licence d'utilisation des solutions développées, dont les conditions sont précisées dans le contrat spécifique.`
    },
    {
      id: 'liability',
      title: '7. Responsabilité',
      content: `VIBECRO s'engage à fournir les Services avec diligence et conformément aux règles de l'art.
La responsabilité de VIBECRO ne saurait être engagée en cas de :
- Utilisation non conforme des Services
- Force majeure
- Faute du Client ou d'un tiers

La responsabilité de VIBECRO est limitée au montant payé par le Client pour le Service concerné.`
    },
    {
      id: 'confidentiality',
      title: '8. Confidentialité',
      content: `Les parties s'engagent à conserver confidentielles toutes les informations échangées dans le cadre de l'exécution des Services.
Cette obligation de confidentialité subsiste pendant toute la durée du contrat et pendant 5 ans après sa fin.`
    },
    {
      id: 'personal-data',
      title: '9. Données personnelles',
      content: `VIBECRO s'engage à protéger les données personnelles des Clients conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi informatique et libertés.
Les données collectées sont exclusivement utilisées pour l'exécution des Services et ne sont jamais cédées à des tiers sans consentement exprès.`
    },
    {
      id: 'duration-termination',
      title: '10. Durée et résiliation',
      content: `Les présentes conditions sont applicables pour toute utilisation des Services.
Elles peuvent être résiliées :
- Par accord mutuel des parties
- En cas de manquement grave à leurs obligations par l'une des parties
- En cas de force majeure rendant impossible l'exécution pendant plus de 30 jours`
    },
    {
      id: 'general-provisions',
      title: '11. Dispositions générales',
      content: `Les présentes conditions constituent l'intégralité de l'accord entre les parties.
Toute modification doit faire l'objet d'un avenant signé par les deux parties.
En cas de nullité d'une clause, les autres clauses demeurent pleinement valides.`
    },
    {
      id: 'applicable-law',
      title: '12. Droit applicable et juridiction',
      content: `Les présentes conditions sont régies par le droit français.
Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents du siège social de VIBECRO, après tentative de règlement amiable.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">
                Conditions Générales d'Utilisation
              </h1>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-gray-700">
                  <strong>Dernière mise à jour :</strong> 14 mars 2024<br />
                  <strong>Version :</strong> 3.2
                </p>
              </div>
              
              <p className="text-gray-600 mb-8">
                Les présentes conditions générales régissent l'utilisation des services proposés par VIBECRO. 
                En accédant à nos services, vous acceptez sans réserve l'ensemble de ces conditions.
              </p>
            </div>
          </div>
        </section>

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
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <p>
                      <strong>Entreprise :</strong> VIBECRO<br />
                      <strong>Siège social :</strong> Abomey-Calavi, Derrière le CEG Godomey<br />
                      <strong>Email :</strong> legal@vibecro.com<br />
                      <strong>Téléphone :</strong> +229 01 40 96 33 33
                    </p>
                  </div>

                  {sections.map((section) => (
                    <div key={section.id} id={section.id} className="mb-12">
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <div className="whitespace-pre-line">{section.content}</div>
                    </div>
                  ))}

                  {/* Signatures */}
                  <div className="mt-16 p-8 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-bold mb-6">Acceptation des conditions</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Pour VIBECRO :</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="font-medium">Nom : Alexandre Martin</div>
                            <div className="text-gray-600">CEO & Fondateur</div>
                          </div>
                          <div className="h-24 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                            <span className="text-gray-500">Signature numérique</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4">Pour le Client :</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="font-medium">Nom : ___________________</div>
                            <div className="text-gray-600">Représentant légal</div>
                          </div>
                          <div className="h-24 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                            <span className="text-gray-500">Signature du Client</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        L'acceptation de ces conditions s'effectue par la signature du devis ou par tout autre moyen 
                        démontrant l'accord exprès du Client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}