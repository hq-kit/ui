import { Button, Separator } from '@/components/ui'

export default function SeparatorDemo() {
    return (
        <div className='flex flex-col items-center gap-6'>
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
