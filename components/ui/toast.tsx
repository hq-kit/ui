'use client'

import { Toaster, type ToasterProps } from 'sonner'

import { useTheme } from '@/components/providers'

const Toast = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme()
    return (
        <Toaster
            theme={theme as ToasterProps['theme']}
            className='toaster group'
            richColors
            toastOptions={{
                classNames: {
                    actionButton: 'bg-primary! text-primary-fg! hover:bg-primary/90!',
                    cancelButton: 'bg-secondary! text-secondary-fg! hover:bg-secondary/90!'
                }
            }}
            {...props}
        />
    )
}

export { Toast }
export type { ToasterProps }
