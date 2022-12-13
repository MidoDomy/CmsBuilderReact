import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import NavigationSidebar from 'layouts/NavigationSidebar/NavigationSidebar';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';
import Button from 'components/Button';

type Props = {
  children: React.ReactNode,
  className?: string
}

const Layout: React.FC<Props> = ({children, className}) => {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`flex ${darkMode ? "theme-dark" : "theme-light"}`}>
      <Head>
        <title>Cms builder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Cms builder' key='title' />
      </Head>

      <NavigationSidebar />

      <main className={`flex-1 bg-base-light ${className}`}>
        <header className='px-4'>
          <div className='container max-w-7xl flex items-center gap-6 py-4 bg-white rounded-b-lg shadow-md'>
            <div className='flex-1'>
              <input className='bg-base-light rounded-md px-4 py-2 w-full shadow-sm'
                type='text' 
                placeholder='Search'
              />
            </div>

            <div className='flex gap-2'>
              <Button className='rounded-full'
                square={true}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Icon name='night' /> : <Icon name='sun' />}
              </Button>

              <Link className='flex' 
                href='/'
              >
                <Avatar size='lg' />
              </Link>
            </div>
          </div>
        </header>

        <div className='container max-w-7xl pt-4'>
          {children}
        </div>
      </main>
    </div>
  )
}

Layout.defaultProps = {
  className: ''
}

export default Layout;
