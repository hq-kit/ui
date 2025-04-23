import { Heading, SidebarInset } from '@/components/ui'
import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

export default function SidebarDockDemo() {
    return (
        <div className='flex'>
            <AppSidebar collapsible='dock' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Dock</Heading>
                </div>
            </SidebarInset>
        </div>
    )
}
