import React from 'react';

import Icon from 'components/Icon';

type Props = {
  className?: string,
  options: Array<string>
}

const Select: React.FC<Props> = ({ className, options, ...props }) => {
  return (
    <div className='relative'>
      <Icon className='absolute top-1/2 right-2 transform -translate-y-1/2'
        name='arrow-head-down' 
        size={16}
      />

      <select className={`appearance-none relative w-full px-2 py-1.5 bg-transparent border border-gray-200 dark:border-gray-700 focus:border-sky-600 dark:focus:border-sky-700 outline-none rounded text-sm text-slate-800 dark:text-slate-200 transition-colors`}
        {...props}
      >
        {options?.map((option, index) => (
          <option key={index} 
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.defaultProps = {
  className: ''
}

export default Select;
