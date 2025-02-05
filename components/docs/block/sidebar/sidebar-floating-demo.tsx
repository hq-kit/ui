import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

import { Heading, SidebarInset, SidebarProvider } from '@/components/ui'

export default function SidebarFloatDemo() {
    return (
        <SidebarProvider>
            <AppSidebar variant='float' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Float</Heading>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
