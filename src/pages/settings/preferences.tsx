import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import Image from 'components/Image';
import SettingsLayout from 'layouts/settings/SettingsLayout';
import Section from 'layouts/general/Section';

const SettingsPreferences: NextPage = () => {
  return (
    <SettingsLayout 
      title='Preferences' 
      description='Change how administration looks and feelds in your browser.'
      actions={
        <Row gapX={8}>
          <Col>
            <Button>Cancel</Button>
          </Col>

          <Col>
            <Button variant='primary'>Save</Button>
          </Col>
        </Row>
      }
    >
      <Section
        title='Interface theme'
        description='Select or customize your theme.'
      >
        <Row cols={3} gapX={24}>
          <Col fill>
            <Form.Radio className='rounded-xl' 
              id='systemTheme' 
              value='systemTheme'
              name='theme' 
              hideRadio
            >
              <Image className='w-full' src='system-theme.png' />
            </Form.Radio>
          </Col>

          <Col fill>
            <Form.Radio className='rounded-xl' 
              id='lightTheme' 
              value='lightTheme'
              name='theme' 
              hideRadio
            >
              <Image className='w-full' src='light-theme.png' />
            </Form.Radio>
          </Col>

          <Col fill>
            <Form.Radio className='rounded-xl' 
              id='darkTheme' 
              value='darkTheme'
              name='theme' 
              hideRadio
            >
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
    </SettingsLayout>
  )
}

export default SettingsPreferences;
