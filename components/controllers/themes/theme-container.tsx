import Sink from '@/components/sink'
import { Button, buttonStyles, Card, Container } from '@/components/ui'

export default function ThemeContainer() {
    return (
        <>
            <Container className='flex w-full flex-col items-center gap-6 pt-6'>
                <Card className='flex w-full flex-wrap items-center justify-around gap-2 p-4'>
                    {Object.keys(buttonStyles.variants.variant).map((variant) => (
                        <Button
                            key={variant}
                            variant={variant as keyof typeof buttonStyles.variants.variant}
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
