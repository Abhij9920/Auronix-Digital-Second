import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline-dark' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-sans font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gold text-white hover:bg-charcoal': variant === 'gold',
            'border border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-white': variant === 'outline-dark',
            'border border-white text-white bg-transparent hover:bg-gold hover:border-gold hover:text-white': variant === 'outline-light',
            'bg-transparent hover:bg-light-gray text-charcoal': variant === 'ghost',
            'px-4 py-1.5 text-xs tracking-widest uppercase': size === 'sm',
            'px-5 py-2 text-sm': size === 'md',
            'px-8 py-3 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
