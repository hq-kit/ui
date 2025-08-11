import { TextField } from '@/components/ui'

export default function TextFieldDemo() {
    return (
        <div className='flex flex-col gap-2 sm:flex-row'>
            <TextField label='Basic' />
            <TextField isPending label='Pending' />
            <TextField isReadOnly label='Readonly' />
            <TextField isInvalid label='Invalid' />
            <TextField isDisabled label='Disabled' />
        </div>
    )
}
