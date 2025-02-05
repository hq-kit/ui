import * as React from 'react'

import { IconLoaderCircle } from 'hq-icons'

import { cn } from '@/components/ui'

export default function PreviewContent({
    component,
    zoomOut,
    className,
    height
}: {
    component: string
    zoomOut: number
    className?: string
    height: number
}) {
    return (
        <React.Suspense
            fallback={
                <div className='flex w-full items-center justify-center'>
                    <IconLoaderCircle className='bg-muted size-20' />
                </div>
            }
        >
            <iframe
                className={cn('relative z-20 w-full rounded-xl border', className)}
                height={height || 768}
                style={{ zoom: zoomOut || 1 }}
                allowFullScreen
                src={`/${component}`}
            />
        </React.Suspense>
    )
}
