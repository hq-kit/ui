import { Card, Skeleton } from '@/components/ui'

export default function SkeletonShapeDemo() {
    return (
        <Card className='space-y-4 p-4'>
            <div className='flex gap-2'>
                <Skeleton className='size-9' shape='circle' />
                <div className='space-y-1'>
                    <Skeleton className='h-4 w-56' shape='circle' />
                    <Skeleton className='h-4 w-10' shape='circle' />
                </div>
            </div>
            <div className='flex gap-2'>
                <Skeleton className='size-9' shape='square' />
                <div className='space-y-1'>
                    <Skeleton className='h-4 w-56' shape='square' />
                    <Skeleton className='h-4 w-10' shape='square' />
                </div>
            </div>
        </Card>
    )
}
