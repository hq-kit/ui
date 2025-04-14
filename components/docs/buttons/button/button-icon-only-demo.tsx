'use client'

import { IconBrandNextjs } from 'hq-icons'

import { Button } from '@/components/ui'

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
            <Button icon shape='circle' size='xs'>
                <IconBrandNextjs />
            </Button>
            <Button icon shape='circle' size='sm'>
                <IconBrandNextjs />
            </Button>
            <Button icon shape='circle'>
                <IconBrandNextjs />
            </Button>
            <Button icon shape='circle' size='lg'>
                <IconBrandNextjs />
            </Button>
        </div>
    )
}
