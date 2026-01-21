import { IconDownload } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonDownloadDemo = () => {
  return (
    <Button className='border-primary border-dashed shadow-none' variant='outline'>
      <IconDownload />
      Download
    </Button>
  )
}

export default ButtonDownloadDemo
