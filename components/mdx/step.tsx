"use client"

import * as React from "react"
import { Children, type ComponentProps, cloneElement, isValidElement } from "react"
import { cn } from "@/lib/utils"

interface StepProps extends ComponentProps<"div"> {
  title?: string
  description?: React.ReactNode
}

const StepContext = React.createContext<number | null>(null)

function useStep() {
  const value = React.useContext(StepContext)

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
      {!last && <div className="absolute top-6 bottom-0 left-3.5 h-full w-px bg-border" />}
      <div className="cn-button-size-icon-sm cn-button-variant-default z-10 grid select-none place-content-center">
        {number}
      </div>
      <div className="min-w-0 flex-1 pb-10">
        <h3 className="font-semibold text-lg">{title}</h3>

        {description && <p className="mt-2 text-muted-foreground">{description}</p>}

        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  )
}

Step.displayName = "Step"

export { Step, Steps }
