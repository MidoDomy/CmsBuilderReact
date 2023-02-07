import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import ColorsGroupItem from 'layouts/Content/Utils/Colors/group/ColorsGroupItem';
import ColorsGroupItemAdd from 'layouts/Content/Utils/Colors/group/ColorsGroupItemAdd';

type Props = {
  name: string;
  colors: {id: string; value: string; name: string;}[];
}

const ColorsGroup: React.FC<Props> = ({name, colors}) => {
  return (
    <div className='[&:hover_.add-color]:opacity-100'>
      <Row gapX={16}>
        <Col>
          <div className='w-16 text-sm font-medium'>{name}</div>
        </Col>

        <Col fill>
          <Row gapX={10}>
            {colors.map(color => (
              <Col key={color.id}>
                <ColorsGroupItem
                  name={color.name} 
                  color={color.value} 
                />
              </Col>
            ))}

            {/* Add color */}
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
