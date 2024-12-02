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
                <div className='w-full flex items-center justify-center'>
                    <IconLoaderCircle className='size-20 bg-muted' />
                </div>
            }
        >
            <iframe
                className={cn('w-full border rounded-xl relative z-20', className)}
                height={height || 768}
                style={{ zoom: zoomOut || 1 }}
                allowFullScreen
                src={`/${component}`}
            />
        </React.Suspense>
    )
}
