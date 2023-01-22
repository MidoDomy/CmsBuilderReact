import React from 'react';

import BaseField from './BaseField';

type Props = {
  className?: string;
  label?: string;
  placeholder?: string;
  required?: Boolean;
  small?: Boolean;
  rows?: number;
}

const Textarea: React.FC<Props> = ({ className, label, placeholder, required, small, rows, ...props }) => {
  return (
    <BaseField className={className}
      label={label}
      required={required}
    >
      <div>
        <textarea className={`w-full min-h-[100px] bg-transparent border border-gray-200 focus:border-sky-500 rounded outline-none text-slate-800 transition-colors ${small ? 'px-2.5 py-1.5 text-sm' : 'px-3 py-2'}`}
          placeholder={placeholder}
          rows={rows}
          {...props}
        />
      </div>
    </BaseField>
  )
}

Textarea.defaultProps = {
  className: '',
  rows: 4
}

export default Textarea;
