import { Heading, SidebarInset } from '@/components/ui'
import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

export default function SidebarInsetDemo() {
    return (
        <div className='flex'>
            <AppSidebar variant='inset' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Inset</Heading>
                </div>
            </SidebarInset>
        </div>
    )
}
