import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  text?: String;
}

const Divider: React.FC<Props> = ({ children, className, text, ...props }) => {
  return (
    <div className={`flex items-center ${className}`} 
      {...props}
    >
      <div className='flex-1 border-b border-gray-200'></div>
      
      {(text || children) &&
        <span className='px-3 text-sm text-slate-500'>
          {text ? text : children}
        </span>
      }

      <div className='flex-1 border-b border-gray-200'></div>
    </div>
  );
}

Divider.defaultProps = {
  className: ''
}

export default Divider;
