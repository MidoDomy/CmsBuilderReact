import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

import Icon from '../../components/Icon/Icon';

type NavigationSidebarLinkProps = {
    children?: React.ReactNode,
    className?: string;
    structuring?: Boolean,
    name: string;
    icon?: string;
    iconSize?: Number,
    link?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavigationSidebarLink: React.FC<NavigationSidebarLinkProps> = ({ children, className, structuring, name, icon, iconSize, link }) => {

    const router = useRouter();
    const [collapse, setcollapse] = useState(router.pathname.includes(link) ? true : false);

    return (
        <li className={`pt-2 ${structuring ? '' : 'pr-4'}`}>
            { structuring ?
                <>
                    <button className={`w-full flex items-center py-3 px-5 ${router.pathname.includes(link) ? "bg-base-primary bg-opacity-10" : "hover:bg-base-primary hover:bg-opacity-10 transition-colors"}`} 
                        onClick={() => setcollapse(!collapse)}
                    >
                        <div className="w-5 mr-3">
                            {icon ? <Icon name={icon} size={iconSize} className="mx-auto" /> : ''}
                        </div>
                        <span>{name}</span>

                        {collapse ? <Icon name="arrow-head-up" size={18} className="ml-auto" /> : ''}
                        {!collapse ? <Icon name="arrow-head-down" size={18} className="ml-auto" /> : ''}
                    </button>

                    { collapse ?
                        <div>
                            {children}
                        </div>
                        :
                        ''
                    }
                </>
                :
                <Link href={link} className={`w-full flex items-center py-3 px-5 rounded-r-full ${router.pathname == link ? "text-base-light bg-base-primary shadow" : "hover:bg-opacity-10 hover:bg-base-primary transition-colors"}`} >
                    <div className="w-5 mr-3">
                        {icon ? <Icon name={icon} size={iconSize} className="mx-auto" /> : ''}
                    </div>
                    {name}
                </Link>
            }
        </li>
    );
}

NavigationSidebarLink.defaultProps = {
    iconSize: 20,
    structuring: false
}

export default NavigationSidebarLink;
