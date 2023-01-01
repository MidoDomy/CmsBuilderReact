import React from 'react';

import Flex from 'components/Structuring/Flex';

type Props = {
  children: React.ReactNode,
  className?: string
}

const TabsNav: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <Flex gap={6} className={`selection-none p-0.5 bg-white border border-gray-200 dark:border-gray-700 rounded-3xl text-sm text-slate-900 dark:text-white ${className}`}
      {...props}
    > 
      {children}
    </Flex>
  )
}

TabsNav.defaultProps = {
  className: ''
}

export default TabsNav;
