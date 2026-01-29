// src/app/legal/cookies/page.tsx
'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Checkbox } from '@/components/ui/Form';
import Button from '@/components/ui/Button';

export default function CookiesPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Cookies essentiels',
      description: 'Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.',
      alwaysActive: true,
      cookies: [
        { name: 'session_id', purpose: 'Maintenir la session utilisateur', duration: 'Session' },
        { name: 'csrf_token', purpose: 'Protection contre les attaques CSRF', duration: 'Session' },
        { name: 'cookie_consent', purpose: 'Mémoriser vos préférences cookies', duration: '1 an' }
      ]
    },
    {
      id: 'analytics',
      name: 'Cookies analytiques',
      description: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
      alwaysActive: false,
      cookies: [
        { name: '_ga', purpose: 'Google Analytics - Suivi des utilisateurs', duration: '2 ans' },
        { name: '_gid', purpose: 'Google Analytics - Identification session', duration: '24 heures' },
        { name: '_gat', purpose: 'Google Analytics - Limitation du débit', duration: '1 minute' },
        { name: 'amplitude_id', purpose: 'Analytics comportemental', duration: '1 an' }
      ]
    },
    {
      id: 'marketing',
      name: 'Cookies marketing',
      description: 'Utilisés pour suivre les visiteurs sur les sites web afin d\'afficher des publicités pertinentes.',
      alwaysActive: false,
      cookies: [
        { name: '_fbp', purpose: 'Facebook Pixel - Publicité ciblée', duration: '3 mois' },
        { name: 'fr', purpose: 'Facebook Pixel - Conversion', duration: '3 mois' },
        { name: 'NID', purpose: 'Google Ads - Personnalisation publicitaire', duration: '6 mois' },
        { name: 'IDE', purpose: 'Google DoubleClick - Publicité', duration: '1 an' }
      ]
    },
    {
      id: 'preferences',
      name: 'Cookies de préférences',
      description: 'Permettent au site de se souvenir des choix que vous faites pour vous offrir une meilleure expérience.',
      alwaysActive: false,
      cookies: [
        { name: 'language', purpose: 'Mémoriser votre langue préférée', duration: '1 an' },
        { name: 'theme', purpose: 'Mémoriser votre thème (clair/sombre)', duration: '1 an' },
        { name: 'layout_pref', purpose: 'Préférences d\'affichage', duration: '1 an' }
      ]
    }
  ];

  const handlePreferenceChange = (category: string, checked: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: checked
    }));
  };

  const savePreferences = () => {
    // Enregistrer les préférences dans localStorage
    localStorage.setItem('cookie_preferences', JSON.stringify(preferences));
    
    // Enregistrer dans un cookie avec expiration 1 an
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    
    document.cookie = `cookie_consent=true; expires=${expires.toUTCString()}; path=/`;
    document.cookie = `cookie_preferences=${JSON.stringify(preferences)}; expires=${expires.toUTCString()}; path=/`;
    
    alert('Vos préférences ont été enregistrées avec succès !');
  };

  const acceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    setPreferences(allPreferences);
    savePreferences();
  };

  const rejectAll = () => {
    const minimalPreferences = {
      essential: true, // Toujours nécessaire
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    setPreferences(minimalPreferences);
    savePreferences();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">
                Politique des Cookies
              </h1>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-gray-700">
                  <strong>Dernière mise à jour :</strong> 14 mars 2024<br />
                  <strong>Conformité :</strong> RGPD, ePrivacy Directive
                </p>
              </div>
              
              <p className="text-gray-600 mb-8">
                Cette politique explique comment VIBECRO utilise les cookies et technologies similaires 
                pour améliorer votre expérience sur notre site web.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Qu'est-ce qu'un cookie ?</h2>
                    <p>
                      Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. 
                      Il permet au site de mémoriser vos actions et préférences (comme la connexion, la langue, 
                      la taille de police et d'autres préférences d'affichage) pendant un certain temps, 
                      afin que vous n'ayez pas à les réinsérer chaque fois que vous revenez sur le site ou naviguez d'une page à l'autre.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Comment utilisons-nous les cookies ?</h2>
                    <p>
                      Nous utilisons les cookies pour plusieurs raisons :
                    </p>
                    <ul>
                      <li>Assurer le bon fonctionnement du site</li>
                      <li>Analyser l'utilisation du site pour l'améliorer</li>
                      <li>Personnaliser votre expérience</li>
                      <li>Fournir des publicités pertinentes (avec votre consentement)</li>
                    </ul>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Types de cookies que nous utilisons</h2>
                    
                    <div className="space-y-8">
                      {cookieCategories.map((category) => (
                        <div key={category.id} className="border border-gray-200 rounded-xl p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                              <p className="text-gray-600">{category.description}</p>
                            </div>
                            
                            {!category.alwaysActive && (
                              <div className="flex items-center">
                                <Checkbox
                                  checked={preferences[category.id as keyof typeof preferences]}
                                  onChange={(e) => handlePreferenceChange(category.id, e.target.checked)}
                                  label=""
                                />
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2">Cookies inclus :</h4>
                            <div className="overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="px-4 py-2 text-left">Nom</th>
                                    <th className="px-4 py-2 text-left">Objectif</th>
                                    <th className="px-4 py-2 text-left">Durée</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {category.cookies.map((cookie, index) => (
                                    <tr key={index} className="border-t border-gray-100">
                                      <td className="px-4 py-2 font-mono">{cookie.name}</td>
                                      <td className="px-4 py-2">{cookie.purpose}</td>
                                      <td className="px-4 py-2">{cookie.duration}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Gestion des cookies</h2>
                    <p>
                      Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. 
                      Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur 
                      et vous pouvez configurer la plupart des navigateurs pour les empêcher d'être placés.
                    </p>
                    <p className="mt-4">
                      <strong>Note :</strong> Si vous désactivez les cookies, certaines fonctionnalités 
                      de notre site pourraient ne pas fonctionner correctement.
                    </p>
                    
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Navigateurs courants :</h4>
                        <ul className="list-disc pl-5 text-sm">
                          <li><a href="#" className="text-primary-600 hover:underline">Chrome</a></li>
                          <li><a href="#" className="text-primary-600 hover:underline">Firefox</a></li>
                          <li><a href="#" className="text-primary-600 hover:underline">Safari</a></li>
                          <li><a href="#" className="text-primary-600 hover:underline">Edge</a></li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Outils tiers :</h4>
                        <ul className="list-disc pl-5 text-sm">
                          <li>YourOnlineChoices (UE)</li>
                          <li>Network Advertising Initiative (US)</li>
                          <li>Digital Advertising Alliance (US)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Cookies tiers</h2>
                    <p>
                      Nous utilisons également des cookies de partenaires tiers pour :
                    </p>
                    <ul>
                      <li>Analyses (Google Analytics)</li>
                      <li>Publicité (Google Ads, Facebook)</li>
                      <li>Vidéos (YouTube, Vimeo)</li>
                      <li>Cartes (Google Maps)</li>
                    </ul>
                    <p className="mt-4">
                      Ces tiers ont leurs propres politiques de confidentialité et nous vous encourageons 
                      à les consulter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Preferences */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">Gérer vos préférences</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Cookies essentiels</span>
                          <span className="text-sm text-gray-500">Toujours actifs</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-full"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Cookies analytiques</span>
                          <span className="text-sm">
                            {preferences.analytics ? '✅ Actif' : '❌ Inactif'}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${preferences.analytics ? 'bg-blue-500' : 'bg-gray-300'} transition-all`}
                            style={{ width: preferences.analytics ? '100%' : '0%' }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Cookies marketing</span>
                          <span className="text-sm">
                            {preferences.marketing ? '✅ Actif' : '❌ Inactif'}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${preferences.marketing ? 'bg-purple-500' : 'bg-gray-300'} transition-all`}
                            style={{ width: preferences.marketing ? '100%' : '0%' }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Cookies préférences</span>
                          <span className="text-sm">
                            {preferences.preferences ? '✅ Actif' : '❌ Inactif'}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${preferences.preferences ? 'bg-orange-500' : 'bg-gray-300'} transition-all`}
                            style={{ width: preferences.preferences ? '100%' : '0%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                      <Button
                        onClick={acceptAll}
                        variant="primary"
                        fullWidth
                      >
                        Tout accepter
                      </Button>
                      
                      <Button
                        onClick={savePreferences}
                        variant="outline"
                        fullWidth
                      >
                        Enregistrer mes préférences
                      </Button>
                      
                      <Button
                        onClick={rejectAll}
                        variant="ghost"
                        fullWidth
                      >
                        Tout refuser (sauf essentiels)
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold mb-3">Informations légales</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Conformément au RGPD et à la directive ePrivacy, vous avez le droit de :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Donner ou retirer votre consentement à tout moment
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Accéder à vos données personnelles
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Demander la suppression de vos données
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Vous opposer au traitement
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <a 
                        href="/legal/privacy" 
                        className="text-sm text-primary-600 hover:underline"
                      >
                        Voir notre politique de confidentialité complète →
                      </a>
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