'use client'

import { IconBrandGithub } from 'hq-icons'

import { Button } from '@/components/ui'

export default function ButtonIconDemo() {
    return (
        <Button variant='danger'>
            <IconBrandGithub />
            Github
        </Button>
    )
}
