import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'normal';
}

const Label: React.FC<Props> = ({ children, className, size, ...props }) => {
  return (
    <label className={`block mb-1 ${size == 'sm' ? 'text-xs' : 'text-sm'}`}
      {...props}
    >
      {children}
    </label>
  )
}

Label.defaultProps = {
  className: '',
  size: 'normal'
}

export default Label;
