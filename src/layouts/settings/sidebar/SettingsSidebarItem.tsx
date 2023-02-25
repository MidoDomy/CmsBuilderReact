import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  link: string;
  text?: string;
  icon: React.ReactNode;
}

const SettingsSidebarLink: React.FC<Props> = ({link, text, icon, ...props}) => {
  const router = useRouter();
  const active = router.pathname.includes(link);

  return (
    <li>
      <Link className={`flex items-center gap-3 py-2 px-3 rounded-md text-sm ${active ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
        href={link}
        {...props}
      >
        {icon && icon}
        {text}
      </Link>
    </li>
  )
}

export default SettingsSidebarLink;
