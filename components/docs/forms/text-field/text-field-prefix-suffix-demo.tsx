import { TextField } from '@/components/ui'
import { IconBrandTiktok } from 'hq-icons'

export default function TextFieldPrefixSuffixDemo() {
    return (
        <div className='space-y-2'>
            <TextField label='Tiktok' suffix={<IconBrandTiktok />} />
            <TextField label='Sites' prefix='https://' suffix='.com' />
        </div>
    )
}
