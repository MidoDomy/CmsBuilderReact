import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string,
  gap?: number,
  wrap?: Boolean,
  direction?: 'row' | 'column',
  align?: 'start' | 'center' | 'end',
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
}

const Flex: React.FC<Props> = ({ children, className, gap, wrap, direction, align, justify, ...props }) => {
  const directionClasses = (() => {switch(direction) {
    case 'row':
      return 'flex-row'
    case 'column':
      return 'flex-col'
    default: 
      return ''
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
    <div className={`flex ${wrap ? 'flex-wrap' : 'flex-nowrap'} ${directionClasses} ${alignClasses} ${justifyClasses} ${className}`} 
      style={{gap: gap + 'px'}}
      {...props}
    >
      {children}
    </div>
  );
}

Flex.defaultProps = {
  className: '',
  wrap: true,
  direction: 'row'
}

export default Flex;
