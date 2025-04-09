import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

import { Heading, SidebarInset } from '@/components/ui'

export default function SidebarOffCanvasDemo() {
    return (
        <div className='flex'>
            <AppSidebar collapsible='hidden' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>OffCanvas</Heading>
                </div>
            </SidebarInset>
        </div>
    )
}
