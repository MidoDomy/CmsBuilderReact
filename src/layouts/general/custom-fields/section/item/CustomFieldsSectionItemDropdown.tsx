import React, { useState } from 'react';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import Icon from 'components/Icon';
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
            <Icon name='three-dots' size={16} />
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Menu className='-mr-1'>
          <Dropdown.MenuItem
            icon='edit'
            onClick={() => setShowModalEditField(true)}
          >
            Edit
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
