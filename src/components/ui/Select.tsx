import { cn } from '@/lib/cn';
import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  hint?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, id, options, placeholder, ...props }, ref) => {
    const selectId = id ?? props.name;

    return (
      <div className="space-y-2">
        {label ? (
          <label htmlFor={selectId} className="block text-sm font-medium text-dr-text-primary">
            {label}
          </label>
        ) : null}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'flex h-11 w-full appearance-none rounded-dr-md border border-dr-border bg-dr-elevated px-4 pr-10 text-sm text-dr-text-primary',
              'transition-colors duration-250',
              'focus-visible:border-dr-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dr-rose/30',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error &&
                'border-dr-error focus-visible:border-dr-error focus-visible:ring-dr-error/30',
              className,
            )}
            aria-invalid={Boolean(error)}
            {...props}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-dr-text-muted"
            aria-hidden="true"
          />
        </div>
        {hint && !error ? <p className="text-xs text-dr-text-muted">{hint}</p> : null}
        {error ? (
          <p className="text-xs text-dr-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Select.displayName = 'Select';
