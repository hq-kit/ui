'use client'
import { Skeleton } from '@/components/ui'
import NavbarLayout from 'layouts/app-navbar'

export default function NavbarInsetDemo() {
    return (
        <>
            <NavbarLayout variant='inset'>
                <div className='flex h-full flex-1 flex-col gap-4 p-4'>
                    <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
                        <Skeleton className='aspect-video rounded-xl bg-muted/50' />
                        <Skeleton className='aspect-video rounded-xl bg-muted/50' />
                        <Skeleton className='aspect-video rounded-xl bg-muted/50' />
                    </div>
                    <Skeleton className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
                </div>
            </NavbarLayout>
        </>
    )
}
