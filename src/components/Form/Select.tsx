import React from 'react';

import Icon from 'components/Icon';

type Props = {
  className?: string;
  options: Array<Object>;
  placeholder?: string;
}

const Select: React.FC<Props> = ({ className, options, placeholder, ...props }) => {
  return (
    <div className={`relative flex items-center pl-2.5 pr-6 py-1.5 border border-gray-200 rounded text-sm text-slate-800 transition-colors ${className}`}>
      <select className='appearance-none bg-transparent focus:outline-none'
        {...props}
      >
        {placeholder &&
          <option disabled selected hidden>{placeholder}</option>
        }
        {options?.map((option, index) => (
          <option key={index} 
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>

      <Icon
        name='arrow-head-down' 
        size={16}
      />
    </div>
  )
}

Select.defaultProps = {
  className: ''
}

export default Select;
