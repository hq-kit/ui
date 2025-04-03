import { TextField } from '@/components/ui'

export default function TextFieldDemo() {
    return (
        <div className='flex flex-col sm:flex-row gap-2'>
            <TextField label='Basic' />
            <TextField isPending label='Pending' />
            <TextField label='Readonly' isReadOnly />
            <TextField label='Invalid' isInvalid />
            <TextField label='Disabled' isDisabled />
        </div>
    )
}
