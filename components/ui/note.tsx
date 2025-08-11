import type { ComponentPropsWithRef } from 'react'
import { cn } from '@/lib/utils'

interface NoteProps extends ComponentPropsWithRef<'div'> {
    variant?: 'default' | 'destructive'
}

const Note = ({ variant = 'default', className, children, ...props }: NoteProps) => (
    <div
        className={cn(
            'relative grid w-full items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-child-items:grid-cols-[0_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
            variant === 'default' && 'bg-card text-card-foreground',
            variant === 'destructive' &&
                'bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current',
            className
        )}
        data-slot='alert'
        role='alert'
        {...props}
    >
        {children}
    </div>
)

const NoteTitle = ({ className, ...props }: ComponentPropsWithRef<'h5'>) => (
    <h5
        className={cn('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className)}
        data-slot='alert-title'
        {...props}
    />
)

const NoteDescription = ({ className, ...props }: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn(
            'col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed',
            className
        )}
        data-slot='alert-description'
        {...props}
    />
)

Note.Title = NoteTitle
Note.Description = NoteDescription

export { Note }
