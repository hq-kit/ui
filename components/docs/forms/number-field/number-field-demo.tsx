import { NumberField } from '@/components/ui'

export default function NumberFieldDemo() {
    return (
        <div className='flex flex-col gap-2 sm:flex-row'>
            <NumberField label='Basic' />
            <NumberField isReadOnly label='Readonly' />
            <NumberField isInvalid label='Invalid' />
            <NumberField isDisabled label='Disabled' />
        </div>
    )
}
