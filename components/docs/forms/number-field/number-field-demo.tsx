import { NumberField } from '@/components/ui'

export default function NumberFieldDemo() {
    return (
        <div className='flex flex-col sm:flex-row gap-2'>
            <NumberField label='Basic' />
            <NumberField label='Readonly' isReadOnly />
            <NumberField label='Invalid' isInvalid />
            <NumberField label='Disabled' isDisabled />
        </div>
    )
}
