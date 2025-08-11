import { Toaster, type ToasterProps } from 'sonner'
import { useTheme } from '@/components/providers'

const Toast = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme()
    return (
        <Toaster
            className='toaster group'
            richColors
            theme={theme as ToasterProps['theme']}
            toastOptions={{
                className:
                    '*:[svg]:self-start *:[svg]:shrink-0 font-sans rounded-lg! has-data-description:*:[svg]:mt-1 *:[svg]:mt-0.5 backdrop-blur-2xl'
            }}
            {...props}
        />
    )
}

export { Toast }
export type { ToasterProps }
