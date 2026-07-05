"use client"

import {
  IconChartArcs,
  IconChartArea,
  IconChartBar,
  IconChartLine,
  IconChartPie,
  IconChartRadar,
  IconTooltip
} from "@tabler/icons-react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Tabs } from "@/components/ui/tabs"
import { titleCase } from "@/lib/modifiers"
import { type ChartType, chartTypes } from "@/types/components"

export function ChartNavs() {
  const pathname = usePathname()
  const router = useRouter()
  const [selectedKey, setSelectedKey] = useState(pathname.split("/").pop())
  const onChange = (v: any) => {
    setSelectedKey(v)
    router.push(`/charts/${v}`)
  }
  return (
    <Tabs className="mb-6" onSelectionChange={onChange} selectedKey={selectedKey}>
      <Tabs.List className="w-full" items={chartTypes.map((chart) => ({ id: chart, label: titleCase(chart) }))}>
        {(item) => (
          <Tabs.Trigger>
            {getChartIcon(item.id)}
            {item.label}
          </Tabs.Trigger>
        )}
      </Tabs.List>
    </Tabs>
  )
}

const getChartIcon = (chart: ChartType) => {
  switch (chart) {
    case "area":
      return <IconChartArea />
    case "bar":
      return <IconChartBar />
    case "pie":
      return <IconChartPie />
    case "line":
      return <IconChartLine />
    case "radar":
      return <IconChartRadar />
    case "radial":
      return <IconChartArcs />
    case "tooltip":
      return <IconTooltip />
  }
}
