import React from 'react';

type Props = {
  className?: string,
}

const Textarea: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`relative text-sm ${className}`}>
      <textarea className={`w-full px-2 py-1.5 bg-transparent border border-gray-200 dark:border-gray-700 focus:border-sky-600 dark:focus:border-sky-700 outline-none rounded text-slate-800 dark:text-slate-200 transition-colors`}
        {...props}
      />
    </div>
  )
}

Textarea.defaultProps = {
  className: ''
}

export default Textarea;
