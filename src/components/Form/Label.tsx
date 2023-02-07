import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <label className='block mb-0.5 text-sm font-medium'
      {...props}
    >
      {children}
    </label>
  )
}

Label.defaultProps = {
  className: ''
}

export default Label;
