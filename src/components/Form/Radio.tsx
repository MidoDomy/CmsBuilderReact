import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id: string;
  name: string;
  value: string;
  label?: string;
  hideRadio?: boolean;
  small?: boolean;
}

const Radio: React.FC<Props> = ({ children, className, id, name, value, label, hideRadio, small, ...props }) => {
  return (
    <div className={`flex items-start gap-2 overflow-hidden select-none ${className}`}>
      <input className={`cursor-pointer appearance-none ml-px ring-1 ring-gray-300 rounded-full checked:bg-sky-500 checked:border-[3px] checked:border-white checked:ring-1 checked:ring-sky-500 transition-colors ${small ? 'w-3 h-3 mt-1' : 'w-[14px] h-[14px] mt-[5px]'} ${hideRadio ? 'hidden' : ''}`} 
        type='radio' 
        id={id} 
        name={name}
        value={value}
        {...props} 
      />

      <label className='flex-1 cursor-pointer'
        htmlFor={id}
      >
        {label && <div className={`${children ? 'mb-0.5' : ''} ${small ? 'text-sm' : ''}`}>{label}</div>}
        {children}
      </label>
    </div>
  )
}

Radio.defaultProps = {
  className: ''
}

export default Radio;
