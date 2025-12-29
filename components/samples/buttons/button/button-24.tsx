import { IconShieldCheck, IconShieldX } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonPermissionsDemo = () => {
  return (
    <div className='flex items-center gap-4'>
      <Button className='bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40'>
        Reject
        <IconShieldX />
      </Button>
      <Button className='bg-green-600/10 text-green-600 hover:bg-green-600/20 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 dark:hover:bg-green-400/20'>
        Approve
        <IconShieldCheck />
      </Button>
    </div>
  )
}

export default ButtonPermissionsDemo
