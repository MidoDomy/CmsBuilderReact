import React from 'react';

import Row from 'components/Structuring/Row';
import Col from 'components/Structuring/Col';

type Props = {
  children: React.ReactNode,
  className?: string,
  title?: string,
  description?: string
}

const Section: React.FC<Props> = ({children, className, title, description, ...props}) => {
  return (
    <section className={`py-7 border-b border-gray-200 ${className}`} {...props}>
      <Row cols={3} gap={32}>
        <Col>
          <h4 className='mb-1 text-slate-900'>{title}</h4>
          <p className='text-sm'>{description}</p>
        </Col>

        <Col span={2}>
          {children}
        </Col>
      </Row>
    </section>
  )
}

Section.defaultProps = {
  className: ''
}

export default Section;
