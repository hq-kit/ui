import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandX } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonSocialDemo = () => {
  return (
    <div className='flex w-full max-w-56 flex-col justify-center gap-4'>
      <Button className='border-[#e84133] text-[#e84133]' variant='outline'>
        <IconBrandGoogle />
        <span className='flex flex-1 justify-center'>Continue with Google</span>
      </Button>
      <Button className='border-black text-black dark:border-white dark:text-white' variant='outline'>
        <IconBrandX />
        <span className='flex flex-1 justify-center'>Continue with X</span>
      </Button>
      <Button className='border-[#0866fe] text-[#0866fe]' variant='outline'>
        <IconBrandFacebook />
        <span className='flex flex-1 justify-center'>Continue with Facebook</span>
      </Button>
      <Button className='border-black text-black dark:border-white dark:text-white' variant='outline'>
        <IconBrandGithub />
        <span className='flex flex-1 justify-center'>Continue with GitHub</span>
      </Button>
    </div>
  )
}

export default ButtonSocialDemo
