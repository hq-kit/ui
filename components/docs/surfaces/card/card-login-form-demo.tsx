import { Button, Card, Checkbox, Link, TextField } from '@/components/ui'

export default function CardLoginFormDemo() {
    return (
        <Card className='mx-auto max-w-md'>
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>Don&apos;t loose the level, just keep on going.</Card.Description>
            </Card.Header>
            <Card.Content className='space-y-6'>
                <TextField isRequired label='Email' placeholder='Enter your email' />
                <TextField isRequired label='Password' placeholder='Enter your password' type='password' />
                <div className='flex items-center justify-between'>
                    <Checkbox>Remember me</Checkbox>
                    <Link href='#'>Forgot password?</Link>
                </div>
            </Card.Content>
            <Card.Footer>
                <Button className='w-full'>Login</Button>
            </Card.Footer>
        </Card>
    )
}
