import React, { useState } from 'react';

import { FiMoreVertical, FiEdit2, FiTrash2 } from 'react-icons/fi';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';
import CustomFieldsSectionModalAddItem from '../CustomFieldsSectionModalAddItem';

const CustomFieldsSectionItemDropdown: React.FC = () => {
  const [showModalEditField, setShowModalEditField] = useState(false);
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
          <Dropdown.MenuItem onClick={() => setShowModalEditField(true)}>
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
      <CustomFieldsSectionModalAddItem
        isOpen={showModalEditField}
        onClose={() => setShowModalEditField(false)}
      />
      
      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </>
  )
}

export default CustomFieldsSectionItemDropdown;
