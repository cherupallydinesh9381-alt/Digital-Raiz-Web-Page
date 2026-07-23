import { NavLink as RouterNavLink } from 'react-router-dom';
import { cn } from '@/lib/cn';

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  end?: boolean;
  onClick?: () => void;
};

export function NavLink({ to, children, className, end, onClick }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'relative text-sm font-medium transition-colors duration-250',
          isActive ? 'text-dr-text-primary' : 'text-dr-text-secondary hover:text-dr-text-primary',
          className,
        )
      }
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={cn(
              'absolute -bottom-1 left-0 h-0.5 bg-gradient-cta transition-all duration-250',
              isActive ? 'w-full' : 'w-0 group-hover:w-full',
            )}
            aria-hidden="true"
          />
        </>
      )}
    </RouterNavLink>
  );
}
