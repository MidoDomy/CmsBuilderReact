import React from 'react';

import { BiCheck } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';

const EmailsContent: React.FC = () => {
  return (
    <div className='flex-1'>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='pb-3 border-b border-gray-200'>
            <Row justify='between'>
              <Col>
                <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Emails</h2>
              </Col>

              <Col>
                <Row gapX={10}>
                  <Col>
                    <Button>
                      <FiPlus size={18} />
                      Add
                    </Button>
                  </Col>

                  <Col>
                    <Button variant='primary'>
                      <BiCheck size={18} />
                      Save
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container>
        Emails
      </Container>
    </div>
  )
}

export default EmailsContent;
