import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-white rounded-3xl border border-slate-200 shadow-md shadow-slate-200 ${hover ? 'hover:shadow-xl transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
}
