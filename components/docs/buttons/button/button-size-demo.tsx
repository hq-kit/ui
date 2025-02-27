'use client'

import { Button } from '@/components/ui'

export default function ButtonSizeDemo() {
    return (
        <div className='flex gap-2'>
            <Button size='xs'>xs</Button>
            <Button size='sm'>sm</Button>
            <Button>md (default)</Button>
            <Button size='lg'>lg</Button>
        </div>
    )
}
