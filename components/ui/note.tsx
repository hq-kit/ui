import { IconCircleAlert, IconCircleCheck, IconInfo } from 'hq-icons'

import { cn } from '@/lib/utils'

interface NoteProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'warning' | 'outline'
    hideIndicator?: boolean
}

const Note = ({ hideIndicator = false, variant = 'primary', className, children, ...props }: NoteProps) => {
    const iconMap: Record<string, React.ElementType | null> = {
        primary: IconInfo,
        info: IconInfo,
        warning: IconCircleAlert,
        danger: IconCircleAlert,
        success: IconCircleCheck,
        secondary: null,
        outline: null
    }

    const Icon = iconMap[variant] || null

    return (
        <div
            className={cn(
                'w-full overflow-hidden rounded-lg p-4 text-sm border backdrop-blur-2xl',
                variant === 'primary' && 'border-primary/30 text-primary bg-primary/10',
                variant === 'secondary' && 'border-muted text-secondary-foreground bg-secondary/25',
                variant === 'warning' && 'border-warning/40 bg-warning/5 text-warning',
                variant === 'danger' && 'border-danger/30 bg-danger/10 text-danger',
                variant === 'success' && 'border-success/20 text-success bg-success/10',
                variant === 'info' && 'border-info/35 text-info bg-info/10',
                variant === 'outline' && 'border-muted text-fg bg-bg/10',
                className
            )}
            {...props}
        >
            <div className='flex grow items-start'>
                {Icon && !hideIndicator && (
                    <Icon className='mr-3 shrink-0 size-5 rounded-full ring-2 ring-current/30 my-0.5' />
                )}
                {children}
            </div>
        </div>
    )
}

export { Note }
