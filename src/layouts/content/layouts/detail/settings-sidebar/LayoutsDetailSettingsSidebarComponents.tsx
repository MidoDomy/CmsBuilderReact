import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Image from 'components/Image';
import Tabs from 'components/Tabs';
import LayoutsDetailSettingsSidebarComponentsItem from './components/LayoutsDetailSettingsSidebarComponentsItem';

const LayoutsDetailSettingsSidebarComponents: React.FC = () => {
  return (
    <div>
      <Tabs active='components'>
        <Tabs.Nav className='mb-4 p-1.5 bg-gray-100 rounded-md'>
          <Tabs.NavItem className='w-1/2 justify-center py-0.5 !border-0 rounded text-sm'
            activeClass='bg-white'
            name='components'
          >
            Components
          </Tabs.NavItem>

          <Tabs.NavItem className='w-1/2 justify-center py-0.5 !border-0 rounded text-sm' 
            activeClass='bg-white'
            name='elements'
          >
            Elements
          </Tabs.NavItem>
        </Tabs.Nav>

        {/* Components */}
        <Tabs.Content name='components'>
          <Row gapX={10} gapY={10}>
            <Col span={6}>
              <LayoutsDetailSettingsSidebarComponentsItem name='Text'>
                <span className='text-sm font-medium'>Lorem ipsum</span>
              </LayoutsDetailSettingsSidebarComponentsItem>
            </Col>

            <Col span={6}>
              <LayoutsDetailSettingsSidebarComponentsItem name='Image'>
                <Image alt='' />
              </LayoutsDetailSettingsSidebarComponentsItem>
            </Col>

            <Col span={6}>
              <LayoutsDetailSettingsSidebarComponentsItem name='Button'>
                <Button>Button</Button>
              </LayoutsDetailSettingsSidebarComponentsItem>
            </Col>
          </Row>
        </Tabs.Content>

        {/* Elements */}
        <Tabs.Content name='elements'>
          <Row gapX={10} gapY={10}>
            <Col span={6}>
              <LayoutsDetailSettingsSidebarComponentsItem name='Text'>
                <span className='text-sm font-medium'>Blog</span>
              </LayoutsDetailSettingsSidebarComponentsItem>
            </Col>
          </Row>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

export default LayoutsDetailSettingsSidebarComponents;
