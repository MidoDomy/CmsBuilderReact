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
          gap={0}
        >
          {/* Left side */}
          <Col span={6}>
            <div className='flex flex-col h-full'>
              {/* Header */}
              <div className='w-full px-16 py-8 border-b font-semibold text-xl text-slate-900'>
                Logo
              </div>

              <div className='flex-1 flex items-center justify-center px-10 pt-5 pb-32'>
                <div className='w-full max-w-md'>
                  {/* Login form */}
                  <Form>
                    <h1 className='mb-1 font-semibold text-3xl text-slate-900'>Welcome back</h1>
                    <p className='mb-6 text-slate-500'>Welcome back! Please enter your details.</p>

                    <div className='mb-3'>
                      <label className='inline-flex mb-1 font-medium' htmlFor="">Email</label>
                      <Form.Input size='lg' placeholder='hi@example.com' />
                    </div>

                    <div className='mb-2'>
                      <label className='inline-flex mb-1 font-medium' htmlFor="">Password</label>
                      <Form.Input size='lg' type='password' placeholder='Enter password' />
                    </div>

                    <p className='mb-12 text-center'>
                      <a className='text-sky-500 hover:text-sky-600'
                        href="#"
                      >Forgot Password?</a>
                    </p>

                    <Button className='mb-4' 
                      href='/dashboard'
                      size='lg'
                      variant='primary'
                      block
                    >Login</Button>

                    <Button
                      href='/dashboard'
                      size='lg'
                      block
                    >Continue with Google</Button>
                  </Form>

                  <p className='pt-12 text-center text-slate-500'>
                    Don't have an account? 
                    <a className='px-1 font-semibold text-slate-900 underline hover:no-underline' 
                      href="#"
                    >Sign up for free</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right side */}
          <Col span={6}>
            <Row className='h-full bg-gray-100'
              align='center'
              justify='center'
            >
              <Image className='scale-90' 
                src='app-image.png' 
                alt='App image'
              />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Login;
