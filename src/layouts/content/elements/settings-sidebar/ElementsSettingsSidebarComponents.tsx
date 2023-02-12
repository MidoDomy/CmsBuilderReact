import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Image from 'components/Image';
import ElementsSettingsSidebarComponentsItem from './components/ElementsSettingsSidebarComponentsItem';

const ElementsSettingsSidebarComponents: React.FC = () => {
  return (
    <div>
      <Row gapX={10} gapY={10}>
        <Col span={6}>
          <ElementsSettingsSidebarComponentsItem name='Text'>
            <span className='text-sm font-medium'>Lorem ipsum</span>
          </ElementsSettingsSidebarComponentsItem>
        </Col>

        <Col span={6}>
          <ElementsSettingsSidebarComponentsItem name='Image'>
            <Image alt='' />
          </ElementsSettingsSidebarComponentsItem>
        </Col>

        <Col span={6}>
          <ElementsSettingsSidebarComponentsItem name='Button'>
            <Button>Button</Button>
          </ElementsSettingsSidebarComponentsItem>
        </Col>
      </Row>
    </div>
  )
}

export default ElementsSettingsSidebarComponents;
