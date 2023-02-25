import React, { useState } from 'react';

import { FiSettings, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import CustomFieldsSectionModalAddItem from './CustomFieldsSectionModalAddItem';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

type Props = {
  isEdit: boolean;
  setIsEdit: (e: any) => any;
}

const CustomFieldsSectionDropdown: React.FC<Props> = ({isEdit, setIsEdit}) => {
  const [showModalAddField, setShowModalAddField] = useState(false);
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <Button
            size='sm'
            rounded
          >
            <FiSettings size={16} />
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Menu className='-mr-1'>
          <Dropdown.MenuItem onClick={() => setShowModalAddField(true)}>
            <FiPlus size={16} />
            Add field
          </Dropdown.MenuItem>

          <Dropdown.MenuItem onClick={() => setIsEdit(!isEdit)}>
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
        isOpen={showModalAddField}
        onClose={() => setShowModalAddField(false)}
      />
      
      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </>
  )
}

export default CustomFieldsSectionDropdown;
