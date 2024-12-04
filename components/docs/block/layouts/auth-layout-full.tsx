import Image from 'next/image'

import { Card } from '@/components/ui'

export default function AuthLayoutSplit({
    title,
    description,
    children
}: {
    title: string
    description: string
    children: React.ReactNode
}) {
    return (
        <div className='w-full justify-center items-center flex min-h-screen'>
            <div className='flex w-full max-w-xl px-4 lg:px-8 items-center justify-center py-12'>
                <Card className='w-full mx-auto lg:border-none lg:shadow-none'>
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                        <Card.Description>{description}</Card.Description>
                    </Card.Header>
                    <Card.Content>{children}</Card.Content>
                </Card>
            </div>
            <div className='hidden bg-muted lg:w-full lg:block lg:h-screen'>
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
    )
}