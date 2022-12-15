import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

type Props = {
  children: React.ReactNode,
  className?: string
}

const Sidebar: React.FC<Props> = ({children, className}) => {
  return (
    <div className={'flex flex-col min-h-screen bg-base-white shadow-lg ' + className}>
      {children}
    </div>
  )
}

export default Object.assign(Sidebar, {
  Header: SidebarHeader,
  Body: SidebarBody,
  Footer: SidebarFooter
});
