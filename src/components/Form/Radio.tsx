import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string,
  id: string,
  hideRadio: Boolean
}

const Radio: React.FC<Props> = ({ children, className, id, hideRadio, ...props }) => {
  return (
    <div className={`relative flex text-sm ${className}`}>
      <input className={`peer cursor-pointer ${hideRadio ? 'hidden' : ''}`} type='radio' id={id} {...props} />

      <label className={`opacity-50 peer-checked:opacity-100 peer-checked:text-slate-900 dark:peer-checked:text-white cursor-pointer transition-colors ${hideRadio ? '' : 'pl-2'}`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  )
}

Radio.defaultProps = {
  className: ''
}

export default Radio;
