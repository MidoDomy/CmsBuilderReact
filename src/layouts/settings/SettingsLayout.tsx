import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import SettingsSidebar from './SettingsSidebar';

type Props = {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  title?: string;
  description?: string;
}

const SettingsLayout: React.FC<Props> = ({children, actions, title, description}) => {
  return (
    <Layout>
      <Row className='h-full'
        gapX={0}
      >
        <Col>
          <SettingsSidebar />
        </Col>

        <Col fill>
          <div className='pt-10 pb-8 px-16'>
            <div className='pb-5 border-b border-gray-200'>
              <Row justify='between' align='center'>
                <Col>
                  <h4 className='mb-2 font-medium text-3xl'>{title}</h4>
                  <p className='text-sm text-slate-500'>{description}</p>
                </Col>

                <Col>
                  {actions}
                </Col>
              </Row>
            </div>
            
            {/* Content */}
            <div>
              {children}
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default SettingsLayout;
