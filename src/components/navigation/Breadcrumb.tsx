import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-body-sm', className)}>
      <ol className="flex flex-wrap items-center gap-2 text-dr-text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
              ) : null}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="transition-colors hover:text-dr-text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast && 'text-dr-text-secondary')} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
