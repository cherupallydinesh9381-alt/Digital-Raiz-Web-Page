import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (localStorage.getItem('dr-theme') as 'dark' | 'light') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('dr-theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className={[
        'relative inline-flex size-10 items-center justify-center rounded-full',
        'border border-dr-border bg-dr-elevated/60 backdrop-blur-md',
        'text-dr-text-secondary transition-all duration-300',
        'hover:border-dr-border-strong hover:text-dr-text-primary hover:scale-105',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dr-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dr-void',
      ].join(' ')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' ? (
        <Sun className="size-4.5 text-dr-amber transition-all duration-500 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="size-4.5 text-dr-violet transition-all duration-500 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
