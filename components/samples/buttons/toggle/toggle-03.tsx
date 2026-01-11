import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'
import { Toggle } from '@/components/ui/toggle'

const ToggleWithText = () => {
  return (
    <div className='grid gap-2'>
      <Toggle variant='outline'>
        <IconBold />
        Bold
      </Toggle>
      <Toggle variant='outline'>
        <IconItalic />
        Italic
      </Toggle>
      <Toggle variant='outline'>
        <IconUnderline />
        Underline
      </Toggle>
    </div>
  )
}

export default ToggleWithText
