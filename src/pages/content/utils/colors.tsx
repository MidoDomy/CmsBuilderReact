import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import Container from 'components/Grid/Container';
import ColorsGroup from 'layouts/Content/Utils/Colors/ColorsGroup';
import Button from 'components/Button';
import Icon from 'components/Icon';

const Colors: NextPage = () => {
  const basicColors = [
    {name: 'White', value: '#ffffff'},
    {name: 'Black', value: '#000000'},
    {name: 'Primary', value: '#0284c7'},
    {name: 'Secondary', value: '#475569'},
  ];

  const primaryColors = [
    {name: '50', value: '#f0f9ff'},
    {name: '100', value: '#e0f2fe'},
    {name: '200', value: '#bae6fd'},
    {name: '300', value: '#7dd3fc'},
    {name: '400', value: '#38bdf8'},
    {name: '500', value: '#0ea5e9'}
  ];

  const secondaryColors = [
    {name: '50', value: '#f8fafc'},
    {name: '100', value: '#f1f5f9'},
    {name: '200', value: '#e2e8f0'},
    {name: '300', value: '#cbd5e1'},
    {name: '400', value: '#94a3b8'},
    {name: '500', value: '#64748b'}
  ];

  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700'>
            <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Colors</h2>

            <div className='flex gap-2.5'>
              <Button>
                <Icon name='plus' size={18} />
                <span>Add</span>
              </Button>

              <Button variant='primary' isDisabled>
                <Icon name='checkmark' size={18} />
                <span>Save</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <ColorsGroup name='Basic' colors={basicColors} />
          <ColorsGroup name='Primary' colors={primaryColors} />
          <ColorsGroup name='Secondary' colors={secondaryColors} />
        </Container>
      </div>
    </Layout>
  )
}

export default Colors;
