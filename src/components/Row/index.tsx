import React from 'react';

import { RowContext } from 'contexts/Row';

type Props = {
  children: React.ReactNode;
  className?: string;
  cols?: number;
  gap?: number;
  gapX?: number;
  gapY?: number;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  noWrap?: Boolean;
}

const Row: React.FC<Props> = ({ children, className, cols, gap, gapX, gapY, align, justify, noWrap, ...props }) => {
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

  const marginLeft = -(gapX ? gapX/2 : gap ? gap/2 : 0) + 'px';
  const marginRight = -(gapX ? gapX/2 : gap ? gap/2 : 0) + 'px';
  const marginBottom = -(gapY ? gapY : gap ? gap : 0) + 'px';

  return (
    <RowContext.Provider value={{cols, gap, gapX, gapY}}>
      <div className='overflow-hidden'>
        <div className={`flex ${noWrap ? 'flex-nowrap' : 'flex-wrap'} ${className}`} 
          style={{alignItems: alignItems, justifyContent: justifyContent, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom}}
          {...props}
        >
          {children}
        </div>
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
