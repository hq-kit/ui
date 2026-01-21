'use client'

import { IconCheck, IconCopy } from '@tabler/icons-react'
import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Tooltip } from '../ui/tooltip'

interface CopyButtonProps extends ButtonProps {
  isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
  return (
    <Tooltip>
      <Button aria-label='Copy' size='icon-sm' variant='ghost' {...props}>
        <IconCopy
          className={cn('size-4 rotate-0 scale-100 transition-all duration-200', isCopied && 'rotate-90 scale-0')}
        />
        <IconCheck
          className={cn(
            'absolute size-4 rotate-90 scale-0 transition-all duration-200',
            isCopied && 'rotate-0 scale-100'
          )}
        />
      </Button>
      <Tooltip.Content>Copy to clipboard</Tooltip.Content>
    </Tooltip>
  )
}
