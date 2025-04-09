import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

import { Heading, SidebarInset } from '@/components/ui'

export default function SidebarFixedDemo() {
    return (
        <div className='flex'>
            <AppSidebar collapsible='none' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Fixed</Heading>
                </div>
            </SidebarInset>
        </div>
    )
}
