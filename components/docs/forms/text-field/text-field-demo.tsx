import { TextField } from '@/components/ui'

export default function TextFieldDemo() {
    return (
        <div className='flex flex-col gap-2 sm:flex-row'>
            <TextField label='Basic' />
            <TextField isPending label='Pending' />
            <TextField label='Readonly' isReadOnly />
            <TextField label='Invalid' isInvalid />
            <TextField label='Disabled' isDisabled />
        </div>
    )
}
