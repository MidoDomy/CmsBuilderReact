import React from 'react';

import { RowContext } from 'contexts/Row';

type Props = {
  children: React.ReactNode;
  className?: string;
  cols?: number;
  gapX?: number;
  gapY?: number;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  noWrap?: boolean;
  reverse?: boolean;
}

const Row: React.FC<Props> = ({ children, className, cols, gapX, gapY, align, justify, noWrap, reverse, ...props }) => {
  const alignItems = (() => {switch(align) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    default: 
      return 'normal'
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
      return 'normal'
  }})();

  const marginLeft = -(gapX ? gapX/2 : 0) + 'px';
  const marginRight = -(gapX ? gapX/2 : 0) + 'px';
  const marginBottom = -(gapY ? gapY : 0) + 'px';

  return (
    <RowContext.Provider value={{cols, gapX, gapY}}>
      <div className={`flex ${reverse ? 'flex-row-reverse' : ''} ${noWrap ? 'flex-nowrap' : 'flex-wrap'} h-full ${className}`} 
        style={{alignItems: alignItems, justifyContent: justifyContent, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom}}
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
  gapX: 32,
  gapY: 0
}

export default Row;
