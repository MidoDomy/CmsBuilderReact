import type { NextPage } from 'next';

import { FiCheck } from 'react-icons/fi';

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
          {/* Name */}
          <Section title='Name'>
            <Form.Group>
              <Form.Input
                label='Name'
                placeholder='Enter name...'
              />
            </Form.Group>
          </Section>

          <Section
            title='Role'
            description='Position you do.'
          >
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
          </Section>

          <Section
            title='Skills'
            description='Knowledge and technologies you know.'
          >
            <Form.Group>
              <div className='flex gap-2'>
                <Tag>Html</Tag>
                <Tag>Css</Tag>
                <Tag>React</Tag>
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Select
                label='Skills'
                options={[
                  {value: 'html', name: 'Html'},
                  {value: 'css', name: 'Css'},
                  {value: 'react', name: 'React'}
                ]}
              />
            </Form.Group>
          </Section>

          <Section 
            title='Fire the employee'
            description='If you want to fire an employee, you can do so using this action.'
          >
            <Button
              variant='danger'
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
