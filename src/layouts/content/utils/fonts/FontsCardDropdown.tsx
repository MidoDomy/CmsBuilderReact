import React, {useState} from 'react';

import { FiMoreVertical, FiEdit2, FiTrash2 } from 'react-icons/fi';

import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import FontsModalImport from './FontsModalImport';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const FontsCardDropdown: React.FC = () => {
  const [showModalImport, setShowModalImport] = useState(false);
  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <Button size='sm' rounded>
            <FiMoreVertical size={16} />
          </Button>
        </Dropdown.Trigger>
        
        <Dropdown.Menu className='-mr-1'>
          <Dropdown.MenuItem onClick={() => setShowModalImport(true)}>
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
