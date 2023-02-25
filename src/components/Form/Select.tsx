import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import BaseField from './BaseField';

type Props = {
  className?: string;
  selectClass?: string;
  options: {value: string; name: string;}[];
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  placeholder?: string;
  value?: any;
  defaultValue?: any;
  required?: boolean;
  onChange?: (e: any) => any;
}

const Select: React.FC<Props> = ({ className, selectClass, options, size, label, placeholder, value, defaultValue, required, onChange, ...props }) => {

  const sizeClasses = (() => {switch(size) {
    case 'sm':
      return 'py-1 pl-2.5 pr-8 text-sm'
    case 'lg':
      return 'py-2 pl-3 pr-8'
    default: 
      return 'py-2.5 pl-3 pr-8 leading-4'
  }})()

  return (
    <BaseField className={className}
      label={label}
      labelSize={size == 'sm' ? 'sm' : 'normal'}
      required={required}
    >
      <div className='relative'>
        <select className={`appearance-none w-full bg-white border border-gray-200 focus:border-sky-500 rounded focus:outline-none select-none cursor-pointer ${sizeClasses} ${selectClass}`}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          {...props}
        >
          {placeholder && <option disabled value={'default'}>{placeholder}</option>}

          {options?.map((option, index) => (
            <option key={index} 
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </select>

        <FiChevronDown className='absolute top-1/2 right-3 -translate-y-1/2'
          size={16}
        />
      </div>
    </BaseField>
  )
}

Select.defaultProps = {
  className: '',
  size: 'md'
}

export default Select;
