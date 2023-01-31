import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/Icon';

type Props = {
  children?: React.ReactNode;
  className?: string;
  link: string;
  icon: string;
}

const SettingsSidebarLink: React.FC<Props> = ({children, className, link, icon, ...props}) => {
  const router = useRouter();
  const active = router.pathname.includes(link);

  return (
    <li>
      <Link className={`flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-md text-sm ${active ? 'bg-gray-100' : ''} ${className}`}
        href={link}
        {...props}
      >
        <Icon name={icon} size={18} />
        {children}
      </Link>
    </li>
  )
}

SettingsSidebarLink.defaultProps = {
  className: ''
}

export default SettingsSidebarLink;
