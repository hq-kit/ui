import { Separator } from '@/components/ui'

export default function SeparatorTextDemo() {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div>Content Above</div>
            <Separator>OR</Separator>
            <div>Content Below</div>
        </div>
    )
}
