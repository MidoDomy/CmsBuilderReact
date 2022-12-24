import React from 'react';

import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode,
  className?: string,
  icon?: string,
  text: string
}

const ContextMenuItem: React.FC<Props> = ({ children, className, icon, text, ...props }) => {
  return (
    <span className={`flex gap-3 items-center py-1.5 px-3 text-sm hover:bg-gray-50 text-slate-900 cursor-pointer ${className}`} {...props}>
      {icon && <Icon name={icon} size={15} />}
      {text}
    </span>
  );
}

ContextMenuItem.defaultProps = {
  className: ''
}

export default ContextMenuItem;
