import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id: string;
  name: string;
  label?: string;
  hideRadio?: Boolean;
}

const Radio: React.FC<Props> = ({ children, className, id, name, label, hideRadio, ...props }) => {
  return (
    <div className='relative flex items-start gap-2 overflow-hidden'>
      <input className={`cursor-pointer appearance-none w-[14px] h-[14px] mt-[5px] ml-px ring-1 ring-gray-300 rounded-full checked:bg-sky-500 checked:border-[3px] checked:border-white checked:ring-1 checked:ring-sky-500 transition-colors ${hideRadio ? 'hidden' : ''}`} 
        type='radio' 
        id={id} 
        name={name}
        {...props} 
      />

      <label className={`flex-1 cursor-pointer ${className}`}
        htmlFor={id}
      >
        {label && <div className={`${children ? 'mb-0.5' : ''}`}>{label}</div>}
        {children}
      </label>
    </div>
  )
}

Radio.defaultProps = {
  className: ''
}

export default Radio;
