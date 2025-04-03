import { Button } from '@/components/ui'

export default function ButtonShapeDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            <Button shape='square'>Rounded</Button>
            <Button shape='circle'>Circle</Button>
        </div>
    )
}
