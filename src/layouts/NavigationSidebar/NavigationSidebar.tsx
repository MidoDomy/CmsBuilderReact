import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

import NavigationSidebarLink from "./NavigationSidebarLink";

const NavigationSidebar: React.FC = () => {
    return (
        <Sidebar className="min-h-screen w-96 border-r">
            <Sidebar.Header className="py-2 px-5">
                <h1 className="text-2xl text-center">Logo</h1>
            </Sidebar.Header>

            <ul>
                <NavigationSidebarLink icon="home" name="Dashboard" link="/" />

                <NavigationSidebarLink icon="categories" name="Categories" link="/categories" />

                <NavigationSidebarLink icon="content" name="Content" link="/content" structuring={true}>
                    <ul>
                        <NavigationSidebarLink icon="circle" iconSize={10} name="Utils" link="/content/utils" structuring={true}>
                            <ul>
                                <NavigationSidebarLink name="Colors" link="/content/utils/colors" />

                                <NavigationSidebarLink name="Fonts" link="/content/utils/fonts" />

                                <NavigationSidebarLink name="Icons" link="/content/utils/icons" />
                            </ul>
                        </NavigationSidebarLink>

                        <NavigationSidebarLink icon="circle" iconSize={10} name="Components" link="/content/components" />

                        <NavigationSidebarLink icon="circle" iconSize={10} name="Elements" link="/content/elements" />

                        <NavigationSidebarLink icon="circle" iconSize={10} name="Layouts" link="/content/layouts" />
                    </ul>
                </NavigationSidebarLink>

                <NavigationSidebarLink icon="media" name="Media" link="/media" />

                <NavigationSidebarLink icon="letter" name="Emails" link="/emails" />

                <NavigationSidebarLink icon="settings" name="Settings" link="/settings" />
            </ul>
        </Sidebar>
    )
}

export default NavigationSidebar;
