import { Button, Separator } from '@/components/ui'

export default function SeparatorDemo() {
    return (
        <div className='flex flex-col gap-6 items-center'>
            <div>Content Above</div>
            <Separator>
                <Button shape='circle' variant='outline'>
                    Show More
                </Button>
            </Separator>
            <div>Content Below</div>
        </div>
    )
}
