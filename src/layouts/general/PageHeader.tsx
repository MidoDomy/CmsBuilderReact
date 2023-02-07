import React from 'react';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';

type Props = {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  returnRoute?: string;
}

const PageHeader: React.FC<Props> = ({title, description, actions, returnRoute}) => {
  return (
    <div className='mb-16 mt-9'>
      <Container>
        <div className='pb-2.5 border-b border-gray-200'>
          <Row justify='between' align='end'>
            <Col>
              <div className='flex gap-3'>
                {returnRoute && 
                  <Button 
                    href={returnRoute}
                    variant='link'
                  >
                    <Icon name='arrow-head-left' size={16} />
                  </Button>
                }

                <div>
                  <h1 className='mb-1 font-bold text-4xl'>{title}</h1>

                  {description && <p className='text-slate-500'>{description}</p>}
                </div>
              </div>
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
