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
        <div className='flex min-h-screen w-full items-center justify-center'>
            <div className='flex w-full max-w-xl items-center justify-center px-4 py-12 lg:px-8'>
                <Card className='mx-auto w-full lg:border-none lg:shadow-none'>
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                        <Card.Description>{description}</Card.Description>
                    </Card.Header>
                    <Card.Content className='pb-6'>{children}</Card.Content>
                </Card>
            </div>
            <div className='bg-muted hidden lg:block lg:h-screen lg:w-full'>
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
