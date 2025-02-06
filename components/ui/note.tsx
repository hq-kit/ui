import { IconCircleAlert, IconCircleCheck, IconInfo } from 'hq-icons'
import { type VariantProps, tv } from 'tailwind-variants'

const noteStyles = tv({
    base: [
        'w-full overflow-hidden rounded-lg p-4 inset-ring-1 inset-ring-current/10 sm:text-sm/6',
        '[&_a]:underline data-hovered:[&_a]:underline **:[strong]:font-semibold'
    ],
    variants: {
        variant: {
            primary: [
                'border-primary/35 [&_a]:text-primary text-primary bg-primary/10 leading-4',
                'dark:[&_a]:text-primary'
            ],
            secondary: [
                'border-muted [&_a]:text-secondary-foreground text-secondary-foreground bg-secondary/20 [&_svg]:text-secondary-foreground',
                'dark:[&_a]:text-secondary-foreground dark:[&_svg]:text-secondary-foreground'
            ],
            warning:
                'border-warning/50 dark:border-warning/25 bg-warning/5 text-warning dark:text-warning',
            danger: 'border-danger/30 bg-danger/5 dark:bg-danger/10 text-danger',
            success: [
                'border-success/20 [&_a]:text-success text-success bg-success/10 [&_svg]:text-success leading-4'
            ],
            dark: 'border-fg/30 bg-fg text-bg'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

interface NoteProps
    extends React.HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof noteStyles> {
    indicator?: boolean
}

const Note = ({ indicator = true, variant, className, ...props }: NoteProps) => {
    const iconMap: Record<string, React.ElementType | null> = {
        primary: IconInfo,
        warning: IconCircleAlert,
        danger: IconCircleAlert,
        success: IconCircleCheck,
        secondary: null,
        dark: null
    }

    const IconComponent = iconMap[variant as string] || null

    return (
        <div className={noteStyles({ variant, className })} {...props}>
            <div className='flex grow items-start'>
                {IconComponent && indicator && (
                    <div className='shrink-0'>
                        <IconComponent className='mr-3 size-5 rounded-full leading-loose ring ring-current/30' />
                    </div>
                )}
                <div className='text-pretty'>{props.children}</div>
            </div>
        </div>
    )
}

export { Note }
export type { NoteProps }
