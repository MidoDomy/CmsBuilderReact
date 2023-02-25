import React, { useState } from 'react';

import { FiMoreVertical, FiEdit2, FiTrash2 } from 'react-icons/fi';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import ColorsGroupModalAddItem from './ColorsGroupModalAddItem';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const ColorsGroupItemDropdown: React.FC = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Dropdown
        closedClasses='opacity-0'
        openClasses='opacity-100'
      >
        <Dropdown.Trigger>
          <Button size='xs' rounded>
            <FiMoreVertical size={12} />
          </Button>
        </Dropdown.Trigger>
        
        <Dropdown.Menu className='-mr-2.5 !mt-1.5'>
          <Dropdown.MenuItem onClick={() => setShowModalEdit(true)}>
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

      {/* Modal edit */}
      <ColorsGroupModalAddItem
        isOpen={showModalEdit}
        onClose={() => setShowModalEdit(false)}
      />

      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </>
  )
}

export default ColorsGroupItemDropdown;
