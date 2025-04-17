import { Textarea } from '@/components/ui'

export default function TextareaDemo() {
    return (
        <div className='flex flex-col gap-2 sm:flex-row'>
            <Textarea label='Basic' />
            <Textarea label='Readonly' isReadOnly />
            <Textarea label='Invalid' isInvalid />
            <Textarea label='Disabled' isDisabled />
        </div>
    )
}
