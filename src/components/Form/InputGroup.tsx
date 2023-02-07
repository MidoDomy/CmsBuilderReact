import React from 'react';

import BaseField from './BaseField';

type Props = {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const InputGroup: React.FC<Props> = ({ children, className, label, ...props }) => {
  return (
    <BaseField className={className}
      label={label}
    >
      <div className='input-group flex [&>*:not(:last-child)]:border-r-0 [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:rounded-l-none'
        {...props}
      > 
        {children}
      </div>
    </BaseField>
  )
}

InputGroup.defaultProps = {
  className: ''
}

export default InputGroup;
