import { IconFolder } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerDirectory = () => {
  return (
    <FileTrigger acceptDirectory>
      <IconFolder />
      Browse...
    </FileTrigger>
  )
}

export default FileTriggerDirectory
