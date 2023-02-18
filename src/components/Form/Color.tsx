import React from 'react';

type Props = {
  className?: string;
  id?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (e: any) => any;
}

const Color: React.FC<Props> = ({className, id, value, size, onChange, ...props}) => {
  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return 'h-[30px]'
    case 'lg':
      return 'h-[42px]'
    default: 
      return 'h-[38px]'
  }})()

  return (
    <div className={`relative min-w-[50px] overflow-hidden border border-gray-200 rounded ${sizeClasses} ${className}`}>
      <input className={`absolute -top-1.5 -left-1.5 h-[calc(100%_+_12px)] w-[calc(100%_+_12px)] appearance-none shadow-none border-none ring-0 bg-transparent cursor-pointer`}
        type='color' 
        id={id} 
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

Color.defaultProps = {
  className: '',
  size: 'md'
}

export default Color;
