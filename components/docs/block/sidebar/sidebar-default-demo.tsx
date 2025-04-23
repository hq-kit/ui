import { Heading, SidebarInset } from '@/components/ui'
import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

export default function Page() {
    return (
        <div className='flex'>
            <AppSidebar variant='default' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Default</Heading>
                </div>
            </SidebarInset>
        </div>
    )
}
