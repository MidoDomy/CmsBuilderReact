import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string,
  text: string
}

const Tooltip: React.FC<Props> = ({ children, className, text }) => {
  return (
    <div className={`relative [&:hover>:first-child]:block ${className}`}>
      <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 hidden -translate-y-4 px-4 py-1 text-center bg-base-white text-base-dark rounded-lg shadow-xl'>
        {text}

        <span className='block absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-base-white'></span>
      </div>

      {children}
    </div>
  );
}

Tooltip.defaultProps = {
  className: ''
}

export default Tooltip;
