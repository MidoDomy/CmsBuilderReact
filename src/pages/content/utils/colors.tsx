import type { NextPage } from 'next';

import Layout from 'layouts/general/Layout';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import ColorsGroup from 'layouts/content/utils/colors/ColorsGroup';
import Button from 'components/Button';
import Icon from 'components/Icon';

const Colors: NextPage = () => {
  const colorsGroups = [
    {
      name: 'Basic',
      colors: [
        {name: 'White', value: '#ffffff'}, 
        {name: 'Black', value: '#000000'}, 
        {name: 'Primary', value: '#0284c7'}, 
        {name: 'Secondary', value: '#475569'}
      ]
    },
    {
      name: 'Primary',
      colors: [
        {name: '50', value: '#f0f9ff'},
        {name: '100', value: '#e0f2fe'},
        {name: '200', value: '#bae6fd'},
        {name: '300', value: '#7dd3fc'},
        {name: '400', value: '#38bdf8'},
        {name: '500', value: '#0ea5e9'}
      ]
    },
    {
      name: 'Secondary',
      colors: [
        {name: '50', value: '#f8fafc'},
        {name: '100', value: '#f1f5f9'},
        {name: '200', value: '#e2e8f0'},
        {name: '300', value: '#cbd5e1'},
        {name: '400', value: '#94a3b8'},
        {name: '500', value: '#64748b'}
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <div className='pb-3 border-b border-gray-200 dark:border-gray-700'>
            <Row justify='between'>
              <Col>
                <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Colors</h2>
              </Col>

              <Col>
                <Row gap={10}>
                  <Col>
                    <Button>
                      <Icon name='plus' size={18} />
                      <span>Add</span>
                    </Button>
                  </Col>

                  <Col>
                    <Button variant='primary' disabled>
                      <Icon name='checkmark' size={18} />
                      <span>Save</span>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className='flex flex-col gap-8'>
            {colorsGroups?.map((group, index) => (
              <ColorsGroup
                key={index} 
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
