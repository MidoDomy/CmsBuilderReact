import React from 'react';

import Collapse from 'components/Collapse';

type ComponentsNavigationBtnProps = {
  component: Object
}

const ComponentsNavigationBtn: React.FC<ComponentsNavigationBtnProps> = ({ component }) => {
  return (
    <>
      {/* {!component.parts ? 
        <button className='flex items-center w-full py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-900 text-left transition-colors cursor-pointer'>
          {component.name}
        </button>
        :
        <Collapse>
          <Collapse.Trigger>
            {component.name}
          </Collapse.Trigger>

          <Collapse.Content>
            <ul>
              {component.parts?.map((part, index) => (
                <li key={index}>
                  <button className='flex items-center w-full py-2 pr-4 pl-7 hover:bg-gray-50 dark:hover:bg-gray-900 text-left transition-colors cursor-pointer' >
                    {part}
                  </button>
                </li>
              ))}
            </ul>   
          </Collapse.Content>
        </Collapse>
      } */}
    </>
  );
}

export default ComponentsNavigationBtn;
