import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { NavLink } from '@/components/navigation/NavLink';
import { primaryNav } from '@/content/navigation';
import { cn } from '@/lib/cn';
import { FADE_VARIANTS, MOTION } from '@/lib/motion-config';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={FADE_VARIANTS}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-dr-border bg-dr-surface p-6 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.outExpo }}
            aria-label="Mobile"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-lg font-bold">Menu</span>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto">
              {primaryNav.map((item) => {
                const hasChildren = Boolean(item.children?.length);

                if (!hasChildren) {
                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className="block rounded-dr-md px-3 py-3"
                      onClick={onClose}
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                const isExpanded = expandedGroup === item.label;

                return (
                  <div key={item.href} className="rounded-dr-md border border-dr-border">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium text-dr-text-primary"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedGroup((current) => (current === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-250',
                          isExpanded && 'rotate-180',
                        )}
                      />
                    </button>

                    {isExpanded ? (
                      <div className="space-y-1 border-t border-dr-border px-3 py-3">
                        {item.children?.map((group) => (
                          <div key={group.href} className="space-y-1">
                            <Link
                              to={group.href}
                              className="block rounded-dr-sm px-2 py-2 text-sm font-semibold text-dr-text-primary hover:bg-dr-elevated"
                              onClick={onClose}
                            >
                              {group.label}
                            </Link>
                            {group.children?.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="block rounded-dr-sm px-4 py-2 text-sm text-dr-text-secondary hover:bg-dr-elevated hover:text-dr-text-primary"
                                onClick={onClose}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-3 border-t border-dr-border pt-6">
              <ButtonLink to="/contact" fullWidth onClick={onClose}>
                Start a Project
              </ButtonLink>
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
