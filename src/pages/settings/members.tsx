import type { NextPage } from 'next';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import SettingsLayout from 'layouts/settings/SettingsLayout';

const SettingsUsersAndPermissions: NextPage = () => {
  return (
    <SettingsLayout 
      title='Members settings' 
      description='Change members settings and permissions.'
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
    </SettingsLayout>
  )
}

export default SettingsUsersAndPermissions;
