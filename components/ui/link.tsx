'use client'

import { type LinkProps, Link as RACLink, composeRenderProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const Link = (props: LinkProps) => {
    return (
        <RACLink
            {...props}
            className={composeRenderProps(
                props.className,
                (className, { isDisabled, isFocusVisible }) =>
                    cn(
                        "relative cursor-pointer rounded-lg text-sm outline-hidden transition",
                        isFocusVisible && "ring-2 ring-primary ring-offset-2",
                        isDisabled && "cursor-default opacity-50",
                        className,
                    ),
            )}
        />
    )
}

export { Link }
