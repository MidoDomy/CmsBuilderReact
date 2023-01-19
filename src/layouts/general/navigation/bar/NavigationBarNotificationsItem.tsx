import React from 'react';

import Avatar from 'components/Avatar';

type Props = {
  children?: React.ReactNode;
  avatar?: string;
  name: string;
  action?: string;
  actionFor?: string;
  time?: string;
  category?: string;
  unread?: Boolean;
}

const NavigationBarNotificationsItem: React.FC<Props> = ({children, avatar, name, action, actionFor, time, category, unread}) => {
  return (
    <div className={`px-4 [&:last-child>div]:border-b-0 transition-colors cursor-pointer ${unread ? 'bg-sky-50 hover:bg-sky-100' : 'hover:bg-gray-100'}`}>
      <div className='flex items-start gap-2 py-2 border-b border-gray-200'>
        <Avatar src={avatar} />

        <div>
          <div className='text-sm'>
            <span className='font-medium'>{name}</span> {action} <span className='font-medium'>{actionFor}</span>
          </div>

          <div className='flex items-center gap-1 text-sm text-slate-500'>
            {time} 
            <span className='inline-block border-2 border-gray-300 rounded-full'></span>
            {category}
          </div>

          {children &&
            <div className='pt-3'>
              {children}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

NavigationBarNotificationsItem.defaultProps = {

}

export default NavigationBarNotificationsItem;
