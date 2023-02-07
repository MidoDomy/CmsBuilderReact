import React from 'react';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import Icon from 'components/Icon';

const CategoriesSidebarItemOptions: React.FC = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button
          variant='ghost'
          size='sm'
          square
        >
          <Icon name='three-dots' size={16} />
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Menu className='-mr-1'>
        <Dropdown.MenuItem icon='plus'>
          Add subcategory
        </Dropdown.MenuItem>

        <Dropdown.MenuItem icon='copy'>
          Duplicate
        </Dropdown.MenuItem>

        <Dropdown.MenuItem variant='danger' icon='trash'>
          Delete
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CategoriesSidebarItemOptions;
