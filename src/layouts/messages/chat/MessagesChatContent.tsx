import React from 'react';

import MessagesChatContentItem from './MessagesChatContentItem';

const MessagesChatContent: React.FC = () => {
  return (
    <div className='flex flex-col justify-end gap-2 h-full pb-6 px-6'>
      <MessagesChatContentItem 
        name='Robert Fox'
        time='10:15 am'
        messages={[
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi nulla, commodi accusamus iste incidunt omnis eius soluta aperiam enim, quae corrupti molestias excepturi aut temporibus reiciendis aspernatur culpa! Unde?',
          'Nova poruka'
        ]}
      />

      <MessagesChatContentItem 
        name='You'
        time='10:15 am'
        messages={[
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ]}
        right
      />
    </div>
  )
}

export default MessagesChatContent;
