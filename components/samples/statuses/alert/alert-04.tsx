import { IconAlertCircle, IconArrowRight } from '@tabler/icons-react'
import { Link } from 'react-aria-components'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { buttonVariants } from '@/components/ui/button'

const AlertWithLinkDemo = () => {
  return (
    <Alert className='flex items-center justify-between border-sky-600 text-sky-600 dark:border-sky-400 dark:text-sky-400 [&>svg]:translate-y-0'>
      <IconAlertCircle />
      <AlertTitle className='flex-1'>New message!</AlertTitle>
      <Link
        className={buttonVariants({
          variant: 'outline',
          className:
            'h-7 cursor-pointer rounded-md border-sky-600 px-2 text-sky-600! hover:bg-sky-600/10 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400! dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40 dark:hover:bg-sky-400/10'
        })}
        href='#'
      >
        Link
        <IconArrowRight />
      </Link>
    </Alert>
  )
}

export default AlertWithLinkDemo
