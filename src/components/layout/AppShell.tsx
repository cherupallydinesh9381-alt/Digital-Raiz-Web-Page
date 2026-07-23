import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/motion/PageTransition';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { BackgroundLayers } from '@/components/ui/BackgroundLayers';

export function AppShell() {
  return (
    <div className="flex min-h-dvh flex-col">
      <BackgroundLayers />
      <CustomCursor />
      <Header />
      <main id="main-content" className="flex-1 pt-[var(--header-height)]">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

