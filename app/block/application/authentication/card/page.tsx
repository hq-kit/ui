'use client'

import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import Link from 'next/link'
import { IconApp } from '@/components/icons'
import { Button, Card, Checkbox, Form, Separator, TextField, toast } from '@/components/ui'

export default function Page() {
    return (
        <>
            <Link href='#'>
                <IconApp className='size-10' />
            </Link>
            <Card className='w-full max-w-md shadow-lg'>
                <Card.Header>
                    <Card.Title>Register</Card.Title>
                    <Card.Description>Fill in the form below to create your account</Card.Description>
                </Card.Header>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault()
                        toast.success('Dummy Login Successfully')
                    }}
                >
                    <Card.Content className='grid gap-4'>
                        <TextField isRequired label='Name' placeholder='Enter your Name' />
                        <TextField isRequired label='Email' placeholder='Enter your email' type='email' />
                        <TextField isRequired label='Password' placeholder='Enter your password' type='password' />
                        <TextField
                            isRequired
                            label='Confirm Password'
                            placeholder='Enter your password'
                            type='password'
                        />
                        <Checkbox>I agree to the terms and conditions</Checkbox>
                        <Button className='w-full' type='submit'>
                            Login
                        </Button>
                        <Link className='text-center text-muted-foreground text-sm hover:text-foreground' href='#'>
                            Don't have an account? Register
                        </Link>
                        <Separator>Or continue with</Separator>
                        <div className='flex gap-4 pb-6'>
                            <Button className='w-full' variant='outline'>
                                <IconBrandGithub className='size-4' />
                                Github
                            </Button>
                            <Button className='w-full' variant='outline'>
                                <IconBrandGoogle className='size-4' />
                                Google
                            </Button>
                        </div>
                    </Card.Content>
                </Form>
            </Card>
        </>
    )
}
