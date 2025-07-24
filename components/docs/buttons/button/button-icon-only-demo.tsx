'use client'

import { Button } from '@/components/ui'
import { IconBrandNextjs } from 'hq-icons'

export default function ButtonIconOnlyDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            <Button icon size='xs'>
                <IconBrandNextjs />
            </Button>
            <Button icon size='sm'>
                <IconBrandNextjs />
            </Button>
            <Button icon>
                <IconBrandNextjs />
            </Button>
            <Button icon size='lg'>
                <IconBrandNextjs />
            </Button>
        </div>
    )
}
