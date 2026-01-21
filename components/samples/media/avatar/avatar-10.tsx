import { IconCirclePlus } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'

const AvatarPlusDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar
        alt='Hallie Richards'
        className='size-10'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      <button
        className='absolute -right-1 -bottom-1 inline-flex cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50'
        type='button'
      >
        <IconCirclePlus className='size-5 fill-slate-400 text-background' />
        <span className='sr-only'>Add</span>
      </button>
    </div>
  )
}

export default AvatarPlusDemo
