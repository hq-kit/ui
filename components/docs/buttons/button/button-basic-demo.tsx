import { Button } from '@/components/ui'

export default function ButtonBasicDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
        </div>
    )
}
