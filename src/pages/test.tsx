import type { NextPage } from 'next';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Icon from 'components/Icon';

const Test: NextPage = () => {
  return (
    <div className='p-20'>
      {/* Avatar */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Avatar:</span>

        <Avatar size='xs' />
        <Avatar size='sm' />
        <Avatar />
        <Avatar size='lg' />
        <Avatar size='xl' />
      </div>

      {/* Avatars group */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Avatars group:</span>

        <Avatar.Group space='sm'>
          <Avatar size='sm' />
          <Avatar size='sm' />
          <Avatar size='sm' />
        </Avatar.Group>

        <Avatar.Group>
          <Avatar />
          <Avatar />
          <Avatar />
        </Avatar.Group>

        <Avatar.Group space='lg'>
          <Avatar size='lg' />
          <Avatar size='lg' />
          <Avatar size='lg' />
        </Avatar.Group>
      </div>

      {/* Button */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Button:</span>

        <Button size='sm'>Button</Button>
        <Button>Button</Button>
        <Button size='lg'>Button</Button>
        <Button variant='secondary'>Button</Button>
        <Button variant='primary'>Button</Button>
        <Button rounded>
          <Icon name='edit' size={16} />
        </Button>
        <Button square>
          <Icon name='edit' size={16} />
        </Button>
      </div>

      {/* Button group */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Button group:</span>

        <Button.Group>
          <Button variant='secondary'>Button</Button>
          <Button variant='primary'>Button</Button>
          <Button rounded>
            <Icon name='edit' size={16} />
          </Button>
        </Button.Group>

        <Button.Group>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Button.Group>
      </div>
    </div>
  )
}

export default Test;
