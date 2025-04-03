import { Separator } from '@/components/ui'

export default function SeparatorDemo() {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div>Content Above</div>
            <Separator />
            <div>Content Below</div>
        </div>
    )
}
