import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import Container from 'components/Structuring/Container';
import Flex from 'components/Structuring/Flex';
import Sidebar from 'components/Sidebar';
import ComponentsNavigationBtn from 'layouts/content/components/ComponentsNavigationBtn';
import StyleSidebar from 'layouts/content/components/StyleSidebar';

const Components: NextPage = () => {
  const components = [
    {
      name: 'Button'
    },
    {
      name: 'Image'
    },
    {
      name: 'Input',
      parts: ['Label', 'Field']
    },
    {
      name: 'Checkbox'
    },
    {
      name: 'Dropdown'
    },
    {
      name: 'Badge'
    },
    {
      name: 'Tooltip'
    },
    {
      name: 'Modal',
      parts: ['Header', 'Body', 'Footer']
    },
    {
      name: 'Collapse',
      parts: ['Trigger', 'Content']
    }
  ]

  return (
    <Layout>
      <Flex>
        <Sidebar className='w-60'>
          <ul>
            {components?.map((component, index) => (
              <li key={index}>
                <ComponentsNavigationBtn component={component} />
              </li>
            ))}
          </ul>
        </Sidebar>

        <div className='flex-1'>
          <Container className='flex justify-center items-center h-full pb-60'>
            <button style={{padding: '8px 16px', background: '#38bdf8', borderRadius: '8px', color: '#ffffff'}}>
              Lorem ipsum
            </button>
          </Container>
        </div>

        <Sidebar className='w-72'>
          <StyleSidebar />
        </Sidebar>
      </Flex>
    </Layout>
  )
}

export default Components;
