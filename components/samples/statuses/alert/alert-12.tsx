import { IconUserSquareRounded } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertIndicatorDestructiveDemo = () => {
  return (
    <Alert className='rounded-none border-0 border-destructive border-l-6 bg-destructive/10 text-destructive'>
      <IconUserSquareRounded />
      <AlertTitle>Your request to join the team is denied.</AlertTitle>
    </Alert>
  )
}

export default AlertIndicatorDestructiveDemo
