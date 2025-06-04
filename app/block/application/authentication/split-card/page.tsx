'use client'

import { IconBrandCleon, IconBrandGithub, IconBrandGoogle, IconImage } from 'hq-icons'

import { Button, Card, Checkbox, Form, Header, Link, Separator, Skeleton, TextField, toast } from '@/components/ui'

export default function Page() {
    return (
        <>
            <Card className='grid w-full max-w-5xl lg:grid-cols-2'>
                <div className='flex h-full items-center justify-center px-4 lg:px-8'>
                    <div className='mx-auto w-full max-w-lg'>
                        <div className='my-6 flex flex-col justify-center'>
                            <Link href='#'>
                                <IconBrandCleon className='mb-2 size-10' />
                            </Link>
                            <Header title='Register' description='Fill in the form below to create your account' />
                        </div>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault()
                                toast.success('Dummy Login Successfully')
                            }}
                        >
                            <div className='grid gap-4'>
                                <TextField isRequired label='Name' placeholder='Enter your Name' />
                                <TextField isRequired label='Email' type='email' placeholder='Enter your email' />
                                <TextField
                                    isRequired
                                    label='Password'
                                    type='password'
                                    placeholder='Enter your password'
                                />
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
                            </div>
                        </Form>
                    </div>
                </div>
                <div className='relative hidden lg:block'>
                    <Skeleton className='size-full' />
                    <IconImage className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-24 text-muted-fg' />
                </div>
            </Card>
        </>
    )
}
