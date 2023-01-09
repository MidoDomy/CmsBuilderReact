import React from 'react';

import Row from 'components/Structuring/Row';
import Col from 'components/Structuring/Col';
import Form from 'components/Form';

const DashboardSidebarOptions: React.FC = () => {
  return (
    <>
      <Row cols={2} gap={8}>
        <Col>
          <Form.Input type='number' prefix='C' defaultValue={20} />
        </Col>

        <Col>
          <Form.Input type='number' prefix='R' defaultValue={15} />
        </Col>

        <Col>
          <Form.Input type='number' prefix='G' defaultValue={12} />
        </Col>
      </Row>
    </>
  )
}

export default DashboardSidebarOptions;
