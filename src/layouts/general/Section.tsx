import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';

type Props = {
  children: React.ReactNode,
  className?: string,
  title?: string,
  description?: string
}

const Section: React.FC<Props> = ({children, className, title, description, ...props}) => {
  return (
    <section className={`py-7 border-b border-gray-200 ${className}`} {...props}>
      <Row cols={7} gap={32}>
        <Col span={2}>
          <h4 className='mb-1 text-slate-900'>{title}</h4>
          <p className='text-sm'>{description}</p>
        </Col>

        <Col span={5}>
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
