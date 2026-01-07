'use client'

import { toast } from 'sonner'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const SonnerWithAvatarDemo = () => {
  return (
    <Button
      onPress={() =>
        toast(
          <div className='flex items-center gap-2'>
            <Avatar
              alt='Hallie Richards'
              fallback='HR'
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
            />
            Hey Henry Richer, your profile is now up to date!
          </div>
        )
      }
      variant='outline'
    >
      Toast with avatar
    </Button>
  )
}

export default SonnerWithAvatarDemo
