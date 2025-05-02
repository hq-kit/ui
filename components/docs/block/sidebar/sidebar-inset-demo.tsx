import { SidebarInset, Skeleton } from '@/components/ui'
import AppSidebar from 'layouts/app-sidebar'
import AppSidebarNav from 'layouts/app-sidebar-nav'

export default function SidebarInsetDemo() {
    return (
        <div className='flex'>
            <AppSidebar variant='inset' />
            <SidebarInset>
                <AppSidebarNav />
                <div className='flex flex-1 flex-col gap-4 p-4'>
                    <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
                        <Skeleton className='aspect-video rounded-xl bg-muted/50' />
                        <Skeleton className='aspect-video rounded-xl bg-muted/50' />
                        <Skeleton className='aspect-video rounded-xl bg-muted/50' />
                    </div>
                    <Skeleton className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
                </div>
            </SidebarInset>
        </div>
    )
}
