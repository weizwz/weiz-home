import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  maxWidth?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export function Section({ 
  id, 
  className = '', 
  maxWidth = 'max-w-7xl', 
  children, 
  noPadding = false 
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className} ${noPadding ? 'p-0' : ''}`}>
      <div className={`${maxWidth} mx-auto px-4 md:px-8`}>
        {children}
      </div>
    </section>
  );
}
