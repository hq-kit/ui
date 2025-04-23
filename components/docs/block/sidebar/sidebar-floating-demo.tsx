import { Heading, SidebarInset } from '@/components/ui'
import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

export default function SidebarFloatDemo() {
    return (
        <div className='flex'>
            <AppSidebar variant='float' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Float</Heading>
                </div>
            </SidebarInset>
        </div>
    )
}
