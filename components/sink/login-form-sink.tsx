'use client'

import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import Link from 'next/link'
import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Button, buttonVariants } from '../ui/button'
import { Card } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Field } from '../ui/field'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

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
          <Field.Text isRequired>
            <Field.Label>Name</Field.Label>
            <Input placeholder='Enter your name' />
            <Field.Error />
          </Field.Text>
          <Field.Text isRequired type='email'>
            <Field.Label>Email</Field.Label>
            <Input placeholder='Enter your email' />
            <Field.Error />
          </Field.Text>
          <Field.Text isRequired type='password'>
            <Field.Label>Password</Field.Label>
            <Input placeholder='Enter your password' />
            <Field.Error />
          </Field.Text>
          <Field orientation='horizontal'>
            <Checkbox isRequired>I agree to the terms and conditions</Checkbox>
          </Field>
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
