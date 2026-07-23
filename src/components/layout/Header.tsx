import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileNav } from '@/components/layout/MobileNav';
import { primaryNav } from '@/content/navigation';
import { siteConfig } from '@/content/site-config';
import { cn } from '@/lib/cn';
import { useSplash } from '@/components/SplashContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const { isSplashFinished } = useSplash();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-dr-rose focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={isSplashFinished ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          isScrolled
            ? [
                'border-b border-dr-border',
                'bg-dr-void/80 backdrop-blur-2xl',
                'shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.3)]',
                /* Light theme scrolled */
                '[.light_&]:bg-white/80 [.light_&]:shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.08)]',
              ]
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <Container>
          <div className="flex h-[var(--header-height)] items-center justify-between gap-6">
            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label={siteConfig.name}
            >
              <img
                src="/brand/logo.png"
                alt=""
                className="h-9 w-auto transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="hidden font-display text-base font-black tracking-wider text-dr-text-primary sm:inline uppercase">
                Digital
                <span className="text-transparent bg-clip-text bg-gradient-cta">Raiz</span>
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav
              className={cn(
                'hidden items-center gap-0.5 lg:flex',
                'rounded-full border border-dr-border bg-dr-surface/60 backdrop-blur-xl p-1',
                'shadow-[0_1px_8px_rgba(0,0,0,0.08)]',
              )}
              aria-label="Primary"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {primaryNav.map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  (item.href !== '/' && location.pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onMouseEnter={() => setHoveredPath(item.href)}
                    className={cn(
                      'relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors duration-300',
                      isActive
                        ? 'text-white'
                        : 'text-dr-text-secondary hover:text-dr-text-primary',
                    )}
                  >
                    {/* Hover pill highlight */}
                    <AnimatePresence>
                      {hoveredPath === item.href && !isActive && (
                        <motion.span
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-dr-elevated rounded-full -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-gradient-cta rounded-full -z-20 opacity-90"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop Actions ── */}
            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <ButtonLink to="/contact" size="sm">
                Start a Project
              </ButtonLink>
            </div>

            {/* ── Mobile Actions ── */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                className={cn(
                  'inline-flex size-10 items-center justify-center rounded-full',
                  'border border-dr-border bg-dr-elevated/60 text-dr-text-primary backdrop-blur-md',
                  'transition-all duration-300 hover:border-dr-border-strong active:scale-95',
                )}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-navigation"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMobileOpen((open) => !open)}
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="size-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="size-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
