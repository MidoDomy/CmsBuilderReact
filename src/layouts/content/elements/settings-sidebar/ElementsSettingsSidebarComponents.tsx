import React from 'react';

import Collapse from 'components/Collapse';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Image from 'components/Image';
import ElementsSettingsSidebarComponentsItem from './components/ElementsSettingsSidebarComponentsItem';

const ElementsSettingsSidebarComponents: React.FC = () => {
  return (
    <div>
      <Collapse active>
        <Collapse.Trigger className='py-1 px-2 rounded cursor-pointer transition-colors hover:bg-gray-50 text-sm'>
          Basic
        </Collapse.Trigger>

        <Collapse.Content className='pt-3 pb-3 px-1'>
          <Row gapX={8} gapY={12}>
            <Col span={4}>
              <ElementsSettingsSidebarComponentsItem name='Text'>
                <span className='text-sm font-medium text-center'>Lorem</span>
              </ElementsSettingsSidebarComponentsItem>
            </Col>

            <Col span={4}>
              <ElementsSettingsSidebarComponentsItem name='Image'>
                <Image alt='' className='px-3' />
              </ElementsSettingsSidebarComponentsItem>
            </Col>

            <Col span={4}>
              <ElementsSettingsSidebarComponentsItem name='Button'>
                <Button size='xs'>Button</Button>
              </ElementsSettingsSidebarComponentsItem>
            </Col>
          </Row>
        </Collapse.Content>
      </Collapse>
    </div>
  )
}

export default ElementsSettingsSidebarComponents;
