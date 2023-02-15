import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';

const Install: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cms builder - Install</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Cms builder - Install' key='title' />
      </Head>

      <div className='h-screen flex justify-center items-center bg-gray-50'>
        <div className='w-full max-w-4xl py-7 px-9 border border-gray-200 rounded bg-white'>
          <h1 className='mb-8 font-medium text-3xl text-center'>Installation</h1>

          <div className='mb-10'>
            <h3 className='mb-2 font-medium text-sm'>Predefined</h3>
            <Button.Group>
              <Button block>All</Button>
              <Button block>Personal</Button>
              <Button block>Bloger</Button>
              <Button block>Company</Button>
              <Button block>Big company</Button>
            </Button.Group>
          </div>

          <Row>
            <Col span={6}>
              <div className='mb-5'>
                <h3 className='mb-3 font-medium text-base'>Basic</h3>

                <div>
                  <Form.Group className='!mb-2'>
                    <Form.Checkbox
                      id='content'
                      value='content'
                      label='Content'
                      small
                    />
                  </Form.Group>

                  <Form.Group className='!mb-2'>
                    <Form.Checkbox
                      id='emails'
                      value='emails'
                      label='Emails'
                      small
                    />
                  </Form.Group>

                  <Form.Group className='!mb-2'>
                    <Form.Checkbox
                      id='messages'
                      value='messages'
                      label='Messages'
                      small
                    />
                  </Form.Group>
                </div>
              </div>

              <div className='mb-5'>
                <h3 className='mb-3 font-medium text-base'>Organisation</h3>

                <div>
                  <Form.Group className='!mb-2'>
                    <Form.Checkbox
                      id='calendar'
                      value='calendar'
                      label='Calendar'
                      small
                    />
                  </Form.Group>
                </div>
              </div>
            </Col>

            <Col span={6}>
              <div className='mb-5'>
                <h3 className='mb-3 font-medium text-base'>Workspace</h3>

                <div>
                  <Form.Group className='!mb-2'>
                    <Form.Checkbox
                      id='employees'
                      value='employees'
                      label='Employees'
                      small
                    />
                  </Form.Group>

                  <Form.Group className='!mb-2'>
                    <Form.Checkbox
                      id='taskBoard'
                      value='taskBoard'
                      label='Task board'
                      small
                    />
                  </Form.Group>
                </div>
              </div>
            </Col>
          </Row>

          <div className='mt-5 text-center'>
            <Button 
              href='/'
              variant='primary'
            >
              Start installation
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Install;
