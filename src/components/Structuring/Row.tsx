import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string,
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  gap?: number,
  align?: 'start' | 'center' | 'end',
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
}

const Row: React.FC<Props> = ({ children, className, cols, gap, align, justify, ...props }) => {
  const colsClasses = (() => {switch(cols) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-2'
    case 3:
      return 'grid-cols-3'
    case 4:
      return 'grid-cols-4'
    case 5:
      return 'grid-cols-5'
    case 6:
      return 'grid-cols-6'
    case 7:
      return 'grid-cols-7'
    case 8:
      return 'grid-cols-8'
    case 9:
      return 'grid-cols-9'
    case 10:
      return 'grid-cols-10'
    case 11:
      return 'grid-cols-11'
    default: 
      return 'grid-cols-12'
  }})();

  const alignClasses = (() => {switch(align) {
    case 'start':
      return 'items-start'
    case 'center':
      return 'items-center'
    case 'end':
      return 'items-end'
    default: 
      return ''
  }})();

  const justifyClasses = (() => {switch(justify) {
    case 'start':
      return 'justify-start'
    case 'center':
      return 'justify-center'
    case 'end':
      return 'justify-end'
    case 'between':
      return 'justify-between'
    case 'around':
      return 'justify-around'
    default: 
      return ''
  }})();

  return (
    <div className={`grid ${colsClasses} ${alignClasses} ${justifyClasses} ${className}`} 
      style={{gap: gap + 'px'}}
      {...props}
    >
      {children}
    </div>
  );
}

Row.defaultProps = {
  className: '',
  gap: 32
}

export default Row;
