'use client'

import { IconMenu2, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const IconButtonToggleDemo = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Button aria-label='Toggle menu' onPress={() => setIsOpen(!isOpen)} size='icon' variant='ghost'>
      {isOpen ? <IconX /> : <IconMenu2 />}
    </Button>
  )
}

export default IconButtonToggleDemo
