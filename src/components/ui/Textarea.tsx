import { cn } from '@/lib/cn';
import { forwardRef } from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id ?? props.name;

    return (
      <div className="space-y-2">
        {label ? (
          <label
            htmlFor={textareaId}
            className="block text-xs font-semibold uppercase tracking-wider text-dr-text-secondary"
          >
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'flex min-h-32 w-full resize-y rounded-xl border bg-dr-elevated/80 px-4 py-3 text-sm text-dr-text-primary',
            'border-dr-border placeholder:text-dr-text-muted',
            'transition-all duration-300',
            'hover:border-dr-border-strong',
            'focus-visible:border-dr-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dr-cyan/20 focus-visible:bg-dr-panel',
            'disabled:cursor-not-allowed disabled:opacity-40',
            error && 'border-dr-error focus-visible:border-dr-error focus-visible:ring-dr-error/20',
            className,
          )}
          aria-invalid={Boolean(error)}
          {...props}
        />
        {hint && !error ? (
          <p className="text-xs text-dr-text-muted leading-snug">{hint}</p>
        ) : null}
        {error ? (
          <p className="text-xs text-dr-error leading-snug" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
