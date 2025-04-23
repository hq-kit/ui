import Image from 'next/image'
import type { ReactNode } from 'react'

import { Card } from '@/components/ui'

export default function AuthLayoutModern({
    title,
    description,
    children
}: {
    title: string
    description: string
    children: ReactNode
}) {
    return (
        <div className='flex min-h-screen w-full items-center justify-center'>
            <div className='flex w-full justify-center rounded-lg lg:max-w-screen-xl lg:border lg:shadow-sm'>
                <div className='flex w-full max-w-xl items-center justify-center px-4 py-12 lg:px-8'>
                    <Card className='mx-auto w-full lg:border-none lg:shadow-none'>
                        <Card.Header>
                            <Card.Title>{title}</Card.Title>
                            <Card.Description>{description}</Card.Description>
                        </Card.Header>
                        <Card.Content className='pb-6'>{children}</Card.Content>
                    </Card>
                </div>
                <div className='hidden bg-muted lg:block'>
                    <Image
                        src='https://picsum.photos/1920/1080'
                        alt='Image'
                        priority
                        width='1920'
                        height='1080'
                        className='size-full object-cover dark:brightness-[0.2] dark:grayscale'
                    />
                </div>
            </div>
        </div>
    )
}
