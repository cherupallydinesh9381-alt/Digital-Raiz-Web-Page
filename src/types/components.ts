import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: Size;
  isLoading?: boolean;
  fullWidth?: boolean;
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'elevated' | 'outline';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
};

export type BadgeVariant = 'default' | 'build' | 'grow' | 'advise' | 'outline';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'surface' | 'elevated' | 'gradient';
};

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: 'default' | 'narrow' | 'wide';
};
