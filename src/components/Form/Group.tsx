import React from 'react';

import Flex from 'components/Structuring/Flex';

type Props = {
  children: React.ReactNode,
  className?: string
}

const Group: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <Flex className='p-2 border border-gray-200 dark:border-gray-700 rounded text-sm text-slate-900 dark-text-white'
      {...props}
    > 
      {children}
    </Flex>
  )
}

Group.defaultProps = {
  className: ''
}

export default Group;
