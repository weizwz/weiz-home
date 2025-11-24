import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
  headerClassName?: string;
}

export function BrowserFrame({ 
  children, 
  className = '', 
  url, 
  headerClassName = 'bg-gray-50' 
}: BrowserFrameProps) {
  return (
    <div className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200/50 relative z-1 ${className}`}>
      {/* Browser Header */}
      <div className={`${headerClassName} px-4 pt-4 flex items-center gap-2`}>
        <div className='w-3 h-3 rounded-full bg-red-400'></div>
        <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
        <div className='w-3 h-3 rounded-full bg-green-400'></div>
        {/* Address Bar Mockup */}
        {url && (
          <div className='ml-2 pl-2 flex-1 bg-white h-6 rounded-xl border border-gray-200/50 text-gray-400 text-sm truncate'>
            {url}
          </div>
        )}
      </div>

      {/* Browser Content */}
      {children}
    </div>
  );
}
