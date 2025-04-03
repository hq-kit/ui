import { Separator } from '@/components/ui'

export default function SeparatorTextDemo() {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div>Content Above</div>
            <Separator>OR</Separator>
            <div>Content Below</div>
        </div>
    )
}
