import { tv } from 'tailwind-variants'

import { Heading } from './heading'

const card = tv({
    slots: {
        root: [
            'bg-bg text-fg **:data-[slot=table-header]:bg-muted/50 rounded-lg has-[table]:overflow-hidden has-[table]:**:data-[slot=card-footer]:border-t **:[table]:overflow-hidden'
        ],
        header: 'flex flex-col gap-y-1',
        title: 'leading-none font-semibold tracking-tight sm:leading-6',
        description: 'text-muted-fg text-sm',
        content:
            'has-[[data-slot=table-header]]:bg-muted/40 px-6 pb-6 has-[table]:border-t has-[table]:p-0 **:data-[slot=table-cell]:px-6 **:data-[slot=table-column]:px-6 [&:has(table)+[data-slot=card-footer]]:py-5',
        footer: 'flex items-center p-6 pt-0'
    }
})

const { root, header, title, description, content, footer } = card()
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    borderless?: boolean
}

const Card = ({ borderless = false, className, ...props }: CardProps) => {
    return (
        <div
            data-slot='card'
            className={root({ className }) + (borderless ? '' : ' border shadow-xs')}
            {...props}
        />
    )
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
    withoutPadding?: boolean
}

const Header = ({
    withoutPadding = false,
    className,
    title,
    description,
    children,
    ...props
}: HeaderProps) => (
    <div
        data-slot='card-header'
        className={header({ className }) + (withoutPadding ? ' p-0 pt-0 pb-5' : ' px-6 py-5')}
        {...props}
    >
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {!title && typeof children === 'string' ? <Title>{children}</Title> : children}
    </div>
)

const Title = ({ className, level = 3, ...props }: React.ComponentProps<typeof Heading>) => {
    return (
        <Heading data-slot='card-title' level={level} className={title({ className })} {...props} />
    )
}

const Description = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} data-slot='description' className={description({ className })} {...props} />
    )
}

const Content = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div data-slot='card-content' className={content({ className })} {...props} />
}

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div data-slot='card-footer' className={footer({ className })} {...props} />
}

Card.Content = Content
Card.Description = Description
Card.Footer = Footer
Card.Header = Header
Card.Title = Title

export { Card }
