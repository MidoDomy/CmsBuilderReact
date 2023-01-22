import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id: string;
  value: string;
  label?: string;
  hideCheckbox?: Boolean;
  small?: Boolean;
}

const Checkbox: React.FC<Props> = ({ children, className, id, value, label, hideCheckbox, small, ...props }) => {
  return (
    <div className={`relative flex items-start gap-2 overflow-hidden select-none ${className}`}>
      <input className={`peer cursor-pointer appearance-none ml-px ring-1 ring-gray-300 rounded-sm checked:bg-sky-500 checked:ring-1 checked:ring-sky-500 transition-colors ${small ? 'w-3 h-3 mt-1' : 'w-[14px] h-[14px] mt-[5px]'} ${hideCheckbox ? 'hidden' : ''}`} 
        type='checkbox' 
        id={id} 
        value={value}
        {...props} 
      />

      <div className={`peer-checked:block hidden absolute border-r-2 border-b-2 border-white rotate-45 scale-90 ${small ? 'top-[5px] left-1 h-2 w-[5px]' : 'top-1.5 left-[5px] h-2.5 w-1.5'}`}></div>

      <label className='flex-1 cursor-pointer'
        htmlFor={id}
      >
        {label && <div className={`${children ? 'mb-0.5' : ''} ${small ? 'text-sm' : ''}`}>{label}</div>}
        {children}
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  className: ''
}

export default Checkbox;
