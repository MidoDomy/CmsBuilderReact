import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import Image from 'components/Image';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cms builder - Login</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Cms builder - Login' key='title' />
      </Head>

      <div className='h-screen'>
        <Row className='h-full'
          gapX={0}
        >
          {/* Left side */}
          <Col span={6}>
            <div className='flex flex-col h-full'>
              {/* Header */}
              <div className='w-full px-16 py-7 border-b font-semibold text-2xl'>
                Logo
              </div>

              <div className='flex-1 flex items-center justify-center px-10 pt-5 pb-32'>
                <div className='w-full max-w-md'>
                  <div className='mb-6'>
                    <h1 className='mb-1 font-semibold text-3xl'>Welcome back</h1>
                    <p className='text-slate-500'>Welcome back! Please enter your details.</p>
                  </div>

                  <div className='mb-5'>
                    <Form>
                      <Form.Group>
                        <Form.Input 
                          label='Email'
                          size='lg' 
                          placeholder='hi@example.com' 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Input 
                          label='Password'
                          size='lg' 
                          type='password' 
                          placeholder='Enter password' 
                        />
                      </Form.Group>
                    </Form>
                  </div>

                  <div className='flex justify-end mb-6'>
                    <Button variant='link'>
                      Forgot Password?
                    </Button>
                  </div>

                  <div className='flex flex-col gap-3 mb-12'>
                    <Button 
                      href='/dashboard'
                      size='lg'
                      variant='primary'
                      block
                    >
                      Login
                    </Button>

                    <Button
                      href='/dashboard'
                      size='lg'
                      block
                    >
                      Continue with Google
                    </Button>
                  </div>

                  <div>
                    <p className='text-center text-slate-500'>
                      Don't have an account? {' '}
                      <Button className='text-base text-slate-900' 
                        variant='link'
                      >
                        Sign up for free
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right side */}
          <Col span={6}>
            <div className='flex justify-center items-center h-full bg-gray-100 border-l border-gray-200 shadow-inner'>
              <Image className='scale-90' 
                src='app-image.png' 
                alt='App image'
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Login;
