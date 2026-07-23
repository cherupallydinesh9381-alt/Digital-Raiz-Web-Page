import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/services/ServicesPage';
import AISolutionsPage from '@/pages/AISolutionsPage';
import IndustriesPage from '@/pages/IndustriesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import BuildLanePage from '@/pages/services/build/BuildLanePage';
import GrowLanePage from '@/pages/services/grow/GrowLanePage';
import AdviseLanePage from '@/pages/services/advise/AdviseLanePage';
import WebDevelopmentPage from '@/pages/services/build/WebDevelopmentPage';
import MobileAppsPage from '@/pages/services/build/MobileAppsPage';
import UiUxDesignPage from '@/pages/services/build/UiUxDesignPage';
import CustomSoftwarePage from '@/pages/services/build/CustomSoftwarePage';
import { SplashScreen } from '@/components/SplashScreen';
import { SplashProvider } from '@/components/SplashContext';

export default function App() {
  return (
    <SplashProvider>
      <BrowserRouter>
        <SplashScreen />
        <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* Services - Build Sub-routes */}
          <Route path="/services/build" element={<BuildLanePage />} />
          <Route path="/services/build/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/build/mobile-apps" element={<MobileAppsPage />} />
          <Route path="/services/build/ui-ux-design" element={<UiUxDesignPage />} />
          <Route path="/services/build/custom-software" element={<CustomSoftwarePage />} />

          {/* Services - Grow Sub-routes */}
          <Route path="/services/grow" element={<GrowLanePage />} />
          <Route path="/services/grow/seo" element={<GrowLanePage />} />
          <Route path="/services/grow/social-media" element={<GrowLanePage />} />
          <Route path="/services/grow/sem-ppc" element={<GrowLanePage />} />
          <Route path="/services/grow/email-marketing" element={<GrowLanePage />} />
          <Route path="/services/grow/influencer-marketing" element={<GrowLanePage />} />

          {/* Services - Advise Sub-routes */}
          <Route path="/services/advise" element={<AdviseLanePage />} />
          <Route path="/services/advise/ai-ml" element={<AISolutionsPage />} />
          <Route path="/services/advise/sap-cloud" element={<AdviseLanePage />} />
          <Route path="/services/advise/iot" element={<AdviseLanePage />} />
          <Route path="/services/advise/it-consulting" element={<AdviseLanePage />} />
          <Route path="/services/advise/tech-support" element={<AdviseLanePage />} />

          {/* Core Pages */}
          <Route path="/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/work" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />
          <Route path="/insights" element={<BlogPage />} />
          <Route path="/blog" element={<Navigate to="/insights" replace />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </SplashProvider>
  );
}
