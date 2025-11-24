import React from 'react';

interface TechStackProps {
  items: string[];
  className?: string;
}

export function TechStack({ items, className = '' }: TechStackProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((tech) => (
        <span key={tech} className='px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium'>
          {tech}
        </span>
      ))}
    </div>
  );
}
