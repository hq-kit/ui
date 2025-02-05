'use client'

import {
    Switch as SwitchPrimitive,
    type SwitchProps as SwitchPrimitiveProps
} from 'react-aria-components'

import { ctr } from './utils'

interface SwitchProps extends SwitchPrimitiveProps {
    ref?: React.RefObject<HTMLLabelElement>
}
const Switch = ({ children, className, ref, ...props }: SwitchProps) => {
    return (
        <SwitchPrimitive
            ref={ref}
            {...props}
            className={ctr(className, 'group inline-flex touch-none items-center sm:text-sm')}
            style={{ WebkitTapHighlightColor: 'transparent' }}
        >
            {(values) => (
                <>
                    <span className='group-data-selected:bg-primary group-data-focused:ring-primary/20 group-data-invalid:ring-danger/20 bg-border mr-2 h-5 w-8 cursor-pointer rounded-full border-2 border-transparent transition duration-200 group-data-disabled:cursor-default group-data-disabled:opacity-50 group-data-focused:ring-2'>
                        <span className='bg-primary-fg block size-4 origin-right rounded-full shadow-sm transition-all duration-200 group-data-pressed:w-5 group-data-selected:ml-3 group-data-selected:group-data-[pressed]:ml-2' />
                    </span>
                    {typeof children === 'function' ? children(values) : children}
                </>
            )}
        </SwitchPrimitive>
    )
}

export { Switch }
export type { SwitchProps }
