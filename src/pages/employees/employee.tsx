import type { NextPage } from 'next';

import { FiCheck, FiHome, FiMail, FiPhone, FiPlus, FiX } from 'react-icons/fi';

import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Form from 'components/Form';
import Tag from 'components/Tag';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Section from 'layouts/general/Section';

const Employee: NextPage = () => {
  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Employee name'
        description='Employee role'
        actions={
          <Row gapX={8}>
            <Col>
              <Button href='/employees/overview'>Cancel</Button>
            </Col>
  
            <Col>
              <Button variant='primary'>
                <FiCheck size={18} />
                Save
              </Button>
            </Col>
          </Row>
        }
      />

      {/* Content */}
      <div>
        <Container>
          {/* General */}
          <Section 
            title='General'
            description='General informations about employee.'
          >
            <Form.Group>
              <Row gapX={16}>
                <Col span={6}>
                  <Form.Input
                    label='Name'
                    placeholder='Enter name...'
                  />
                </Col>

                <Col span={6}>
                  <Form.Select
                    label='Gender'
                    options={[
                      {value: 'female', name: 'Female'},
                      {value: 'male', name: 'Male'}
                    ]}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Form.Input
                label='Date of birth'
                placeholder='Enter date of birth...'
              />
            </Form.Group>
          </Section>

          {/* Contact informations */}
          <Section
            title='Contact'
            description='Enter the ways you can contact your employee.'
          >
            <div className='mb-5'>
              <div className='flex items-center justify-between mb-2 p-1.5 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
                <div className='flex items-center gap-1.5 text-sm text-slate-500'>
                  <FiMail size={16} />
                  <span>test@test.com</span>
                </div>

                <Button 
                  variant='danger-outline'
                  size='xs'
                  rounded
                >
                  <FiX />
                </Button>
              </div>

              <div className='flex items-center justify-between mb-2 p-1.5 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
                <div className='flex items-center gap-1.5 text-sm text-slate-500'>
                  <FiPhone size={16} />
                  <span>+12 234 2524</span>
                </div>

                <Button 
                  variant='danger-outline'
                  size='xs'
                  rounded
                >
                  <FiX />
                </Button>
              </div>
            </div>

            <Button 
              variant='secondary'
              size='sm'
            >
              <FiPlus size={16} />
              Add new contact
            </Button>
          </Section>

          {/* Address */}
          <Section
            title='Adress'
            description='Address informations about employee.'
          >
            <div className='mb-5'>
              <Row gapX={16}>
                <Col span={6}>
                  <div className='p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
                    <Row gapX={8}>
                      <Col>
                        <FiHome size={22} className='text-sky-500' />
                      </Col>

                      <Col fill>
                        <div className='mb-1 font-medium'>Home</div>
                        <div className='text-sm text-slate-500'>22 Address</div>
                        <div className='text-sm text-slate-500'>City</div>
                        <div className='text-sm text-slate-500'>Country</div>
                      </Col>

                      <Col>
                        <Button 
                          variant='danger-outline'
                          size='xs'
                          rounded
                        >
                          <FiX />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

            <Button 
              variant='secondary'
              size='sm'
            >
              <FiPlus size={16} />
              Add new address
            </Button>
          </Section>

          {/* Employment */}
          <Section title='Employment informations'>
            <Form.Group>
              <Form.Input
                label='Date of start'
                defaultValue='01/03/2022'
              />
            </Form.Group>

            <Form.Group>
              <Form.Select
                label='Status'
                options={[
                  {value: 'full-time', name: 'Full time'},
                  {value: 'part-time', name: 'Part time'}
                ]}
              />
            </Form.Group>

            <Form.Group>
              <Form.Select
                label='Role'
                options={[
                  {value: 'frontend', name: 'Frontend'},
                  {value: 'backend', name: 'Backend'},
                  {value: 'fullstack', name: 'Fullstack'}
                ]}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Skills</Form.Label>
              <div className='flex gap-2'>
                <Tag>Html</Tag>
                <Tag>Css</Tag>
                <Tag>React</Tag>
                <Tag><FiPlus size={14} /></Tag>
              </div>
            </Form.Group>
          </Section>

          {/* Notes */}
          <Section
            title='Note'
            description='Note about employee.'
          >
            <div className='mb-5'>
              <div className='mb-2 py-1.5 px-2.5 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
                <Row gapX={16}>
                  <Col fill>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Col>

                  <Col>
                    <Button 
                      variant='danger-outline'
                      size='xs'
                      rounded
                    >
                      <FiX />
                    </Button>
                  </Col>
                </Row>

                <div className='mt-1 text-xs text-slate-500 text-right'>01/03/2022</div>
              </div>

              <div className='mb-2 py-1.5 px-2.5 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
                <Row gapX={16}>
                  <Col fill>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta maiores ipsum sequi amet. Consequatur, aut?
                  </Col>

                  <Col>
                    <Button 
                      variant='danger-outline'
                      size='xs'
                      rounded
                    >
                      <FiX />
                    </Button>
                  </Col>
                </Row>

                <div className='mt-1 text-xs text-slate-500 text-right'>01/03/2022</div>
              </div>
            </div>

            <Form.Textarea label='Note' />

            <div className='mt-2 text-right'>
              <Button
                variant='primary'
                size='sm'
              >
                <FiPlus size={16} />
                Save note
              </Button>
            </div>
          </Section>

          {/* Danger actions */}
          <Section 
            title='Fire the employee'
            description='If you want to fire an employee, you can do so using this action.'
          >
            <Button
              variant='danger'
              block
            >
              Fire the employee from the organization
            </Button>
          </Section>
        </Container>
      </div>
    </Layout>
  )
}

export default Employee;
