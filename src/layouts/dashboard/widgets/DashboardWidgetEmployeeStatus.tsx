import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';
import Button from 'components/Button';

const DashboardWidgetEmployeeStatus: React.FC = () => {
  return (
    <div className='h-full flex flex-col p-6 bg-white border border-gray-200 rounded-lg hover:shadow'>
      <div className='mb-6'>
        <Row justify='between' align='center'>
          <Col>
            <h5 className='font-medium text-lg'>Employee status</h5>
          </Col>

          <Col>
            <Button size='sm'>
              <Icon name='filter' size={16} />
              Filter & Sort
            </Button>
          </Col>
        </Row>
      </div>

      <div className='flex-1'>
        Employee grid table (TODO: https://dev-oasis.atlassian.net/browse/CB-79)
      </div>
    </div>
  )
}

export default DashboardWidgetEmployeeStatus;
