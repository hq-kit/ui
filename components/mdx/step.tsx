"use client"

import { cn } from "cn"
import {
  Children,
  type ComponentProps,
  cloneElement,
  createContext,
  isValidElement,
  type ReactNode,
  useContext
} from "react"

interface StepProps extends ComponentProps<"div"> {
  title?: string
  description?: ReactNode
}

const StepContext = createContext<number | null>(null)

function useStep() {
  const value = useContext(StepContext)

  if (value === null) {
    throw new Error("Step must be used within <Steps>.")
  }

  return value
}

const Steps = ({ className, children, ...props }: ComponentProps<"ol">) => {
  const items = Children.toArray(children)

  return (
    <ol className={cn("space-y-0", className)} {...props}>
      {items.map((child, index) => {
        if (!isValidElement(child)) return child

        return (
          <StepContext.Provider key={child.key ?? index} value={index + 1}>
            {cloneElement(child, {
              last: index === items.length - 1
            } as any)}
          </StepContext.Provider>
        )
      })}
    </ol>
  )
}

const Step = ({
  className,
  title,
  description,
  children,
  last,
  ...props
}: StepProps & {
  last?: boolean
}) => {
  const number = useStep()
  return (
    <div className={cn("relative flex gap-3", className)} {...props}>
      {!last && <div className="bg-border absolute top-6 bottom-0 left-3.5 h-full w-px" />}
      <div className="bg-primary text-primary-foreground hover:bg-primary/80 z-10 grid size-7 place-content-center rounded-[min(var(--radius-md),12px)] select-none in-data-[slot=button-group]:rounded-lg">
        {number}
      </div>
      <div className="min-w-0 flex-1 pb-10">
        <h3 className="text-lg font-semibold">{title}</h3>

        {description && <p className="text-muted-foreground mt-2">{description}</p>}

        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  )
}

Step.displayName = "Step"

export { Step, Steps }
