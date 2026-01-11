import { IconCamera } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerCamera = () => {
  return (
    <FileTrigger defaultCamera='environment'>
      <IconCamera />
      Open Camera
    </FileTrigger>
  )
}

export default FileTriggerCamera
