import { IconFiles } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerMultipleFiles = () => {
  return (
    <FileTrigger allowsMultiple>
      <IconFiles />
      Browse Files...
    </FileTrigger>
  )
}

export default FileTriggerMultipleFiles
