'use client'

import { IconBrandGithub, IconBrandGoogle } from 'hq-icons'
import AuthLayoutClassic from 'layouts/auth-layout-classic'
import { toast } from 'sonner'

import { Button, Checkbox, Form, Link, ShowMore, TextField } from '@/components/ui'

export default function AuthForm() {
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        toast.success('Register Successfully')
    }

    return (
        <AuthLayoutClassic title='Register' description='Create your account'>
            <Form className='grid gap-4' onSubmit={onSubmit}>
                <TextField isRequired label='Name' placeholder='Enter your Name' />
                <TextField isRequired label='Email' type='email' placeholder='Enter your email' />
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
            </Form>
        </AuthLayoutClassic>
    )
}
