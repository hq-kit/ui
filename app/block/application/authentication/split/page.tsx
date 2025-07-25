'use client'

import { IconApp } from '@/components/icons'
import { Button, Checkbox, Form, Header, Link, Separator, Skeleton, TextField, toast } from '@/components/ui'
import { IconBrandGithub, IconBrandGoogle, IconPhoto } from '@tabler/icons-react'

export default function Page() {
    return (
        <>
            <div className='flex h-full items-center justify-center px-4 lg:px-8'>
                <div className='mx-auto w-full max-w-lg'>
                    <div className='mb-6 flex flex-col items-center justify-center'>
                        <Link href='#'>
                            <IconApp className='mb-2 size-10' />
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
                            <Link href='#' className='text-center text-muted-foreground text-sm hover:text-foreground'>
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
                <IconPhoto className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-24 text-muted-foreground' />
            </div>
        </>
    )
}
