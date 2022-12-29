import React from 'react';

type Props = {
  children: React.ReactNode,
  className?: string,
  id: string,
  hideCheck: Boolean
}

const Check: React.FC<Props> = ({ children, className, id, hideCheck, ...props }) => {
  return (
    <div className='relative flex text-sm'>
      <input className={`peer cursor-pointer ${hideCheck ? 'hidden' : ''}`} type='checkbox' id={id} {...props} />

      <label className={`opacity-50 peer-checked:opacity-100 peer-checked:text-slate-900 dark:peer-checked:text-white cursor-pointer transition-colors ${hideCheck ? '' : 'pl-2'}`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  )
}

Check.defaultProps = {
  className: ''
}

export default Check;
