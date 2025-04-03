import { User } from '@/components/ui'

export default function UserShapeDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <User name='John Doe' shape='circle' description='Admin' />
            <User name='John Doe' shape='square' description='Admin' />
        </div>
    )
}
