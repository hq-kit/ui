import { Card, Skeleton } from '@/components/ui'

export default function SkeletonShapeDemo() {
    return (
        <Card className='p-4 space-y-4'>
            <div className='flex gap-2'>
                <Skeleton shape='circle' className='size-9' />
                <div className='space-y-1'>
                    <Skeleton shape='circle' className='h-4 w-56' />
                    <Skeleton shape='circle' className='h-4 w-10' />
                </div>
            </div>
            <div className='flex gap-2'>
                <Skeleton shape='square' className='size-9' />
                <div className='space-y-1'>
                    <Skeleton shape='square' className='h-4 w-56' />
                    <Skeleton shape='square' className='h-4 w-10' />
                </div>
            </div>
        </Card>
    )
}
