import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import SettingsLayout from 'layouts/settings/SettingsLayout';
import Section from 'layouts/Section';
import Row from 'components/Structuring/Row';
import Col from 'components/Structuring/Col';
import Flex from 'components/Structuring/Flex';
import Form from 'components/Form';
import Button from 'components/Button';
import Image from 'components/Image';

const SettingsAppearance: NextPage = () => {
  return (
    <Layout>
      <SettingsLayout 
        title='Appearance' 
        description='Change how administration looks and feelds in your browser.'
      >
        <Section
          title='Interface theme'
          description='Select or customize your theme.'
        >
          <Row cols={3} gap={24}>
            <Col>
              <Form.Radio className='rounded-xl' id='system-theme' name='theme' hideRadio>
                <Image className='w-full' src='system-theme.png' />
              </Form.Radio>
            </Col>

            <Col>
              <Form.Radio className='rounded-xl' id='light-theme' name='theme' hideRadio>
                <Image className='w-full' src='light-theme.png' />
              </Form.Radio>
            </Col>

            <Col>
              <Form.Radio className='rounded-xl' id='dark-theme' name='theme' hideRadio>
                <Image className='w-full' src='dark-theme.png' />
              </Form.Radio>
            </Col>
          </Row>
        </Section>

        <Section
          title='Sticky header'
          description='Make the desktop header sticky on scroll down.'
        >
          <Form.Switch id='stickyHeader' />
        </Section>

        <div className='py-5'>
          <Flex justify='end' gap={12}>
            <Button>Cancel</Button>
            <Button variant='primary'>Save changes</Button>
          </Flex>
        </div>
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsAppearance;
