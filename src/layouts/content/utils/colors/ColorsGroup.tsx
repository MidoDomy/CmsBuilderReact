import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import ColorsGroupItem from 'layouts/content/utils/colors/group/ColorsGroupItem';
import ColorsGroupItemAdd from 'layouts/content/utils/colors/group/ColorsGroupItemAdd';

type Props = {
  name: string;
  colors: {id: string; value: string; name: string;}[];
}

const ColorsGroup: React.FC<Props> = ({name, colors}) => {
  return (
    <div>
      <Row gapX={16}>
        <Col>
          <div className='w-20 text-sm font-medium'>{name}</div>
        </Col>

        <Col fill>
          <Row gapX={10} gapY={20}>
            {colors.map(color => (
              <Col key={color.id}>
                <ColorsGroupItem
                  name={color.name} 
                  color={color.value} 
                />
              </Col>
            ))}

            {/* Add color item */}
            <Col>
              <ColorsGroupItemAdd />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ColorsGroup;
