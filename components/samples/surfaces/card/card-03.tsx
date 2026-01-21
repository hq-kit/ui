import { IconCirclePlus2 } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardInviteCardDemo = () => {
  return (
    <Card className='w-full max-w-lg'>
      <CardHeader>
        <CardTitle>Meeting Notes</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4 sm:grid-cols-2'>
        <div className='flex items-center gap-4'>
          <IconCirclePlus2 />
          <span className='font-semibold text-sm'>Invite Member </span>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar
            alt='Hallie Richards'
            fallback='JA'
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          />
          <div className='flex flex-col'>
            <span className='font-semibold text-sm'>Jimmy Androson </span>
            <span className='text-muted-foreground text-sm'>UI Designer</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar
            alt='Hallie Richards'
            fallback='DA'
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png'
          />
          <div className='flex flex-col'>
            <span className='font-semibold text-sm'>Dean Ambrose </span>
            <span className='text-muted-foreground text-sm'>UX Designer</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar
            alt='Hallie Richards'
            fallback='HR'
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png'
          />
          <div className='flex flex-col'>
            <span className='font-semibold text-sm'>Anita John</span>
            <span className='text-muted-foreground text-sm'>Branding</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </CardContent>
    </Card>
  )
}

export default CardInviteCardDemo
