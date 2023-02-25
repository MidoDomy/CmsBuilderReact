import React, { useState } from 'react';

import { FiX } from 'react-icons/fi';

import Sidebar from 'components/Sidebar';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import MediaFolderSidebarFolder from './sidebar/MediaFolderSidebarFolder';
import MediaFolderSidebarItem from './sidebar/MediaFolderSidebarItem';

const MediaOverviewSidebar: React.FC = () => {
  const [isSelectedItem, setIsSelectedItem] = useState(true);

  return (
    <Sidebar className='w-96 pt-7'>
      <Sidebar.Header className='pt-0 px-5'>
        <Row gapX={16} align='center' justify='between'>
          <Col>
            <div className='font-medium text-2xl'>
              {isSelectedItem ?
                'Dark theme'
                :
                'Folder name'
              }
            </div>
          </Col>

          <Col>
            <Button
              variant='ghost'
              size='sm'
              square
              onClick={() => setIsSelectedItem(!isSelectedItem)}
            >
              <FiX size={22} />
            </Button>
          </Col>
        </Row>
      </Sidebar.Header>

      {isSelectedItem ?
        <MediaFolderSidebarItem />
        :
        <MediaFolderSidebarFolder />
      }
    </Sidebar>
  )
}

export default MediaOverviewSidebar;
