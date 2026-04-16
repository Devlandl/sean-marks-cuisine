import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-medium rounded transition-colors cursor-pointer',
        variant === 'primary' &&
          'bg-brand-dark text-brand-cream hover:opacity-90',
        variant === 'secondary' &&
          'bg-brand-gold text-brand-dark hover:opacity-90',
        variant === 'outline' &&
          'border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-cream',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    />
  );
}
