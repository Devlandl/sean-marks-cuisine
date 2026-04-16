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
        'font-sans font-medium tracking-[0.08em] uppercase transition-all duration-300 cursor-pointer',
        variant === 'primary' &&
          'bg-brand-accent text-brand-base hover:bg-brand-accent-hover hover:shadow-[0_0_30px_rgba(74,222,64,0.15)]',
        variant === 'secondary' &&
          'bg-transparent text-brand-heading border border-white/10 hover:border-white/25 hover:bg-white/[0.03]',
        variant === 'outline' &&
          'bg-transparent text-brand-accent border border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/[0.05]',
        size === 'sm' && 'px-6 py-2.5 text-xs',
        size === 'md' && 'px-8 py-3.5 text-xs',
        size === 'lg' && 'px-10 py-4 text-sm',
        className
      )}
      {...props}
    />
  );
}
