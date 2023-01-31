import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';
import Button from 'components/Button';
import Section from 'layouts/general/Section';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsGeneral: NextPage = () => {
  return (
    <SettingsLayout 
      title='Notification settings' 
      description='Select the kinds of notifications you get about your activities.'
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
    </SettingsLayout>
  )
}

export default SettingsGeneral;
