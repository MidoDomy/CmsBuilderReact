import React from 'react';

import { RowContext } from 'contexts/Row';

type Props = {
  children: React.ReactNode;
  className?: string;
  cols?: number;
  gap?: number;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  noWrap?: Boolean;
}

const Row: React.FC<Props> = ({ children, className, cols, gap, align, justify, noWrap, ...props }) => {
  const alignItems = (() => {switch(align) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    default: 
      return ''
  }})();

  const justifyContent = (() => {switch(justify) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    default: 
      return ''
  }})();

  return (
    <RowContext.Provider value={{cols, gap}}>
      <div className={`flex ${noWrap ? 'flex-nowrap' : 'flex-wrap'} ${className}`} 
        style={{alignItems: alignItems, justifyContent: justifyContent}}
        {...props}
      >
        {children}
      </div>
    </RowContext.Provider>
  );
}

Row.defaultProps = {
  className: '',
  cols: 12,
  gap: 32
}

export default Row;
