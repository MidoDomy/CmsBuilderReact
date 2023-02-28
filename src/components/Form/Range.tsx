import React from 'react';

import BaseField from './BaseField';

type Props = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  value?: any;
  defaultValue?: any;
  required?: boolean;
  min: number;
  max: number;
  onChange?: (e: any) => any;
}

const Range: React.FC<Props> = ({ className, size, label, value, defaultValue, required, min, max, onChange, ...props }) => {
  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return 'h-1'
    case 'lg':
      return 'h-2'
    default: 
      return 'h-1.5'
  }})()

  return (
    <BaseField className={className}
      label={label}
      labelSize={size == 'sm' ? 'sm' : 'normal'}
      required={required}
    >
      <input className={`w-full bg-gray-200 rounded-md appearance-none cursor-pointer ${sizeClasses}`}
        type='range' 
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        {...props}
      />
    </BaseField>
  )
}

Range.defaultProps = {
  className: '',
  size: 'md',
  min: 0
}

export default Range;
