import React, {useState} from 'react';

import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import FontsModalImport from './FontsModalImport';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const FontsCardDropdown: React.FC = () => {
  const [showModalImport, setShowModalImport] = useState(false);
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
            onClick={() => setShowModalImport(true)}
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

      {/* Modal import */}
      <FontsModalImport 
        isOpen={showModalImport}
        onClose={() => setShowModalImport(false)}
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
