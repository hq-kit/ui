'use client'

import { IconBrandGithub, IconBrandGoogle } from 'hq-icons'
import Image from 'next/image'
import { toast } from 'sonner'

import { Button, Card, Checkbox, Form, Link, ShowMore, TextField } from '@/components/ui'

export default function LoginForm() {
    return (
        <div className='w-full lg:grid lg:min-h-screen lg:max-h-screen lg:grid-cols-2'>
            <div className='flex flex-col items-center justify-center py-12'>
                <Card className='w-[350px]' borderless>
                    <Card.Header>
                        <Card.Title>Register</Card.Title>
                        <Card.Description>Create your account</Card.Description>
                    </Card.Header>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault()
                            toast.success('Dummy Login Successfully')
                        }}
                    >
                        <Card.Content className='grid gap-4'>
                            <TextField isRequired label='Name' placeholder='Enter your Name' />
                            <TextField
                                isRequired
                                label='Email'
                                type='email'
                                placeholder='Enter your email'
                            />
                            <TextField
                                isRevealable
                                isRequired
                                label='Password'
                                type='password'
                                placeholder='Enter your password'
                            />
                            <Checkbox>I agree to the terms and conditions</Checkbox>
                            <Button className='w-full mt-2' type='submit'>
                                Register
                            </Button>
                            <Link href='#' className='text-center text-sm mb-4'>
                                Already have an account?
                            </Link>
                            <ShowMore as='text' text='Or continue with' />
                            <div className='flex gap-4'>
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
            </div>
            <div className='hidden bg-muted lg:block'>
                <Image
                    src='https://picsum.photos/1920/1080'
                    alt='Image'
                    priority
                    width='1920'
                    height='1080'
                    className='size-full object-cover dark:brightness-[0.2] dark:grayscale'
                />
            </div>
        </div>
    )
}
