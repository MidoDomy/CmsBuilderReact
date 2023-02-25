import type { NextPage } from 'next';
import { useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import Container from 'components/Container';
import Button from 'components/Button';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import ColorsModalAddGroup from 'layouts/content/utils/colors/ColorsModalAddGroup';
import ColorsGroup from 'layouts/content/utils/colors/ColorsGroup';

const Colors: NextPage = () => {
  const colorsGroups = [
    {id: '0', name: 'Basic', colors: [
        {id: '0', name: 'White', value: '#ffffff'}, 
        {id: '1', name: 'Black', value: '#000000'}, 
        {id: '2', name: 'Primary', value: '#0284c7'}, 
        {id: '3', name: 'Secondary', value: '#475569'}
      ]
    },
    {id: '1', name: 'Primary', colors: [
        {id: '0', name: '50', value: '#f0f9ff'},
        {id: '1', name: '100', value: '#e0f2fe'},
        {id: '2', name: '200', value: '#bae6fd'},
        {id: '3', name: '300', value: '#7dd3fc'},
        {id: '4', name: '400', value: '#38bdf8'},
        {id: '5', name: '500', value: '#0ea5e9'}
      ]
    },
    {id: '2', name: 'Secondary', colors: [
        {id: '0', name: '50', value: '#f8fafc'},
        {id: '1', name: '100', value: '#f1f5f9'},
        {id: '2', name: '200', value: '#e2e8f0'},
        {id: '3', name: '300', value: '#cbd5e1'},
        {id: '4', name: '400', value: '#94a3b8'},
        {id: '5', name: '500', value: '#64748b'}
      ]
    }
  ];

  const [showModalAddGroup, setShowModalAddGroup] = useState(false);

  return (
    <Layout metaTitle='Cms builder - colors'>
      {/* Page header */}
      <PageHeader
        title='Colors'
        description='Add colors that you will use in your project.'
        actions={
          <Button onClick={() => setShowModalAddGroup(true)}>
            <FiPlus size={18} />
            Add Group
          </Button>
        }
      />

      {/* Modal add group */}
      <ColorsModalAddGroup
        isOpen={showModalAddGroup}
        onClose={() => setShowModalAddGroup(false)}
      />

      {/* Content */}
      <div>
        <Container>
          <div className='flex flex-col gap-8'>
            {colorsGroups?.map(group => (
              <ColorsGroup
                key={group.id} 
                name={group.name} 
                colors={group.colors} 
              />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Colors;
