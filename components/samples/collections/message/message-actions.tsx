import { CopyIcon, RefreshCcwIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message, MessageContent, MessageFooter } from "@/components/ui/message"

export default function MessageActionsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>The install failure is coming from the workspace package.</BubbleContent>
          </Bubble>
          <MessageFooter>
            <Button aria-label="Copy" size="icon" title="Copy" variant="ghost">
              <CopyIcon />
            </Button>
            <Button aria-label="Like" size="icon" title="Like" variant="ghost">
              <ThumbsUpIcon />
            </Button>
            <Button aria-label="Dislike" size="icon" title="Dislike" variant="ghost">
              <ThumbsDownIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Okay drop me a link. Taking a look...</BubbleContent>
          </Bubble>
          <MessageFooter className="gap-2">
            <span className="font-normal text-destructive">Failed to send</span>
            <Button aria-label="Retry" size="icon-xs" title="Retry" variant="ghost">
              <RefreshCcwIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}
