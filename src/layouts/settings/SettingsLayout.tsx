import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import SettingsSidebar from './SettingsSidebar';

type Props = {
  children?: React.ReactNode,
  className?: string,
  title?: string,
  description?: string
}

const SettingsLayout: React.FC<Props> = ({children, className, title, description}) => {
  return (
    <Row className='bg-gray-50'>
      <Col>
        <SettingsSidebar />
      </Col>

      <Col fill>
        <div className='h-[calc(100vh_-_57px)] pt-4 pl-10'>
          <div className='h-full p-8 bg-white border-t border-l border-gray-200 rounded-tl-3xl'>
            <h2 className='flex items-center gap-3 mb-8 text-3xl text-slate-900'>
              <span className='block w-2.5 h-2.5 rounded-full bg-slate-900'></span>
              <span>Settings</span>
            </h2>

            <div className='pb-5 border-b border-gray-200'>
              <h4 className='mb-1 text-xl text-slate-900'>{title}</h4>
              <p className='text-sm'>{description}</p>
            </div>
            
            {/* Content */}
            <div>
              {children}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

SettingsLayout.defaultProps = {
  className: ''
}

export default SettingsLayout;
