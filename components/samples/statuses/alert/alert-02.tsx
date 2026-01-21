import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar } from '@/components/ui/avatar'

const AlertWithAvatarDemo = () => {
  return (
    <Alert className='flex items-center justify-between'>
      <Avatar
        alt='Hallie Richards'
        className='rounded-sm'
        fallback='HR'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      <div className='flex-1 flex-col justify-center gap-1'>
        <AlertTitle className='flex-1'>Sara has replied on the uploaded image.</AlertTitle>
        <AlertDescription>12 unread messages. Tap to see.</AlertDescription>
      </div>
      <IconAlertCircle />
    </Alert>
  )
}

export default AlertWithAvatarDemo
