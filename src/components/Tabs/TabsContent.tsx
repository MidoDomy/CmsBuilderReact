import React, { useContext } from 'react';

import { TabsContext } from 'contexts/Tabs';

type Props = {
  children?: React.ReactNode,
  className?: string,
  name: string
}

const TabsContent: React.FC<Props> = ({ children, className, name }) => {
  const {current} = useContext(TabsContext);

  return (
    <>
      {current == name && 
        <div className={`${className}`}>
          {children}
        </div>
      }
    </>
  );
}

TabsContent.defaultProps = {
  className: 'py-2'
}

export default TabsContent;
