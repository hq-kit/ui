import type { ComponentPropsWithRef } from 'react'
import { cn } from '@/lib/utils'

const Card = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
        <div
            className={cn(
                'flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm has-[table]:overflow-hidden not-has-[[slot=footer]]:**:[[slot=content]]:pb-6 **:[[slot=table]]:rounded-b-none **:[[slot=table]]:border-x-0',
                className
            )}
            data-slot='card'
            {...props}
        />
    )
}

interface HeaderProps extends ComponentPropsWithRef<'div'> {
    title?: string
    description?: string
}

const CardHeader = ({ className, title, description, children, ...props }: HeaderProps) => (
    <div
        className={cn(
            'grid items-start gap-1.5 p-6 md:auto-rows-min md:grid-rows-[auto_auto] md:has-[[slot=action]]:grid-cols-[1fr_auto]',
            className
        )}
        slot='header'
        {...props}
    >
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {!title && typeof children === 'string' ? <CardTitle>{children}</CardTitle> : children}
    </div>
)

const CardTitle = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
        <div className={cn('font-semibold text-lg leading-none tracking-tight', className)} slot='title' {...props} />
    )
}

const CardDescription = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
        <div className={cn('text-muted-foreground text-sm md:row-start-2', className)} slot='description' {...props} />
    )
}

const CardAction = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
        <div
            className={cn(
                'flex items-center gap-2 self-start justify-self-end md:col-start-2 md:row-span-2 md:row-start-1',
                className
            )}
            slot='action'
            {...props}
        />
    )
}

const CardContent = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    return <div className={cn('px-6 has-[table]:p-0', className)} slot='content' {...props} />
}

const CardFooter = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    return <div className={cn('flex items-center p-6', className)} slot='footer' {...props} />
}

Card.Content = CardContent
Card.Description = CardDescription
Card.Footer = CardFooter
Card.Header = CardHeader
Card.Title = CardTitle
Card.Action = CardAction

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
