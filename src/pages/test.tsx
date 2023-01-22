import type { NextPage } from 'next';
import { useState } from 'react';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';
import Tabs from 'components/Tabs';
import Modal from 'components/Modal';
import Sidebar from 'components/Sidebar';
import Collapse from 'components/Collapse';
import Form from 'components/Form';

const Test: NextPage = () => {

  const [showModal, setShowModal] = useState(false);

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

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Tabs:</span>

        <Tabs active='Settings' className='max-w-xl'>
          <Tabs.Nav>
            <Tabs.NavItem name='Home'>Home</Tabs.NavItem>
            <Tabs.NavItem name='Profile'>Profile</Tabs.NavItem>
            <Tabs.NavItem name='Settings'>Settings</Tabs.NavItem>
          </Tabs.Nav>

          <Tabs.Content name='Home'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere, aperiam molestiae reiciendis asperiores eum nesciunt labore at ipsum temporibus repellat autem qui optio numquam aliquid vel animi veniam deserunt?
          </Tabs.Content>
          <Tabs.Content name='Profile'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus praesentium maiores, quos, amet iusto vero distinctio possimus illo odio dolor, ex voluptas nulla sapiente itaque ipsum consequatur deleniti! Dolorem!
          </Tabs.Content>
          <Tabs.Content name='Settings'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum labore, rem nihil sint rerum quas aperiam saepe omnis voluptate obcaecati nulla culpa iste nostrum dolorum doloribus recusandae id cumque repellat!
          </Tabs.Content>
        </Tabs>
      </div>

      {/* Modal */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Modal:</span>

        <Button onClick={()=>setShowModal(true)}>Open modal</Button>

        <Modal isOpen={showModal} onClose={()=>setShowModal(false)} showClose>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo voluptatem laborum esse maiores natus quam quos eius, pariatur vel cupiditate similique voluptatum accusamus eveniet fuga illo debitis. Dicta, nostrum.
          </Modal.Body>

          <Modal.Footer>
            <div className='flex gap-3 justify-end'>
              <Button onClick={()=>setShowModal(false)}>Close</Button>
              <Button variant='primary' onClick={()=>setShowModal(false)}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Sidebar */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Sidebar:</span>

        <div className='w-full h-96'>
          <Sidebar>
            <Sidebar.Header>
              Header
            </Sidebar.Header>

            <Sidebar.Body>
              Body
            </Sidebar.Body>

            <Sidebar.Footer>
              Footer
            </Sidebar.Footer>
          </Sidebar>
        </div>
      </div>

      {/* Collapse */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Collapse:</span>

        <Collapse className='w-96'>
          <Collapse.Trigger>Trigger</Collapse.Trigger>
          <Collapse.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab est aperiam earum quia sequi. Nam tenetur soluta tempora officia mollitia reprehenderit ea? Tempore, maiores velit cum blanditiis illo aliquam.
          </Collapse.Content>
        </Collapse>
      </div>

      {/* Form */}
      <div className='text-lg font-medium'>Form components</div>
      {/* Select */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Select:</span>

        <Form.Select className='w-56'
          label='Select field'
          placeholder='Placeholder'
          size='sm'
          options={[
            {
              value: 'value',
              name: 'Value'
            }
          ]}
        />

        <Form.Select className='w-56'
          label='Select field'
          placeholder='Placeholder'
          options={[
            {
              value: 'value',
              name: 'Value'
            }
          ]}
        />

        <Form.Select className='w-56'
          label='Select field'
          placeholder='Placeholder'
          size='lg'
          options={[
            {
              value: 'value',
              name: 'Value'
            }
          ]}
        />
      </div>
      {/* Input */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Input:</span>

        <Form.Input
          label='Input field'
          placeholder='Input field'
          size='sm'
        />

        <Form.Input
          label='Input field'
          placeholder='Input field'
        />

        <Form.Input
          label='Input field'
          placeholder='Input field'
          size='lg'
        />
      </div>
      {/* Radio */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Radio:</span>

        <Form.Radio
          id='testRadio1'
          name='testRadio'
          label='Input field 1'
          value='Radio 1 value'
          small
        />
        <Form.Radio
          id='testRadio2'
          name='testRadio'
          label='Input field 2'
          value='Radio 2 value'
        />
      </div>
      {/* Checkbox */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Checkbox:</span>

        <Form.Checkbox
          id='testCheckbox1'
          label='Input field 1'
          value='Checkbox 1 value'
          small
        />
        <Form.Checkbox
          id='testCheckbox2'
          label='Input field 2'
          value='Checkbox 2 value'
        />
      </div>
      {/* Switch */}
      <div className="flex items-center gap-2 mb-4">
        <span className='pr-2 text-sm font-medium'>Switch:</span>

        <Form.Switch
          id='testSwitch1'
          label='Input field 1'
          value='Switch 1 value'
          small
        />
        <Form.Switch
          id='testSwitch2'
          label='Input field 2'
          value='Switch 2 value'
        />
      </div>
    </div>
  )
}

export default Test;
