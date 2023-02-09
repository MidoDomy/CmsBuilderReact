import React from 'react';

import Label from './Label';

type Props = {
  children: React.ReactNode;
  className?: string;
  label?: string;
  labelSize?: 'sm' | 'normal';
  error?: string;
  required?: boolean;
}

const BaseField: React.FC<Props> = ({ children, className, label, labelSize, error, required }) => {
  return (
    <div className={className}>
      {label && <Label size={labelSize}>{label} {required && <span className='font-normal text-xs'>(required)</span>}</Label>}

      <div className='select-none'>
        {children}
      </div>

      {error && <div className='mt-0.5 text-xs font-medium text-red-600'>{error}</div>}
    </div>
  )
}

BaseField.defaultProps = {
  className: '',
  labelSize: 'normal'
}

export default BaseField;
