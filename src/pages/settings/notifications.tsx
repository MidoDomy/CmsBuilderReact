import type { NextPage } from 'next';

import { FiCheck } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import Section from 'layouts/general/Section';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsNotifications: NextPage = () => {
  return (
    <SettingsLayout 
      title='Notification settings' 
      description='Select the kinds of notifications you get about your activities.'
      actions={
        <Row justify='end' gapX={8}>
          <Col>
            <Button>Cancel</Button>
          </Col>

          <Col>
            <Button variant='primary'>
              <FiCheck size={18} />
              Save
            </Button>
          </Col>
        </Row>
      }
    >
      <Section title='General'>
        <Form.Group>
          <Form.Switch 
            id='assignedTask' 
            label="I'm assigned a task"
          >
            <span className='text-sm text-slate-500'>These are notifications to remind you of updates that you might have missed.</span>
          </Form.Switch>
        </Form.Group>

        <Form.Group>
          <Form.Switch 
            id='comments' 
            label='Comments'
          >
            <span className='text-sm text-slate-500'>Notify me when I&apos;m mentioned in a comment.</span>
          </Form.Switch>
        </Form.Group>
      </Section>

      <Section title='Mobile notifications'>
        <Form.Group>
          <Form.Switch 
            id='mobilePushNotifications' 
            label='Mobile push notifications'
          >
            <span className='text-sm text-slate-500'>Receive push notification whenever your organisation requires your attention.</span>
          </Form.Switch>
        </Form.Group>

        <Form.Group>
          <Form.Switch 
            id='newMessage' 
            label='Messages'
          >
            <span className='text-sm text-slate-500'>Receive push notification whenever you get a new message.</span>
          </Form.Switch>
        </Form.Group>
      </Section>

      <Section title='System'>
        <Form.Switch 
          id='reminders' 
          label='Reminders'
        >
          <span className='text-sm text-slate-500'>These are notifications to remind you of updates that you might have missed.</span>
        </Form.Switch>
      </Section>
    </SettingsLayout>
  )
}

export default SettingsNotifications;
