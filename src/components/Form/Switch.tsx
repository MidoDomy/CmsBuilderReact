import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id: string;
  value: string;
  label?: string;
  small?: Boolean;
}

const Switch: React.FC<Props> = ({ children, className, id, value, label, small, ...props }) => {
  return (
    <div className={`relative flex text-sm overflow-hidden select-none ${className}`}>
      <input className={`peer hidden`} type='checkbox' id={id} {...props} />
      
      <label className={`flex items-start cursor-pointer peer-checked:[&>:first-child>div]:ml-auto peer-checked:[&>:first-child>div]:bg-white peer-checked:[&>:first-child]:bg-sky-500 peer-checked:[&>:first-child]:border-transparent`}
        htmlFor={id}
      >
        <div className={`relative aspect-[2/1] p-0.5 border border-gray-200 rounded-xl transition-colors ${small ? 'h-4 mt-0.5' : 'h-[18px] mt-px'}`}>
          <div className='h-full aspect-square bg-gray-300 rounded-full transition-colors'></div>
        </div>

        <span className='pl-2'>
          {label && <div className={`${children ? 'mb-0.5' : ''} ${small ? 'text-sm' : ''}`}>{label}</div>}
          {children}
        </span>
      </label>
    </div>
  )
}

Switch.defaultProps = {
  className: '',
  label: ''
}

export default Switch;
