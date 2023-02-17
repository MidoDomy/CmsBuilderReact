import React from 'react';

import BaseField from './BaseField';

type Props = {
  className?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: any;
  onChange?: (e: any) => any;
}

const Input: React.FC<Props> = ({ className, value, onChange, prefix, suffix, size, label, placeholder, type, required, ...props }) => {

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return (prefix ? 'pl-8 ' : 'pl-2.5 ') + (suffix ? 'pr-8 ' : 'pr-2.5 ') + 'py-1 text-sm'
    case 'lg':
      return (prefix ? 'pl-8 ' : 'pl-3 ') + (suffix ? 'pr-8 ' : 'pr-3 ') + 'py-2'
    default: 
      return (prefix ? 'pl-8 ' : 'pl-3 ') + (suffix ? 'pr-8 ' : 'pr-3 ') + 'py-[9px] leading-4'
  }})()

  return (
    <BaseField className={className}
      label={label}
      labelSize={size == 'sm' ? 'sm' : 'normal'}
      required={required}
    >
      <div className='relative'>
        {prefix &&
          <span className='absolute w-8 h-full top-0 left-0 flex items-center justify-center text-slate-500'>
            {prefix}
          </span>
        }

        <input className={`w-full bg-white border border-gray-200 focus:border-sky-500 rounded outline-none transition-colors placeholder:text-slate-400 ${sizeClasses}`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />

        {suffix &&
          <span className='absolute w-8 h-full top-0 right-0 flex items-center justify-center text-slate-500'>
            {suffix}
          </span>
        }
      </div>
    </BaseField>
  )
}

Input.defaultProps = {
  className: '',
  size: 'md',
  type: 'text'
}

export default Input;
