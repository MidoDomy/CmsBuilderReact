import React, { useState } from 'react';

import { FiMoreVertical, FiPlus, FiCopy, FiTrash2 } from 'react-icons/fi';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
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
            <FiMoreVertical size={16} />
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Menu className='-mr-1'>
          <Dropdown.MenuItem>
            <FiPlus size={16} />
            Add subcategory
          </Dropdown.MenuItem>

          <Dropdown.MenuItem>
            <FiCopy size={16} />
            Duplicate
          </Dropdown.MenuItem>

          <Dropdown.MenuItem
            variant='danger'
            onClick={() => setShowModalConfirmDeletion(true)}
          >
            <FiTrash2 size={16} />
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
