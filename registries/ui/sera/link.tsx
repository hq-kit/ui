"use client"

import type { Ref } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Link as RACLink, type LinkProps as RACLinkProps } from "react-aria-components/Link"
import { cn } from "@/lib/utils"

interface LinkProps extends RACLinkProps {
  ref?: Ref<HTMLAnchorElement>
}

const Link = ({ className, ref, ...props }: LinkProps) => {
  return (
    <RACLink
      className={composeRenderProps(className, (className) =>
        cn(
          [
            "outline-0 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring",
            "disabled:cursor-default disabled:text-muted-foreground",
            "href" in props && "cursor-pointer"
          ],
          className
        )
      )}
      ref={ref}
      {...props}
    />
  )
}

export type { LinkProps }
export { Link }
