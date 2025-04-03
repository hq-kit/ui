import { User } from '@/components/ui'

export default function UserSizeDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <User name='John Doe' size='md' description='Admin' />
            <User name='John Doe' size='lg' description='Admin' />
            <User name='John Doe' size='xl' description='Admin' />
        </div>
    )
}
