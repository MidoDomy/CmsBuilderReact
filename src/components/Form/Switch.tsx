import React from 'react';

type Props = {
  children?: React.ReactNode,
  className?: string,
  id: string
}

const Switch: React.FC<Props> = ({ children, className, id, ...props }) => {
  return (
    <div className={`relative flex text-sm overflow-hidden ${className}`}>
      <input className={`peer hidden`} type='checkbox' id={id} {...props} />
      
      <label className={`cursor-pointer peer-checked:[&>:first-child>div]:ml-auto peer-checked:[&>:first-child>div]:bg-white peer-checked:[&>:first-child]:bg-sky-500 peer-checked:[&>:first-child>div]:border-sky-500`}
        htmlFor={id}
      >
        <div className='relative h-6 aspect-[2/1] p-0.5 border border-gray-200 rounded-xl'>
          <div className='h-full aspect-square bg-gray-300 rounded-full'></div>
        </div>

        <span className='pl-2'>{children}</span>
      </label>
    </div>
  )
}

Switch.defaultProps = {
  className: ''
}

export default Switch;
