import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Avatar from 'components/Avatar';
import SettingsSection from 'layouts/settings/SettingsSection';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsProfile: NextPage = () => {
  return (
    <SettingsLayout 
      title='My details' 
      description='Update your photo and personal details here.'
      actions={
        <Row justify='end' gapX={12}>
          <Col>
            <Button>Cancel</Button>
          </Col>

          <Col>
            <Button variant='primary'>Save</Button>
          </Col>
        </Row>
      }
    >
      <SettingsSection title='Name'>
        <Row>
          <Col fill>
            <Form.Input placeholder='Enter first name' />
          </Col>

          <Col fill>
            <Form.Input placeholder='Enter last name' />
          </Col>
        </Row>
      </SettingsSection>

      <SettingsSection title='Email address'>
        <Form.Input 
          prefix={<Icon name='letter' size={18} />} 
          placeholder='Enter email' 
          type='email'
        />
      </SettingsSection>

      <SettingsSection title='Your photo' description='This will be displayed on your profile.'>
        <Row>
          <Col>
            <Avatar size='xl' />
          </Col>

          <Col fill>
            <Form.FileUpload />
          </Col>
        </Row>
      </SettingsSection>

      <SettingsSection title='Role'>
        <Form.Input placeholder='Enter your role title' />
      </SettingsSection>

      <SettingsSection title='Country'>
        <Form.Select 
          placeholder='Select your country' 
          options={[
            {
              value: 'bosnia',
              name: 'Bosnia'
            }
          ]}
        />
      </SettingsSection>

      <SettingsSection title='Timezone'>
        <Form.Select 
          placeholder='Select your timezone' 
          options={[
            {
              value: 'pacificStandardTime',
              name: 'Pacific Standard Time'
            }
          ]}
        />
      </SettingsSection>

      <SettingsSection title='Bio' description='Write a short introduction.'>
        <Form.Textarea placeholder='Write short introduction' />
        <small className='text-slate-500'>Max 275 characters</small>
      </SettingsSection>
    </SettingsLayout>
  )
}

export default SettingsProfile;
