'use client'
import { Button, Card, Checkbox, Form, Separator, TextField, toast } from '@/components/ui'
import { IconBrandCleon, IconBrandGithub, IconBrandGoogle } from 'hq-icons'
import Link from 'next/link'

export default function Page() {
    return (
        <>
            <Link href='#'>
                <IconBrandCleon className='size-10' />
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
                        <TextField isRequired label='Email' type='email' placeholder='Enter your email' />
                        <TextField isRequired label='Password' type='password' placeholder='Enter your password' />
                        <TextField
                            isRequired
                            label='Confirm Password'
                            type='password'
                            placeholder='Enter your password'
                        />
                        <Checkbox>I agree to the terms and conditions</Checkbox>
                        <Button type='submit' className='w-full'>
                            Login
                        </Button>
                        <Link href='#' className='text-center text-muted-fg text-sm hover:text-fg'>
                            Don't have an account? Register
                        </Link>
                        <Separator>Or continue with</Separator>
                        <div className='flex gap-4 pb-6'>
                            <Button variant='outline' className='w-full'>
                                <IconBrandGithub className='size-4' />
                                Github
                            </Button>
                            <Button variant='outline' className='w-full'>
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
