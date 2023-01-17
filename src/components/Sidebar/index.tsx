import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<Props> = ({children, className}) => {
  return (
    <div className={`flex flex-col w-full max-w-[250px] h-full bg-white shadow overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

Sidebar.defaultProps = {
  className: ''
}

export default Object.assign(Sidebar, {
  Header: SidebarHeader,
  Body: SidebarBody,
  Footer: SidebarFooter
});
