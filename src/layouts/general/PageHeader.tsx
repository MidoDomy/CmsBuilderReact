import React from 'react';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';

type Props = {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
}

const PageHeader: React.FC<Props> = ({title, description, actions}) => {
  return (
    <div className='mb-16 mt-9'>
      <Container>
        <div className='pb-2.5 border-b border-gray-200'>
          <Row justify='between' align='end'>
            <Col>
              <h1 className='mb-1 font-bold text-4xl'>{title}</h1>
              <p className='text-slate-500'>{description}</p>
            </Col>

            <Col>
              {actions}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default PageHeader;
