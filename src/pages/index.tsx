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
        <div className='w-full max-w-4xl py-7 px-9 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow transition-shadow'>
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
          
          <div className='mb-14'>
            <Row gapX={16} gapY={16}>
              <Col span={4}>
                <Form.Checkbox
                  id='headless'
                  value='headless'
                  label='Headless'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='dragAndDrop'
                  value='dragAndDrop'
                  label='Drag and drop'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='emails'
                  value='emails'
                  label='Email templates'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='members'
                  value='members'
                  label='Members'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='messages'
                  value='messages'
                  label='Chat'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='multiChannels'
                  value='multiChannels'
                  label='Multi-channels'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='calendar'
                  value='calendar'
                  label='Calendar'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='employees'
                  value='employees'
                  label='Employees'
                  small
                />
              </Col>

              <Col span={4}>
                <Form.Checkbox
                  id='taskBoard'
                  value='taskBoard'
                  label='Tasks board'
                  small
                />
              </Col>
            </Row>
          </div>

          <div className='text-center'>
            <Button 
              href='/login'
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
