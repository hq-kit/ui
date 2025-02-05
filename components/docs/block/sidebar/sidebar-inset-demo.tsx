import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

import { Heading, SidebarInset, SidebarProvider } from '@/components/ui'

export default function SidebarInsetDemo() {
    return (
        <SidebarProvider>
            <AppSidebar variant='inset' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Inset</Heading>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
