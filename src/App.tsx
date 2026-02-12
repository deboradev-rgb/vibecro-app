import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/providers/ThemeWrapper';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import ServicesPage from '@/pages/ServicesPage';
import IoTTrackingPage from '@/pages/IoTTrackingPage';
import RHIASolutionsPage from '@/pages/RHIASolutionsPage';
import DeveloppementWebPage from '@/pages/DeveloppementWebPage';
import ClientelePlusPage from '@/pages/ClientelePlusPage';
import ConciergerieTouristiquePage from '@/pages/ConciergerieTouristiquePage';
import PortfolioPage from '@/pages/RealisationPage';
import PrivacyPage from '@/pages/legal/PrivacyPage';
import TermsPage from '@/pages/legal/TermsPage';
import CookiesPage from '@/pages/legal/CookiesPage';
import AdminLoginPage from '@/pages/AdminLoginPage';
import AdminDashboard from '@/pages/AdminDashboard';
import AllProjects from './pages/AllProjects';
import './App.css';
import './styles/dashboard.css';
import BlogDetailPage from './pages/BlogDetailPage';


function AppContent() {
  const location = useLocation();
  // On cache le footer public sur toutes les routes qui commencent par /admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col w-full min-h-screen m-0 p-0">
      <Header />
      
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/iot-tracking" element={<IoTTrackingPage />} />
          <Route path="/services/rh-ia-solutions" element={<RHIASolutionsPage />} />
          <Route path="/services/developpement-web" element={<DeveloppementWebPage />} />
          <Route path="/services/clientele-plus" element={<ClientelePlusPage />} />
          <Route path="/services/conciergerie-touristique" element={<ConciergerieTouristiquePage />} />
          <Route path="/realisation" element={<PortfolioPage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/privacy" element={<PrivacyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="/legal/cookies" element={<CookiesPage />} />
          
          {/* Routes Admin */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>

      {/* Footer public → uniquement sur les pages non-admin */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;