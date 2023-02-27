import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';

import Row from 'components/Row';
import Col from 'components/Col';
import Image from 'components/Image';
import Form from 'components/Form';
import Button from 'components/Button';

const Login: NextPage = () => {
  const [resetPassword, setResetPassword] = useState(false);

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

              <div className='flex-1 flex items-center justify-center px-10 pt-5 pb-56'>
                <div className='w-full max-w-md'>
                  {/* Login */}
                  {!resetPassword && 
                    <div>
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
                        <Button 
                          variant='link'
                          onClick={() => setResetPassword(true)}
                        >
                          Forgot Password?
                        </Button>
                      </div>
    
                      <Button 
                        href='/dashboard'
                        size='lg'
                        variant='primary'
                        block
                      >
                        Login
                      </Button>
                    </div>
                  }

                  {/* Reset password */}
                  {resetPassword &&
                    <div>
                      <div className='mb-6'>
                        <h1 className='mb-1 font-semibold text-3xl'>Forgot password?</h1>
                        <p className='text-slate-500'>Don&apos;t worry, you can reset it via email.</p>
                      </div>
    
                      <div className='mb-6'>
                        <Form>
                          <Form.Group>
                            <Form.Input 
                              label='Email'
                              size='lg' 
                              placeholder='hi@example.com' 
                            />
                          </Form.Group>
                        </Form>
                      </div>

                      <div className='flex flex-col gap-3'>
                        <Button 
                          size='lg'
                          variant='primary'
                          block
                        >
                          Send
                        </Button>

                        <Button 
                          size='lg'
                          block
                          onClick={() => setResetPassword(false)}
                        >
                          Go back to login
                        </Button>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </Col>

          {/* Right side */}
          <Col span={6}>
            <div className='flex justify-center items-center h-full bg-gray-100 border-l border-gray-200 shadow-inner'>
              <Image className='scale-90 border rounded-md shadow-sm' 
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
