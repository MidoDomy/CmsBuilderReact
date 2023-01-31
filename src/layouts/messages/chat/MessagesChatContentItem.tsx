import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Avatar from 'components/Avatar';

type Props = {
  avatar?: string;
  name?: string;
  time?: string;
  right?: boolean;
  messages: Array<string>
}

const MessagesChatContentItem: React.FC<Props> = ({avatar, name, time, right, messages}) => {
  return (
    <div className={`flex flex-col gap-1 ${right ? 'items-end' : 'items-start'}`}>
      <Row gapX={8} align='center' reverse={right ? true : false}>
        <Col>
          <Avatar size='sm' />
        </Col>

        <Col>
          <div className='font-medium text-sm'>{name}</div>
        </Col>

        <Col>
          <div className={`text-sm text-slate-600 ${right ? 'pr-6' : 'pl-6'}`}>{time}</div>
        </Col>
      </Row>

      {messages?.map((message, index) =>   
        <div key={index} className={`max-w-[75%] mt-1 py-2 px-3 rounded-xl ${right ? 'bg-sky-500 rounded-br-none text-white' : 'bg-gray-200 rounded-tl-none'}`}>
          {message}
        </div>
      )}
    </div>
  )
}

export default MessagesChatContentItem;
