import { Separator } from '@/components/ui'

export default function SeparatorDemo() {
    return (
        <div className='flex gap-2 items-center h-24'>
            <div>Content Left</div>
            <Separator orientation='vertical'>OR</Separator>
            <div>Content Right</div>
        </div>
    )
}
