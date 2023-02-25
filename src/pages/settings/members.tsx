import type { NextPage } from 'next';
import { useState } from 'react';

import { FiCheck, FiMoreVertical, FiSettings, FiTrash2 } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import DataGrid from 'components/DataGrid';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import SettingsLayout from 'layouts/settings/SettingsLayout';
import ModalConfirmDeletion from 'layouts/general/ModalConfirmDeletion';

const SettingsUsersAndPermissions: NextPage = () => {
  const columns = [
    { key: 'id', name: '' },
    { key: 'member', name: 'Member' },
    { key: 'status', name: 'Status' }
  ];
  
  const members = [
    { id: 0, name: 'Ronny Asmo', role: 'Software engineer', status: 'Active' },
    { id: 1, name: 'Tomas Lonsetteig', role: 'Business analyst', status: 'Active' },
    { id: 2, name: 'Kathrine Lonsetteig', role: 'Project menager', status: 'Active' },
    { id: 3, name: 'Arne Opheim', role: 'Research Engineer', status: 'Active' },
    { id: 4, name: 'Ingrid Oline', role: 'Software engineer', status: 'Active' }
  ];

  const [showModalConfirmDeletion, setShowModalConfirmDeletion] = useState(false);

  return (
    <SettingsLayout 
      title='Members settings' 
      description='Change members settings and permissions.'
      actions={
        <Row gapX={8}>
          <Col>
            <Button>Cancel</Button>
          </Col>

          <Col>
            <Button variant='primary'>
              <FiCheck size={18} />
              Save
            </Button>
          </Col>
        </Row>
      }
    >
      <DataGrid columns={columns}>
        {members?.map(member =>
          <DataGrid.Row key={member.id}>
            <DataGrid.Col className='w-[60px] pr-0'>
              <Avatar alt='' />
            </DataGrid.Col>

            <DataGrid.Col>
              <div className='font-medium text-sm'>{member.name}</div>
              <div className='text-xs text-slate-500'>{member.role}</div>
            </DataGrid.Col>

            <DataGrid.Col>
              <div className='text-sm'>{member.status}</div>
            </DataGrid.Col>

            <DataGrid.Col className='text-right'>
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
                    <FiSettings size={16} />
                    Manage
                  </Dropdown.MenuItem>

                  <Dropdown.MenuItem
                    variant='danger'
                    onClick={() => setShowModalConfirmDeletion(true)}
                  >
                    <FiTrash2 size={16} />
                    Remove
                  </Dropdown.MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </DataGrid.Col>
          </DataGrid.Row>
        )}
      </DataGrid>

      {/* Modal confirm deletion */}
      <ModalConfirmDeletion 
        isOpen={showModalConfirmDeletion}
        onClose={() => setShowModalConfirmDeletion(false)}
      />
    </SettingsLayout>
  )
}

export default SettingsUsersAndPermissions;
