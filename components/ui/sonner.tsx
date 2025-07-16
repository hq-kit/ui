import { useTheme } from 'next-themes'
import { Toaster, type ToasterProps } from 'sonner'

const Toast = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme()
    return (
        <Toaster
            theme={theme as ToasterProps['theme']}
            className='toaster group'
            richColors
            toastOptions={{
                className:
                    '*:[svg]:self-start *:[svg]:shrink-0 font-sans rounded-lg! has-data-description:*:[svg]:mt-1 *:[svg]:mt-0.5 backdrop-blur-2xl'
            }}
            style={
                {
                    '--normal-bg': 'var(--color-bg)',
                    '--normal-text': 'var(--color-fg)',
                    '--normal-border': 'var(--color-muted)',

                    '--success-bg': 'var(--color-success-bg)',
                    '--success-border': 'var(--color-success-border)',
                    '--success-text': 'var(--color-success-fg)',

                    '--error-bg': 'var(--color-error-bg)',
                    '--error-border': 'var(--color-error-border)',
                    '--error-text': 'var(--color-error-fg)',

                    '--warning-bg': 'var(--color-warning-bg)',
                    '--warning-border': 'var(--color-warning-border)',
                    '--warning-text': 'var(--color-warning-fg)',

                    '--info-bg': 'var(--color-info-bg)',
                    '--info-border': 'var(--color-info-border)',
                    '--info-text': 'var(--color-info-fg)'
                } as React.CSSProperties
            }
            {...props}
        />
    )
}

export { Toast }
export type { ToasterProps }
