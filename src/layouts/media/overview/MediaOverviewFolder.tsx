import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Image from 'components/Image';

type Props = {
  name: string;
  size: string;
}

const MediaOverviewFolder: React.FC<Props> = ({ name, size }) => {
  return (
    <div className='relative w-60 h-36 p-3 bg-gray-300 rounded-lg cursor-pointer folder'>
      <Row className='relative z-10 h-full'
        gapX={8}
        cols={7}
      >
        <Col span={3}>
          <div className='aspect-square transition-transform hover:-translate-y-2'>
            <Image className='w-full rounded' src='app-image.png' />
          </div>
        </Col>

        <Col span={2}>
          <div className='aspect-square transition-transform hover:-translate-y-2'>
            <Image className='w-full rounded' src='light-theme.png' />
          </div>
        </Col>
        
        <Col span={2}>
          <div className='aspect-square transition-transform hover:-translate-y-2'>
            <Image className='w-full rounded' src='dark-theme.png' />
          </div>
        </Col>
      </Row>

      <div className='absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-end p-4 bg-gray-200 rounded-lg'>
        <div className='font-medium'>{name}</div>
        <div className='text-sm text-slate-500'>{size}</div>
      </div>
    </div>
  )
}

export default MediaOverviewFolder;
