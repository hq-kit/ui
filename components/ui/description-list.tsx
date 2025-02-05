import { tv } from 'tailwind-variants'

const descriptionListStyles = tv({
    slots: {
        dl: 'grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,calc(var(--spacing)*80))_auto] sm:text-sm/6',
        dt: 'text-muted-fg col-start-1 border-t pt-3 first:border-none sm:py-3',
        dd: 'text-fg pt-1 pb-3 sm:border-t sm:py-3 sm:nth-2:border-none'
    }
})

const { dl, dt, dd } = descriptionListStyles()

const DescriptionList = ({ className, ref, ...props }: React.ComponentProps<'dl'>) => {
    return <dl ref={ref} className={dl({ className })} {...props} />
}

const DescriptionTerm = ({ className, ref, ...props }: React.ComponentProps<'dt'>) => {
    return <dt ref={ref} className={dt({ className })} {...props} />
}

const DescriptionDetails = ({ className, ...props }: React.ComponentProps<'dd'>) => {
    return <dd {...props} className={dd({ className })} />
}

DescriptionList.Term = DescriptionTerm
DescriptionList.Details = DescriptionDetails
export { DescriptionList }
