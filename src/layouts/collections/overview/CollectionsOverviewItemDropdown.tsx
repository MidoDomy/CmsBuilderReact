import React, { useState } from 'react';

import { FiMoreVertical, FiChevronRight, FiEdit2, FiTrash2 } from 'react-icons/fi';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const CollectionsOverviewItemDropdown: React.FC = () => {
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <Button
            size='sm'
            rounded
          >
            <FiMoreVertical size={16} />
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Menu className='-mr-1'>
          <Dropdown.MenuItem link='/collections/list'>
            <FiChevronRight size={16} />
            Overview
          </Dropdown.MenuItem>

          <Dropdown.MenuItem link='/collections/edit'>
            <FiEdit2 size={16} />
            Edit
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

export default CollectionsOverviewItemDropdown;
