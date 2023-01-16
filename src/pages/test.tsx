import type { NextPage } from 'next';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';

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

      {/* Dropdown */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Dropdown:</span>

        <Dropdown position='bottom right'>
          <Dropdown.Trigger>
            <Button>Button</Button>
          </Dropdown.Trigger>
          
          <Dropdown.Menu>
            <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
            <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
            <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown position='top right'>
          <Dropdown.Trigger>
            <Button>Button</Button>
          </Dropdown.Trigger>
          
          <Dropdown.Menu>
            <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
            <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
            <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Trigger>
            <Icon name='three-dots' />
          </Dropdown.Trigger>
          
          <Dropdown.Menu>
            <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
            <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
            <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default Test;
