import { Button } from '@/components/ui'

export default function ButtonVariantDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            <Button variant='danger'>Danger</Button>
            <Button variant='success'>Success</Button>
            <Button variant='info'>Info</Button>
            <Button variant='warning'>Warning</Button>
        </div>
    )
}
