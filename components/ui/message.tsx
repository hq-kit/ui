import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const MessageGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-message-group flex min-w-0 flex-col", className)} data-slot="message-group" {...props} />
)

const Message = ({ className, align = "start", ...props }: ComponentProps<"div"> & { align?: "start" | "end" }) => (
  <div
    className={cn("cn-message group/message relative flex w-full min-w-0 data-[align=end]:flex-row-reverse", className)}
    data-align={align}
    data-slot="message"
    {...props}
  />
)

const MessageAvatar = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "cn-message-avatar flex w-fit shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted",
      className
    )}
    data-slot="message-avatar"
    {...props}
  />
)

const MessageContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-message-content wrap-break-word flex w-full min-w-0 flex-col", className)}
    data-slot="message-content"
    {...props}
  />
)

const MessageHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-message-header flex min-w-0 max-w-full items-center", className)}
    data-slot="message-header"
    {...props}
  />
)

const MessageFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "cn-message-footer flex min-w-0 max-w-full items-center group-data-[align=end]/message:justify-end",
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
