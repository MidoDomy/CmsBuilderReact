import React from 'react';
import Head from 'next/head';

import NavigationSidebar from './NavigationSidebar/NavigationSidebar';

type Props = {
    children: React.ReactNode,
    className?: string
}

const Layout: React.FC<Props> = ({children, className}) => {
    return (
        <div className='flex'>
            <Head>
                <title>Cms builder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Cms builder" key="title" />
            </Head>

            <NavigationSidebar />

            <main className={className}>
                {children}
            </main>
        </div>
    )
}

export default Layout;
