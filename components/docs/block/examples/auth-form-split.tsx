'use client'

import { IconBrandGithub, IconBrandGoogle } from 'hq-icons'
import type { FormEvent } from 'react'

import { toast } from '@/components/ui'
import { Button, Checkbox, Form, Link, Separator, TextField } from '@/components/ui'
import AuthLayoutSplit from 'layouts/auth-layout-split'

export default function AuthForm() {
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        toast.success('Register Successfully')
    }

    return (
        <AuthLayoutSplit title='Register' description='Create your account'>
            <Form className='grid gap-4' onSubmit={onSubmit}>
                <TextField isRequired label='Name' placeholder='Enter your Name' />
                <TextField isRequired label='Email' type='email' placeholder='Enter your email' />
                <TextField isRequired label='Password' type='password' placeholder='Enter your password' />
                <Checkbox>I agree to the terms and conditions</Checkbox>
                <Button className='mt-2 w-full' type='submit'>
                    Register
                </Button>
                <Link href='#' className='mb-4 text-center text-sm'>
                    Already have an account?
                </Link>
                <Separator>Or continue with</Separator>
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
        </AuthLayoutSplit>
    )
}
