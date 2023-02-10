import React from 'react';

import Container from 'components/Container';

const ComponentsMainContent: React.FC = () => {
  return (
    <Container className='h-full' 
      fluid
    >
      <div className='flex justify-center items-center h-full pb-60'>
        {/* Selected component */}
        <button 
          style={{
            padding: '8px 16px', 
            background: '#38bdf8', 
            borderRadius: '8px', 
            color: '#ffffff', 
            fontSize: '14px', 
            fontWeight: 500
          }}
        >
          Lorem ipsum
        </button>
      </div>
    </Container>
  )
}

export default ComponentsMainContent;
