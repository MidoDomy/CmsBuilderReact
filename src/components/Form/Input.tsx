import React from 'react';

type Props = {
  className?: string,
  prefix?: string,
  suffix?: string
}

const Input: React.FC<Props> = ({ className, prefix, suffix, ...props }) => {
  return (
    <div className={`relative text-sm ${className}`}>
      {prefix &&
        <span className='absolute w-7 h-full top-0 left-0 flex items-center justify-center text-slate-500'>
          {prefix}
        </span>
      }

      <input className={`w-full px-2 py-1.5 bg-transparent border border-gray-200 dark:border-gray-700 focus:border-sky-600 dark:focus:border-sky-700 outline-none rounded text-slate-800 dark:text-slate-200 transition-colors${prefix ? ' pl-8' : ''}${suffix ? ' pr-8' : ''}`}
        {...props}
      />

      {suffix &&
        <span className='absolute w-7 h-full top-0 right-0 flex items-center justify-center text-slate-500'>
          {suffix}
        </span>
      }
    </div>
  )
}

Input.defaultProps = {
  className: ''
}

export default Input;
