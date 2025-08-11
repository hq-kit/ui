import { IconBrandTiktok } from '@tabler/icons-react'
import { TextField } from '@/components/ui'

export default function TextFieldPrefixSuffixDemo() {
    return (
        <div className='space-y-2'>
            <TextField label='Tiktok' suffix={<IconBrandTiktok />} />
            <TextField label='Sites' prefix='https://' suffix='.com' />
        </div>
    )
}
