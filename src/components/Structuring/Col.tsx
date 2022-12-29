import React from 'react';

type Props = {
  children?: React.ReactNode,
  className?: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Col: React.FC<Props> = ({ children, className, span, ...props }) => {
  const spanClasses = (() => {switch(span) {
    case 1:
      return 'col-span-1'
    case 2:
      return 'col-span-2'
    case 3:
      return 'col-span-3'
    case 4:
      return 'col-span-4'
    case 5:
      return 'col-span-5'
    case 6:
      return 'col-span-6'
    case 7:
      return 'col-span-7'
    case 8:
      return 'col-span-8'
    case 9:
      return 'col-span-9'
    case 10:
      return 'col-span-10'
    case 11:
      return 'col-span-11'
    case 12:
      return 'col-span-12'
    default: 
      return 'col-span-auto'
  }})();

  return (
    <div className={`${spanClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}

Col.defaultProps = {
  className: ''
}

export default Col;
