import { Separator } from '@/components/ui'

export default function SeparatorDemo() {
    return (
        <div className='flex h-24 items-center gap-2'>
            <div>Content Left</div>
            <Separator orientation='vertical'>OR</Separator>
            <div>Content Right</div>
        </div>
    )
}
