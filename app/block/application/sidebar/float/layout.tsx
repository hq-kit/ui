import { SidebarInset } from '@/components/ui'
import AppSidebar from './app-sidebar'
import AppSidebarNav from './app-sidebar-nav'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex'>
            <AppSidebar />
            <SidebarInset>
                <AppSidebarNav />
                {children}
            </SidebarInset>
        </div>
    )
}
