import React from 'react';

import BaseField from './BaseField';

type Props = {
  className?: string;
  prefix?: string;
  suffix?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  placeholder?: string;
  type?: string;
  required?: Boolean;
}

const Input: React.FC<Props> = ({ className, prefix, suffix, size, label, placeholder, type, required, ...props }) => {

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return (prefix ? 'pl-8 ' : 'pl-3 ') + (suffix ? 'pr-8 ' : 'pr-3 ') + 'py-1.5 text-sm'
    case 'lg':
      return (prefix ? 'pl-8 ' : 'pl-3 ') + (suffix ? 'pr-8 ' : 'pr-3 ') + 'py-2'
    default: 
      return (prefix ? 'pl-8 ' : 'pl-3 ') + (suffix ? 'pr-8 ' : 'pr-3 ') + 'py-[9px] leading-4'
  }})()

  return (
    <BaseField className={className}
      label={label}
      required={required}
    >
      <div className='relative'>
        {prefix &&
          <span className='absolute w-7 h-full top-0 left-0 flex items-center justify-center text-slate-500'>
            {prefix}
          </span>
        }

        <input className={`w-full bg-transparent border border-gray-200 focus:border-sky-500 rounded outline-none text-slate-800 transition-colors ${sizeClasses}`}
          placeholder={placeholder}
          type={type}
          {...props}
        />

        {suffix &&
          <span className='absolute w-7 h-full top-0 right-0 flex items-center justify-center text-slate-500'>
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
