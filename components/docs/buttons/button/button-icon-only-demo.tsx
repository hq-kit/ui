'use client'

import { IconBrandGithub } from 'hq-icons'

import { Button } from '@/components/ui'

export default function ButtonIconOnlyDemo() {
    return (
        <Button size='icon'>
            <IconBrandGithub />
        </Button>
    )
}
