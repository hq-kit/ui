import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

import { Heading, SidebarInset, SidebarProvider } from '@/components/ui'

export default function SidebarDockDemo() {
    return (
        <SidebarProvider>
            <AppSidebar collapsible='dock' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Dock</Heading>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
