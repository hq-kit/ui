'use client'

import { IconBrandGithub, IconBrandGoogle, IconPhoto } from '@tabler/icons-react'
import { IconApp } from '@/components/icons'
import { Button, Card, Checkbox, Form, Header, Link, Separator, Skeleton, TextField, toast } from '@/components/ui'

export default function Page() {
    return (
        <Card className='grid w-full max-w-5xl lg:grid-cols-2'>
            <div className='flex h-full items-center justify-center px-4 lg:px-8'>
                <div className='mx-auto w-full max-w-lg'>
                    <div className='my-6 flex flex-col justify-center'>
                        <Link href='#'>
                            <IconApp className='mb-2 size-10' />
                        </Link>
                        <Header description='Fill in the form below to create your account' title='Register' />
                    </div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault()
                            toast.success('Dummy Login Successfully')
                        }}
                    >
                        <div className='grid gap-4'>
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
                        </div>
                    </Form>
                </div>
            </div>
            <div className='relative hidden lg:block'>
                <Skeleton className='size-full' />
                <IconPhoto className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-24 text-muted-foreground' />
            </div>
        </Card>
    )
}
