import { IconUpload } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerDisabled = () => {
  return (
    <FileTrigger isDisabled>
      <IconUpload />
      Upload
    </FileTrigger>
  )
}

export default FileTriggerDisabled
