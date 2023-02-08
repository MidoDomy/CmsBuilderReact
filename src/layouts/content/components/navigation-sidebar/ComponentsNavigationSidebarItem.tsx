import React from 'react';
import Link from 'next/link';

import Row from 'components/Row';
import Col from 'components/Col';
import Collapse from 'components/Collapse';

interface componentsNavigationSidebarItem {
  id: number;
  name: string;
  parts: Array<string>;
}

type Props = {
  component: componentsNavigationSidebarItem;
}

const ComponentsNavigationSidebarItem: React.FC<Props> = ({ component }) => {
  const hasParts = component.parts && component.parts.length;

  // TODO: Set active condition
  const active = false;

  return (
    <>
      {!hasParts ? 
        <>
          {/* Name */}
          <Link className={`block py-1 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
            href='#'
          >
            {component.name}
          </Link>
        </>
        :
        <Collapse active={active}>
          {/* Item */}
          <div>
            <Row gapX={2} align='center'>
              <Col fill>
                {/* Name */}
                <Link className={`block py-1 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
                  href='#'
                >
                  {component.name}
                </Link>
              </Col>

              <Col>
                {/* Trigger */}
                <Collapse.Trigger />
              </Col>
            </Row>
          </div>
    
          {/* Parts */}
          <Collapse.Content>
            <div className='pl-2'>
              <ul className='pl-0.5 border-l'>
                {component.parts.map((part, index) => (
                  <li key={index}>
                    <Link className={`block py-1 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
                      href='#'
                    >
                      {part}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Collapse.Content>
        </Collapse>
      }
    </>
  );
}

export default ComponentsNavigationSidebarItem;
