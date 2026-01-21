import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandX } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonSocialIconsDemo = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4'>
      <Button size='icon' variant='outline'>
        <IconBrandGoogle />
      </Button>
      <Button size='icon' variant='outline'>
        <IconBrandX />
      </Button>
      <Button size='icon' variant='outline'>
        <IconBrandFacebook />
      </Button>
      <Button size='icon' variant='outline'>
        <IconBrandGithub />
      </Button>
    </div>
  )
}

export default ButtonSocialIconsDemo
