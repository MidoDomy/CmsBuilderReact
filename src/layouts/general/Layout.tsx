import React, {useState} from 'react';
// import Head from 'next/head';

import NavSidebar from 'layouts/general/navigation/NavigationSidebar';
import NavBar from 'layouts/general/navigation/NavigationBar';

type Props = {
  children: React.ReactNode,
  className?: string
}

const Layout: React.FC<Props> = ({children, className, ...props}) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* <Head>
        <title>Cms builder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Cms builder' key='title' />
      </Head> */}
    
      <div className={`${className} ${darkMode ? 'dark' : ''}`} 
        id='mainLayout'
        {...props}
      >
        <div className='bg-gray-50 text-slate-900'>
          <div className="flex">
            {/* Sidebar */}
            <NavSidebar />

            <div className='flex-1 flex flex-col h-screen'>
              {/* <NavBar /> */}

              {/* Main content */}
              <main className='flex-1 overflow-hidden'>
                {children}
              </main>
            </div>
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
