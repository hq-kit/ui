import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

import { Heading, SidebarInset, SidebarProvider } from '@/components/ui'

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar variant='default' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Default</Heading>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
