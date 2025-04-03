import { Textarea } from '@/components/ui'

export default function TextareaDemo() {
    return (
        <div className='flex flex-col sm:flex-row gap-2'>
            <Textarea label='Basic' />
            <Textarea label='Readonly' isReadOnly />
            <Textarea label='Invalid' isInvalid />
            <Textarea label='Disabled' isDisabled />
        </div>
    )
}
