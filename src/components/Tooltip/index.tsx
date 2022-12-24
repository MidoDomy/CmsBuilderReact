import React, { useState, useEffect } from 'react';

type Props = {
  children: React.ReactNode,
  className?: string,
  text: string,
  small?: Boolean,
  click?: Boolean,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Tooltip: React.FC<Props> = ({ children, className, text, small, click, onClick, ...props }) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShow(false), 1500);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className={`relative ${click ? '' : '[&:hover>:first-child]:block'} ${show ? '[&>:first-child]:block' : ''} ${className}`} 
      onClick={click ? () => { setShow(true); onClick();} : () => {}}
      {...props}
    >
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 hidden py-1 text-center bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white shadow-lg ${small ? '-translate-y-2 px-2 rounded-md text-xs' : '-translate-y-4 px-4 rounded-lg text-sm'}`}>
        {text}

        <span className='block absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-100 dark:border-t-gray-800'></span>
      </div>

      {children}
    </div>
  );
}

Tooltip.defaultProps = {
  className: '',
  onClick: () => {}
}

export default Tooltip;
