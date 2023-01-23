import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';

const DashboardWidgetStatus: React.FC = () => {
  return (
    <div className='w-full h-full p-4 bg-white ring-1 ring-gray-100 rounded-lg hover:shadow-md'>
      <Row align='start'>
        <Col fill>
          <div className='font-semibold text-lg text-slate-900'>Noice</div>
          <div className='text-sm'>Status</div>
        </Col>

        <Col>
          <div className='p-2 bg-gray-100 rounded-md'>
            <Icon name='edit' size={20} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DashboardWidgetStatus;
