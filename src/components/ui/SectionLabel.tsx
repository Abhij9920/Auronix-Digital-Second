import React from 'react';
import { cn } from './Button';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'text-gold text-[10px] tracking-[0.2em] uppercase font-sans font-medium mb-4 block',
        className
      )}
    >
      {children}
    </div>
  );
}
