import { Card } from '@/components/ui'

export default function AuthLayoutClassic({
    title,
    description,
    children
}: {
    title: string
    description: string
    children: React.ReactNode
}) {
    return (
        <div className='w-full min-h-screen flex items-center justify-center p-4 lg:p-8'>
            <Card className='w-full max-w-lg'>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>{description}</Card.Description>
                </Card.Header>
                <Card.Content>{children}</Card.Content>
            </Card>
        </div>
    )
}
