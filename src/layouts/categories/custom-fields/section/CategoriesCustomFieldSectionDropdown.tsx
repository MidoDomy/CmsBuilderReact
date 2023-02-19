import React, { useState } from 'react';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import Icon from 'components/Icon';
import CategoriesCustomFieldsSectionModalAddItem from './CategoriesCustomFieldsSectionModalAddItem';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

type Props = {
  isEdit: boolean;
  setIsEdit: (e: any) => any;
}

const CategoriesCustomFieldsSectionDropdown: React.FC<Props> = ({isEdit, setIsEdit}) => {
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
            <Icon name='settings' size={16} />
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Menu className='-mr-1'>
          <Dropdown.MenuItem
            icon='plus'
            onClick={() => setShowModalAddField(true)}
          >
            Add field
          </Dropdown.MenuItem>

          <Dropdown.MenuItem
            icon='edit'
            onClick={() => setIsEdit(!isEdit)}
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
      <CategoriesCustomFieldsSectionModalAddItem
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

export default CategoriesCustomFieldsSectionDropdown;
