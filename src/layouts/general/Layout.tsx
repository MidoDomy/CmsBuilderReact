import React, {useState} from 'react';
import Head from 'next/head';

import NavSidebar from 'layouts/general/nav/NavSidebar';
import NavBar from 'layouts/general/nav/NavBar';

type Props = {
  children: React.ReactNode,
  className?: string
}

const Layout: React.FC<Props> = ({children, className, ...props}) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>Cms builder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Cms builder' key='title' />
      </Head>
    
      <div id='mainLayout' className={`${className ? className : ''} ${darkMode ? 'dark' : ''}`} {...props}>
        <div className='bg-white dark:bg-neutral-900 text-slate-500 dark:text-slate-300'>
          <NavBar 
            darkMode={darkMode} 
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />

          <div className='flex'>
            {/* Sidebar */}
            <NavSidebar />

            {/* Main content */}
            <main className='flex-1 overflow-x-hidden'>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.defaultProps = {
  className: ''
}

export default Layout;
