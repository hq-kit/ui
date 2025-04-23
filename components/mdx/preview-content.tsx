import { IconLoaderCircle } from 'hq-icons'
import { Suspense } from 'react'

import { cn } from '@/lib/utils'

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
        <Suspense
            fallback={
                <div className='flex w-full items-center justify-center'>
                    <IconLoaderCircle className='size-20 bg-muted' />
                </div>
            }
        >
            <iframe
                title='Preview'
                className={cn('relative z-20 w-full rounded-lg border', className)}
                height={height || 768}
                style={{ zoom: zoomOut || 1 }}
                allowFullScreen
                src={`/${component}`}
            />
        </Suspense>
    )
}
