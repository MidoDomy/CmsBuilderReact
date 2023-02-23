import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Image from 'components/Image';
import Tabs from 'components/Tabs';
import Collapse from 'components/Collapse';
import LayoutsEditSettingsSidebarComponentsItem from './components/LayoutsEditSettingsSidebarComponentsItem';

const LayoutsEditSettingsSidebarComponents: React.FC = () => {
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
          <Collapse active>
            <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
              Basic
            </Collapse.Trigger>

            <Collapse.Content className='pt-3 pb-3 px-1'>
              <Row gapX={8} gapY={12}>
                <Col span={4}>
                  <LayoutsEditSettingsSidebarComponentsItem name='Text'>
                    <span className='text-sm font-medium text-center'>Lorem</span>
                  </LayoutsEditSettingsSidebarComponentsItem>
                </Col>

                <Col span={4}>
                  <LayoutsEditSettingsSidebarComponentsItem name='Image'>
                    <Image alt='' className='px-3' />
                  </LayoutsEditSettingsSidebarComponentsItem>
                </Col>

                <Col span={4}>
                  <LayoutsEditSettingsSidebarComponentsItem name='Button'>
                    <Button size='xs'>Button</Button>
                  </LayoutsEditSettingsSidebarComponentsItem>
                </Col>
              </Row>
            </Collapse.Content>
          </Collapse>
        </Tabs.Content>

        {/* Elements */}
        <Tabs.Content name='elements'>
          <Row gapX={10} gapY={10}>
            <Col span={6}>
              <LayoutsEditSettingsSidebarComponentsItem name='Blog'>
                <span className='text-sm font-medium'>Blog preview</span>
              </LayoutsEditSettingsSidebarComponentsItem>
            </Col>
          </Row>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

export default LayoutsEditSettingsSidebarComponents;
