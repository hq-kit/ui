import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const MessageGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("gap-2 flex min-w-0 flex-col", className)} data-slot="message-group" {...props} />
)

const Message = ({ className, align = "start", ...props }: ComponentProps<"div"> & { align?: "start" | "end" }) => (
  <div
    className={cn("text-sm gap-2 group/message relative flex w-full min-w-0 data-[align=end]:flex-row-reverse", className)}
    data-align={align}
    data-slot="message"
    {...props}
  />
)

const MessageAvatar = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "min-w-8 group-has-data-[slot=message-footer]/message:-translate-y-8 flex w-fit shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted",
      className
    )}
    data-slot="message-avatar"
    {...props}
  />
)

const MessageContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-2.5 group-data-[align=end]/message:*:data-slot:self-end wrap-break-word flex w-full min-w-0 flex-col", className)}
    data-slot="message-content"
    {...props}
  />
)

const MessageHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("text-xs font-medium text-muted-foreground px-4 group-has-data-[variant=ghost]/message:px-0 uppercase tracking-wide flex min-w-0 max-w-full items-center", className)}
    data-slot="message-header"
    {...props}
  />
)

const MessageFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "text-xs font-medium text-muted-foreground px-4 group-has-data-[variant=ghost]/message:px-0 uppercase tracking-wide flex min-w-0 max-w-full items-center group-data-[align=end]/message:justify-end",
      className
    )}
    data-slot="message-footer"
    {...props}
  />
)

Message.Avatar = MessageAvatar
Message.Content = MessageContent
Message.Footer = MessageFooter
Message.Group = MessageGroup
Message.Header = MessageHeader

export { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader }
