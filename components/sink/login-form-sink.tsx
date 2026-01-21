'use client'

import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import Link from 'next/link'
import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { PasswordInput, TextField } from '../ui/text-field'

export default function LoginFormSink() {
  return (
    <Card>
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
        <Card.Content className='flex flex-col gap-3'>
          <div className='grid grid-cols-2 gap-3'>
            <Button variant='outline'>
              <IconBrandGithub className='size-4' />
              Github
            </Button>
            <Button variant='outline'>
              <IconBrandGoogle className='size-4' />
              Google
            </Button>
          </div>
          <Separator className='my-4' />
          <TextField isRequired>
            <Field.Label>Name</Field.Label>
            <Input placeholder='Enter your name' />
            <Field.Error />
          </TextField>
          <TextField isRequired type='email'>
            <Field.Label>Email</Field.Label>
            <Input placeholder='Enter your email' />
            <Field.Error />
          </TextField>
          <TextField isRequired type='password'>
            <Field.Label>Password</Field.Label>
            <PasswordInput placeholder='Enter your password' />
            <Field.Error />
          </TextField>
          <Checkbox aria-label='terms' isRequired>
            I agree to the terms and conditions
          </Checkbox>
        </Card.Content>
        <Card.Footer className='justify-end gap-4'>
          <Link className={buttonVariants({ variant: 'link' })} href='#'>
            Register
          </Link>
          <Button type='submit'>Login</Button>
        </Card.Footer>
      </Form>
    </Card>
  )
}
