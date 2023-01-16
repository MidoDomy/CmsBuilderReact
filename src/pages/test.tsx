import type { NextPage } from 'next';

import Avatar from 'components/Avatar';

const Test: NextPage = () => {
  return (
    <div className='p-20'>
      {/* Avatar */}
      <div className="flex items-center gap-2">
        <span className='pr-2 text-sm font-medium'>Avatar:</span>

        <Avatar size='sm' />
        <Avatar />
        <Avatar size='lg' />
      </div>
    </div>
  )
}

export default Test;
