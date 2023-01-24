import React from 'react';

import MessagesChatHeader from './chat/MessagesChatHeader';
import MessagesChatFooter from './chat/MessagesChatFooter';
import MessagesChatContent from './chat/MessagesChatContent';

const MessagesChat: React.FC = () => {
  return (
    <div className='flex flex-col h-full'>
      <MessagesChatHeader />

      <div className='flex-1'>
        <MessagesChatContent />
      </div>

      <MessagesChatFooter />
    </div>
  )
}

export default MessagesChat;
