import { Button } from '@/components/ui'

export default function ButtonSizeDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            <Button size='xs'>Extra Small</Button>
            <Button size='sm'>Small</Button>
            <Button>Medium</Button>
            <Button size='lg'>Large</Button>
        </div>
    )
}
