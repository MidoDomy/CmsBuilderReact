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
      <Row className='h-full'>
        <Col>
          <SettingsSidebar />
        </Col>

        <Col fill>
          <div className='h-full pt-4 pl-10'>
            <div className='h-full p-8 bg-white rounded-tl-3xl shadow'>
              <h2 className='flex items-center gap-3 mb-8 font-medium text-3xl'>
                <span className='block w-2.5 h-2.5 rounded-full bg-slate-900'></span>
                <span>Settings</span>
              </h2>

              <div className='pb-5 border-b border-gray-200'>
                <Row align='center'>
                  <Col span={4}>
                    <h4 className='mb-1 font-medium text-xl'>{title}</h4>
                    <p className='text-sm text-slate-500'>{description}</p>
                  </Col>

                  <Col fill>
                    {actions}
                  </Col>
                </Row>
              </div>
              
              {/* Content */}
              <div>
                {children}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default SettingsLayout;
