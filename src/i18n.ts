import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Pour commencer simple : traductions hardcodées dans le code
// (plus tard tu pourras les mettre dans des fichiers JSON dans public/locales ou src/locales)
const resources = {
  fr: {
    translation: {
      "Paramètres du compte": "Paramètres du compte",
      "Personnalisez votre expérience d'administration": "Personnalisez votre expérience d'administration",
      "Thème": "Thème",
      "Mode sombre": "Mode sombre",
      "Notifications": "Notifications",
      "Notifications par email": "Notifications par email",
      "Notifications push (navigateur)": "Notifications push (navigateur)",
      "Langue préférée": "Langue préférée",
      "Enregistrer les modifications": "Enregistrer les modifications",
      "Tableau de bord": "Tableau de bord",
      "Bienvenue": "Bienvenue",
      // Ajoute ici tous les textes que tu veux traduire dans ton dashboard
      // Exemple : "Projets actifs": "Projets actifs",
    }
  },
  en: {
    translation: {
      "Paramètres du compte": "Account Settings",
      "Personnalisez votre expérience d'administration": "Customize your admin experience",
      "Thème": "Theme",
      "Mode sombre": "Dark Mode",
      "Notifications": "Notifications",
      "Notifications par email": "Email Notifications",
      "Notifications push (navigateur)": "Browser Push Notifications",
      "Langue préférée": "Preferred Language",
      "Enregistrer les modifications": "Save Changes",
      "Tableau de bord": "Dashboard",
      "Bienvenue": "Welcome",
      // Ajoute les traductions correspondantes
    }
  }
};

i18n
  .use(LanguageDetector)          // Détecte la langue du navigateur
  .use(initReactI18next)          // Intégration React
  .init({
    resources,
    fallbackLng: 'fr',            // Langue par défaut si détection échoue
    supportedLngs: ['fr', 'en'],  // Limite aux langues supportées
    debug: import.meta.env.DEV,   // Debug en dev seulement (Vite-friendly)
    interpolation: {
      escapeValue: false          // React échappe déjà le HTML
    }
  });

export default i18n;