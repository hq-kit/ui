import { IconUserCheck } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertIndicatorSuccessDemo = () => {
  return (
    <Alert className='rounded-md border-green-600 border-l-6 bg-green-600/10 text-green-600 dark:border-green-400 dark:bg-green-400/10 dark:text-green-400'>
      <IconUserCheck />
      <AlertTitle>Your request to join the team is approved.</AlertTitle>
    </Alert>
  )
}

export default AlertIndicatorSuccessDemo
