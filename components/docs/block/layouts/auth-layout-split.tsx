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
        <div className='grid w-full lg:max-h-screen lg:min-h-screen lg:grid-cols-2'>
            <div className='flex items-center justify-center px-4 py-12 lg:px-8'>
                <Card className='mx-auto w-full max-w-lg' borderless>
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                        <Card.Description>{description}</Card.Description>
                    </Card.Header>
                    <Card.Content>{children}</Card.Content>
                </Card>
            </div>
            <div className='bg-muted hidden lg:block'>
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
