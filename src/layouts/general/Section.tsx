import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Section: React.FC<Props> = ({children, title, description}) => {
  return (
    <section className='py-7 first:pt-0 border-b border-gray-200'>
      <Row>
        <Col span={4}>
          <div className='text-sm'>
            <h4 className='mb-1 font-medium'>{title}</h4>
            <p className='text-slate-500'>{description}</p>
          </div>
        </Col>

        <Col span={6}>
          {children}
        </Col>
      </Row>
    </section>
  )
}

export default Section;
