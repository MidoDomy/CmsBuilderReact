import React from 'react';
import Link from 'next/link';

import Row from 'components/Row';
import Col from 'components/Col';
import Collapse from 'components/Collapse';

interface elementsNavigationSidebarItem {
  id: number;
  name: string;
  parts: elementsNavigationSidebarItem[];
}

type Props = {
  element: elementsNavigationSidebarItem;
}

const ElementsNavigationSidebarItem: React.FC<Props> = ({ element }) => {
  const hasParts = element.parts && element.parts.length;

  // TODO: Set active condition
  const active = element.name == 'Blog card';

  return (
    <>
      {!hasParts ? 
        <>
          {/* Name */}
          <Link className={`block py-1 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
            href='#'
          >
            {element.name}
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
                  {element.name}
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
                {element.parts.map((part, index) => (
                  <li key={index}>
                    <ElementsNavigationSidebarItem element={part} />
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

export default ElementsNavigationSidebarItem;
