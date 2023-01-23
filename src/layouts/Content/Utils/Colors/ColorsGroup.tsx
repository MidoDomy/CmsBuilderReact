import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Color from 'layouts/content/utils/colors/Color';

type Props = {
  className?: string,
  name?: string,
  colors: Object
}

const ColorsGroup: React.FC<Props> = ({name, colors}) => {
  return (
    <Row gap={16}>
      <Col>
        <div className='w-16 shrink-0'>
          <div className='text-sm font-semibold text-slate-900 dark:text-slate-200'>{name}</div>
        </div>
      </Col>

      <Col fill>
        <Row gap={10}>
          {colors?.map((color, index) => (
            <Col key={index}>
              <Color
                name={color.name} 
                color={color.value} 
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

ColorsGroup.defaultProps = {
  className: '',
  name: ''
}

export default ColorsGroup;
