import React from 'react';

import { FiFile } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';

const DashboardWidgetActivityTimelinePreview: React.FC = () => {
  return (
    <div>
      <div className='mb-3 font-medium text-sm'>Recent activity</div>

      <div>
        {/* Item */}
        <div>
          <Row gapX={8}>
            <Col>
              <div className='flex flex-col items-center h-full'>
                <div className='p-1.5 bg-sky-100 rounded-full'>
                  <FiFile size={14} />
                </div>

                <div className='flex-1 border-l'></div>
              </div>
            </Col>

            <Col fill>
              <div className='pb-3 text-xs'>
                <div className='text-slate-500'>00 hrs ago</div>

                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas doloribus?
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Item */}
        <div>
          <Row gapX={8}>
            <Col>
              <div className='flex flex-col items-center h-full'>
                <div className='p-1.5 bg-sky-100 rounded-full'>
                  <FiFile size={14} />
                </div>

                <div className='flex-1 border-l'></div>
              </div>
            </Col>

            <Col fill>
              <div className='pb-3 text-xs'>
                <div className='text-slate-500'>00 hrs ago</div>

                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas doloribus?
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className='pt-1.5 text-center'>
          <span className='underline text-xs'>
            Load more
          </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardWidgetActivityTimelinePreview;
