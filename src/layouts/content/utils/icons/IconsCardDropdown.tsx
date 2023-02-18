import React, {useState} from 'react';

import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import IconsModalAdd from './IconsModalAdd';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const FontsCardDropdown: React.FC = () => {
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
            <Icon name='three-dots' size={13} />
          </Button>
        </Dropdown.Trigger>
        
        <Dropdown.Menu className='-mr-2.5 !mt-1.5'>
          <Dropdown.MenuItem 
            icon='edit'
            onClick={() => setShowModalEdit(true)}
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
      <IconsModalAdd
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

export default FontsCardDropdown;
