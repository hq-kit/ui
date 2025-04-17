import { Separator } from '@/components/ui'

export default function SeparatorDemo() {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div>Content Above</div>
            <Separator />
            <div>Content Below</div>
        </div>
    )
}
