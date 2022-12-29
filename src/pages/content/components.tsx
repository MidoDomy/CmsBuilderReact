import type { NextPage } from 'next';

import Layout from 'layouts/Layout';
import Container from 'components/Structuring/Container';
import Flex from 'components/Structuring/Flex';
import Sidebar from 'components/Sidebar';
import Tabs from 'components/Tabs';
import ComponentsNavigationBtn from 'layouts/content/components/ComponentsNavigationBtn';
import StyleAlign from 'layouts/content/style/Align';
import StyleSize from 'layouts/content/style/Size';
import StyleSpacing from 'layouts/content/style/Spacing';
import StyleTypography from 'layouts/content/style/Typography';
import StyleBackgrounds from 'layouts/content/style/Backgrounds';
import StyleBorders from 'layouts/content/style/Borders';

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
          <Tabs>
            <Tabs.Nav className='m-2'>
              <Tabs.NavItem name='Settings'>Settings</Tabs.NavItem>
              <Tabs.NavItem name='Styles'>Styles</Tabs.NavItem>
            </Tabs.Nav>

            <Tabs.Content className='px-4' name='Settings'>
              Settings
            </Tabs.Content>

            <Tabs.Content name='Styles'>
              <StyleAlign />
              <StyleSize />
              <StyleSpacing />
              <StyleTypography />
              <StyleBackgrounds />
              <StyleBorders />
            </Tabs.Content>
          </Tabs>
        </Sidebar>
      </Flex>
    </Layout>
  )
}

export default Components;
