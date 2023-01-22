import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  text?: string;
}

const InputGroupText: React.FC<Props> = ({ children, className, text, ...props }) => {
  return (
    <div className={`shrink-0 inline-flex items-center px-2.5 bg-gray-50 border border-gray-200 rounded text-sm text-slate-600 ${className}`}
      {...props}
    > 
      {text}
      {children}
    </div>
  )
}

InputGroupText.defaultProps = {
  className: ''
}

export default InputGroupText;
