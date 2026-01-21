import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'
import { Toggle } from '@/components/ui/toggle'

const ToggleIcon = () => {
  return (
    <div className='flex gap-2'>
      <Toggle variant='outline'>
        <IconBold />
      </Toggle>
      <Toggle variant='outline'>
        <IconItalic />
      </Toggle>
      <Toggle variant='outline'>
        <IconUnderline />
      </Toggle>
    </div>
  )
}

export default ToggleIcon
