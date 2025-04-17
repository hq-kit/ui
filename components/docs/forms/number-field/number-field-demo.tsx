import { NumberField } from '@/components/ui'

export default function NumberFieldDemo() {
    return (
        <div className='flex flex-col gap-2 sm:flex-row'>
            <NumberField label='Basic' />
            <NumberField label='Readonly' isReadOnly />
            <NumberField label='Invalid' isInvalid />
            <NumberField label='Disabled' isDisabled />
        </div>
    )
}
