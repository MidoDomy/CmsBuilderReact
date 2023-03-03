import React from 'react';

type Props = {
  children?: React.ReactNode,
  className?: string;
  text?: String
}

const Tag: React.FC<Props> = ({ children, className, text, ...props }) => {
  return (
    <span className={`py-0.5 px-2 rounded-xl bg-gray-200 text-xs font-medium ${className}`}
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
