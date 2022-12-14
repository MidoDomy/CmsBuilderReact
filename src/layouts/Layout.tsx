import React, {useState} from 'react';
import Head from 'next/head';

import NavSidebar from 'layouts/Nav/NavSidebar';
import NavBar from 'layouts/Nav/NavBar';

type Props = {
  children: React.ReactNode,
  className?: string
}

const Layout: React.FC<Props> = ({children, className}) => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex ${darkMode ? "theme-dark" : "theme-light"}`}>
      <Head>
        <title>Cms builder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Cms builder' key='title' />
      </Head>

      <NavSidebar />

      <main className={`flex-1 bg-base-light ${className}`}>
        <NavBar 
          darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />

        <div className='container max-w-7xl pt-16'>
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
