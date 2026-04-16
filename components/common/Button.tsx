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
        'font-semibold rounded-lg transition-all duration-200 cursor-pointer tracking-wide',
        variant === 'primary' &&
          'bg-brand-accent text-brand-base hover:bg-brand-accent-hover',
        variant === 'secondary' &&
          'bg-brand-surface text-brand-heading border border-brand-border hover:border-brand-accent',
        variant === 'outline' &&
          'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-base',
        size === 'sm' && 'px-5 py-2.5 text-sm',
        size === 'md' && 'px-7 py-3',
        size === 'lg' && 'px-9 py-4 text-lg',
        className
      )}
      {...props}
    />
  );
}
