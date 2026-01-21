import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertSoftDemo = () => {
  return (
    <Alert className='border-none bg-primary/10'>
      <IconAlertCircle />
      <AlertTitle>File Should be PDF,DOCX,JPG, or PNG.</AlertTitle>
      <AlertDescription>If the file type is not one of this than we can&apos;t get your files</AlertDescription>
    </Alert>
  )
}

export default AlertSoftDemo
