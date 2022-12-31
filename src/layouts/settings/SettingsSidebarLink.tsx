import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode,
  className?: string,
  href: string
}

const SettingsSidebarLink: React.FC<Props> = ({children, className, href, ...props}) => {
  const router = useRouter();
  const active = router.pathname.includes(href);

  return (
    <Link className={`flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-md text-slate-900 ${active ? 'bg-gray-100' : ''} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}

SettingsSidebarLink.defaultProps = {
  className: ''
}

export default SettingsSidebarLink;
