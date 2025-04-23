import { Heading, SidebarInset } from '@/components/ui'
import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

export default function SidebarBasicDemo() {
    return (
        <div className='flex'>
            <AppSidebar />
            <SidebarInset>
                <AppSidebarNav />
                <div className='p-4 lg:p-6'>
                    <Heading>Basic</Heading>
                </div>
            </SidebarInset>
        </div>
    )
}
