import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from 'layouts/general/Layout';
import Container from 'components/Structuring/Container';
import Flex from 'components/Structuring/Flex';
import Sidebar from 'components/Sidebar';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Tabs from 'components/Tabs';
import DashboardSidebarOptions from 'layouts/dashboard/DashboardSidebarOptions';
import DashboardSidebarWidgets from 'layouts/dashboard/DashboardSidebarWidgets';

const Dashboard: NextPage = () => {
  const [settings, setSettings] = useState(false);

  return (
    <Layout>
      <Flex>
        <Container className='py-10'>
          <div className='grid grid-cols-[repeat(20,_minmax(0,_1fr))] gap-3'>
            {
              [...Array(300)].map((e, i) => <div key={i} className='aspect-square border-2 border-dashed border-gray-200 rounded-xl'></div>)
            }
          </div>
        </Container>

        {/* Sidebar options */}
        <div className={`relative transition-all ${settings ? 'w-72' : 'w-0'}`}>
          <Button className='absolute top-10 left-0 -translate-x-full w-10 border-r-0 border-gray-100 rounded-r-none bg-white shadow-sm'
            square
            onClick={() => setSettings(!settings)}
          >
            <Icon name='settings' className='' />
          </Button>

          <Sidebar>
            <Sidebar.Body>
              <Tabs active='Options'>
                <Tabs.Nav className='mb-2'>
                  <Tabs.NavItem name='Options'>Options</Tabs.NavItem>
                  <Tabs.NavItem name='Widgets'>Widgets</Tabs.NavItem>
                </Tabs.Nav>

                <Tabs.Content className='px-0.5' name='Options'>
                  <DashboardSidebarOptions />
                </Tabs.Content>

                <Tabs.Content name='Widgets'>
                  <DashboardSidebarWidgets />
                </Tabs.Content>
              </Tabs>
            </Sidebar.Body>
          </Sidebar>
        </div>
      </Flex>
    </Layout>
  )
}

export default Dashboard;
