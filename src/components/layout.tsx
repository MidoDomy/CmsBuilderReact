import React from 'react'
import Head from 'next/head'

import NavigationSidebar from './navigationSidebar';

type Props = {
    children: React.ReactNode,
    className?: string
}

const Layout: React.FC<Props> = ({children, className}) => {
    return (
        <div className='flex'>
            <NavigationSidebar />

            <main className={className}>
                {children}
            </main>
        </div>
    )
}

export default Layout;
