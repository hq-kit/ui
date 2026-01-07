'use client'

import { IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardActionDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Card className='relative max-w-lg shadow-none'>
      <Button
        className='absolute top-2 right-2 rounded-full'
        onPress={() => setIsActive(false)}
        size='icon'
        variant='ghost'
      >
        <IconX />
        <span className='sr-only'>Close</span>
      </Button>
      <CardHeader>
        <CardTitle className='text-center'>Have a project in mind</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4 text-center'>
        <p>Let&apos;s discuss! Our Assistant team is excited to hear about your projects, ideas and questions. </p>
        <Button>Contact Our Team</Button>
      </CardContent>
    </Card>
  )
}

export default CardActionDemo
