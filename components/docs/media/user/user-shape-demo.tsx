import { User } from '@/components/ui'

export default function UserShapeDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <User description='Admin' name='John Doe' shape='circle' />
            <User description='Admin' name='John Doe' shape='square' />
        </div>
    )
}
