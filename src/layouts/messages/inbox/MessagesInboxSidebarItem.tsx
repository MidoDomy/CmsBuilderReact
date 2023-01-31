import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Avatar from 'components/Avatar';

type Props = {
  avatar?: string;
  name?: string;
  text?: string;
  time?: string;
  isUnread?: boolean;
  acive?: boolean;
}

const MessagesInboxSidebarItem: React.FC<Props> = ({avatar, name, text, time, isUnread, active}) => {
  return (
    <div className={`px-4 [&:last-child>div]:border-b-0 cursor-pointer ${isUnread && !active ? 'bg-sky-50 hover:bg-sky-100' : active ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
      <div className='py-3 border-b border-gray-200'>
        <Row gapX={8} noWrap>
          <Col>
            <Avatar src={avatar} size='sm' />
          </Col>

          <Col fill>
            <div className='w-36 mb-0.5 font-medium text-sm truncate'>{name}</div>
            <div className='w-36 text-xs text-slate-600 truncate'>{text}</div>
          </Col>

          <Col>
            <div className='text-xs text-slate-600'>{time}</div>
            {!isUnread ? 
              <div className='flex justify-end pt-1 pr-1.5'>
                <div className='h-3 w-1.5 border-r-2 border-b-2 border-sky-500 rotate-45 scale-90'></div>
              </div>
              :
              <div className='flex justify-end'>
                <div className='mt-1 px-[5px] py-px bg-sky-500 rounded-full font-medium text-2xs text-white'>
                  1
                </div>
              </div>
            }
          </Col>
        </Row>
      </div>
    </div>
  )
}

MessagesInboxSidebarItem.defaultProps = {
  name: 'Unknown'
}

export default MessagesInboxSidebarItem;
