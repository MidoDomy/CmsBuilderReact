import React from 'react';

type Props = {
  children?: React.ReactNode,
  className?: string;
  text?: String
}

const Tag: React.FC<Props> = ({ children, className, text, ...props }) => {
  return (
    <span className={`py-0.5 px-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 text-xs font-semibold ${className}`}
     {...props}
    >
      {text ? text : children}
    </span>
  );
}

Tag.defaultProps = {
  className: ''
}

export default Tag;
