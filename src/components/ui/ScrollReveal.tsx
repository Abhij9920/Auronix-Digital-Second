import React, { useEffect, useRef, useState } from 'react';
import { cn } from './Button';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 translate-y-4 transition-all duration-600 ease-out',
        {
          'opacity-100 translate-y-0': isVisible,
          'delay-100': delay === 100,
          'delay-200': delay === 200,
          'delay-300': delay === 300,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
