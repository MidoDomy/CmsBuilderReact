import React from 'react';

import Container from 'components/Container';

const ComponentsMainContent: React.FC = () => {
  return (
    <Container className='h-full' 
      fluid
    >
      <div className='flex justify-center items-center h-full pb-60'>
        <div className='w-96'>
          {/* Selected component */}
          {/* Container */}
          <div
            style={{
              padding: '16px', 
              background: '#cfe2ff', 
              border: '1px solid #0a58ca',
              borderRadius: '4px', 
              color: '#0a58ca', 
              fontSize: '14px', 
            }}
          >
            {/* Header */}
            <h4
              style={{
                marginBottom: '6px',
                fontSize: '16px', 
                fontWeight: 500
              }}
            >
              Header
            </h4>

            {/* Content */}
            <div
              style={{}}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet saepe voluptates doloribus velit quos quis voluptatibus facere voluptas perferendis maiores obcaecati voluptate, rem ratione totam laborum, vitae porro fugiat inventore.
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ComponentsMainContent;
