import Sink from '@/components/sink'
import { Button, buttonVariants, Card, Container } from '@/components/ui'

export default function ThemeContainer() {
    return (
        <>
            <Container className='w-full flex flex-col gap-6 items-center pt-6'>
                <Card className='w-full flex gap-2 items-center justify-around flex-wrap p-4'>
                    {Object.keys(buttonVariants.variants.variant).map((variant) => (
                        <Button
                            key={variant}
                            variant={variant as keyof typeof buttonVariants.variants.variant}
                        >
                            {variant}
                        </Button>
                    ))}
                </Card>
            </Container>
            <Sink />
        </>
    )
}
