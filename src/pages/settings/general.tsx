import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsGeneral: NextPage = () => {
  return (
    <SettingsLayout 
      title='General settings' 
      description='General setting options.'
      actions={
        <Row gapX={12}>
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
