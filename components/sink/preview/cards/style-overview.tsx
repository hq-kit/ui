"use client"

import { useStyle } from "@/components/style-provider"
import { Card } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"

export function StyleOverview() {
  const { style } = useStyle()
  return (
    <Card>
      <Card.Content className="flex flex-col gap-6 style-lyra:gap-4 style-mira:gap-4">
        <div className="flex flex-col gap-1">
          <div className="cn-font-heading font-medium style-sera:font-semibold style-lyra:text-lg style-mira:text-lg style-sera:text-lg text-2xl style-sera:uppercase capitalize style-sera:tracking-wide">
            {style}
          </div>
          <div className="line-clamp-2 style-lyra:text-sm style-mira:text-sm style-sera:text-sm text-base text-muted-foreground style-sera:leading-relaxed">
            Designers love packing quirky glyphs into test phrases. This is a preview of the typography styles.
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {[
            "--background",
            "--foreground",
            "--primary",
            "--secondary",
            "--muted",
            "--accent",
            "--border",
            "--chart-1",
            "--chart-2",
            "--chart-3",
            "--chart-4",
            "--chart-5"
          ].map((variant) => (
            <Tooltip key={variant}>
              <div className="flex flex-col flex-wrap items-center gap-2" key={variant}>
                <div
                  className="relative aspect-square w-full rounded-lg style-sera:rounded-none bg-(--color) after:absolute after:inset-0 after:rounded-lg style-sera:after:rounded-none after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
                  style={
                    {
                      "--color": `var(${variant})`
                    } as React.CSSProperties
                  }
                />
              </div>
              <Tooltip.Content>{variant}</Tooltip.Content>
            </Tooltip>
          ))}
        </div>
      </Card.Content>
    </Card>
  )
}
