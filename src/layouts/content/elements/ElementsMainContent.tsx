import React from 'react';

import Container from 'components/Container';
import Image from 'components/Image';

const ElementsMainContent: React.FC = () => {
  return (
    <div className='h-full'>
      <Container className='h-full' 
        fluid
      >
        <div className='flex justify-center items-center h-full pb-60'>
          {/* Selected element */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(11, 30px)',
              gridTemplateColumns: 'repeat(8, 40px)',
              padding: '16px', 
              background: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px', 
              boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            }}
          >
            {/* Image */}
            <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
              style={{
                gridColumnStart: 1, 
                gridColumnEnd: -1, 
                gridRowStart: 1, 
                gridRowEnd: 8,
                marginBottom: '10px',
                borderRadius: '6px',
                overflow: 'hidden'
              }}
            >
              <Image className='h-full w-full object-cover' 
                alt='' 
              />
            </div>

            {/* Name */}
            <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
              style={{
                gridColumnStart: 1, 
                gridColumnEnd: -1, 
                gridRowStart: 8, 
                gridRowEnd: 9,
                fontWeight: 500,
                fontSize: '20px'
              }}
            >
              <div>
                Lorem ipsum dolor sit amet.
              </div>
            </div>

            {/* Description */}
            <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
              style={{
                gridColumnStart: 1, 
                gridColumnEnd: -1, 
                gridRowStart: 9, 
                gridRowEnd: 12,
                paddingTop: '5px',
                color: '#8491a3'
              }}
            >
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, placeat aliquid quisquam.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ElementsMainContent;
