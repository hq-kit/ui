"use client"

import { cn } from "cn"
import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import { composeRenderProps } from "react-aria-components"
import { Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps } from "react-aria-components/Link"

export interface LinkProps extends LinkPrimitiveProps {
  ref?: React.RefObject<HTMLAnchorElement>
}

export function Link({ className, ref, ...props }: LinkProps) {
  return (
    <LinkPrimitive
      className={composeRenderProps(className, (className) =>
        cn(
          [
            "focus-visible:outline-ring outline-0 outline-offset-2 focus-visible:outline-2",
            "disabled:cursor-default disabled:opacity-50",
            "href" in props && "cursor-pointer"
          ],
          className
        )
      )}
      ref={ref}
      render={(domProps) =>
        "href" in domProps ? (
          <NextLink {...(props as NextLinkProps)} {...(domProps as NextLinkProps)} />
        ) : (
          <span {...domProps} />
        )
      }
      {...(props as LinkPrimitiveProps)}
    />
  )
}
