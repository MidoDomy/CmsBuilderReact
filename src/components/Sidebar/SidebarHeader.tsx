import React from 'react';

type Props = {
    children: React.ReactNode,
    className?: string
}

const SidebarHeader: React.FC<Props> = ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default SidebarHeader;
