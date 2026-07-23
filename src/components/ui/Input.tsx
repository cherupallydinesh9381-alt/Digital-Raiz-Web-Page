import { cn } from '@/lib/cn';
import type { InputProps } from '@/types/components';
import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="space-y-2">
        {label ? (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold uppercase tracking-wider text-dr-text-secondary"
          >
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'flex h-12 w-full rounded-xl border bg-dr-elevated/80 px-4 text-sm text-dr-text-primary',
            'border-dr-border placeholder:text-dr-text-muted',
            'transition-all duration-300',
            'hover:border-dr-border-strong',
            'focus-visible:border-dr-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dr-cyan/20 focus-visible:bg-dr-panel',
            'disabled:cursor-not-allowed disabled:opacity-40',
            error && 'border-dr-error focus-visible:border-dr-error focus-visible:ring-dr-error/20',
            className,
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {hint && !error ? (
          <p id={`${inputId}-hint`} className="text-xs text-dr-text-muted leading-snug">
            {hint}
          </p>
        ) : null}
        {error ? (
          <p id={`${inputId}-error`} className="text-xs text-dr-error leading-snug" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
