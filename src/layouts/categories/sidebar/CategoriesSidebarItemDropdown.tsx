import React, { useState } from 'react';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import Icon from 'components/Icon';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const CategoriesSidebarItemDropdown: React.FC = () => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
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

          <Dropdown.MenuItem
            icon='trash'
            variant='danger'
            onClick={() => setShowModalConfirmDeletion(true)}
          >
            Delete
          </Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>

      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </>
  )
}

export default CategoriesSidebarItemDropdown;
