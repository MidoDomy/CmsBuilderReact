import React from 'react';

import Label from './Label';

type Props = {
  children: React.ReactNode;
  className?: string;
  label?: string;
  error?: string;
  required?: Boolean;
}

const BaseField: React.FC<Props> = ({ children, className, label, error, required }) => {
  return (
    <div className={className}>
      {label && <Label>{label} {required && <span className='font-normal text-xs'>(required)</span>}</Label>}

      {children}

      {error && <div className='mt-0.5 text-xs font-medium text-red-600'>{error}</div>}
    </div>
  )
}

BaseField.defaultProps = {
  className: ''
}

export default BaseField;
