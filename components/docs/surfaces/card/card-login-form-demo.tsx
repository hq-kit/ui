'use client'

import { Button, Card, Checkbox, Link, TextField } from '@/components/ui'

export default function CardLoginFormDemo() {
    return (
        <Card className='max-w-md mx-auto'>
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>Don&apos;t loose the level, just keep on going.</Card.Description>
            </Card.Header>
            <Card.Content className='space-y-6'>
                <TextField isRequired label='Email' placeholder='Enter your email' />
                <TextField
                    isRequired
                    label='Password'
                    isRevealable
                    type='password'
                    placeholder='Enter your password'
                />
                <div className='flex justify-between items-center'>
                    <Checkbox>Remember me</Checkbox>
                    <Link variant='primary' href='#'>
                        Forgot password?
                    </Link>
                </div>
            </Card.Content>
            <Card.Footer>
                <Button className='w-full'>Login</Button>
            </Card.Footer>
        </Card>
    )
}
