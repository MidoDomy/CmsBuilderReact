import React from 'react';
import Link from 'next/link';

import Row from 'components/Row';
import Col from 'components/Col';
import Collapse from 'components/Collapse';

interface LayoutsNavigationSidebarItem {
  id: number;
  name: string;
  parts: LayoutsNavigationSidebarItem[];
}

type Props = {
  item: LayoutsNavigationSidebarItem;
}

const LayoutsDetailNavigationSidebarItem: React.FC<Props> = ({ item }) => {
  const hasParts = item.parts && item.parts.length;

  // TODO: Set active condition
  const active = item.name == 'Section landing';

  return (
    <>
      {!hasParts ? 
        <>
          {/* Name */}
          <Link className={`block py-1 px-2 rounded cursor-pointer transition-colors ${active ? 'bg-sky-50 text-sky-500' : 'hover:bg-gray-50'}`}
            href='#'
          >
            {item.name}
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
                  {item.name}
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
                {item.parts.map((part, index) => (
                  <li key={index}>
                    <LayoutsDetailNavigationSidebarItem item={part} />
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

export default LayoutsDetailNavigationSidebarItem;
