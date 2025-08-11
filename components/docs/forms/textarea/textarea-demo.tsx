import { Textarea } from '@/components/ui'

export default function TextareaDemo() {
    return (
        <div className='flex flex-col gap-2 sm:flex-row'>
            <Textarea label='Basic' />
            <Textarea isReadOnly label='Readonly' />
            <Textarea isInvalid label='Invalid' />
            <Textarea isDisabled label='Disabled' />
        </div>
    )
}
