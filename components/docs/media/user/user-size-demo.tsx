import { User } from '@/components/ui'

export default function UserSizeDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <User description='Admin' name='John Doe' size='md' />
            <User description='Admin' name='John Doe' size='lg' />
            <User description='Admin' name='John Doe' size='xl' />
        </div>
    )
}
