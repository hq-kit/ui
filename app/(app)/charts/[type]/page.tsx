import { notFound } from "next/navigation"
import { Demo } from "@/components/mdx/demo"
import { previews } from "@/components/samples/generated/previews"
import { type ChartType, chartTypes } from "@/types/components"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

interface ChartPageProps {
  params: Promise<{
    type: string
  }>
}
export async function generateStaticParams() {
  return chartTypes.map((type) => ({
    type
  }))
}

export default async function ChartPage({ params }: ChartPageProps) {
  const { type } = await params
  if (!chartTypes.includes(type as ChartType)) {
    return notFound()
  }
  const chartList = Object.keys(previews).filter((key) => key.startsWith(`chart/${type}`))
  const fullWidthChart = chartList.filter((key) => key.includes("interactive"))
  return (
    <div className="grid flex-1 gap-12 lg:gap-24">
      <h2 className="sr-only">{type.charAt(0).toUpperCase() + type.slice(1)} Charts</h2>
      <div className="grid flex-1 scroll-mt-20 items-stretch gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        {fullWidthChart?.map((component) => (
          <Demo className="p-0!" component={component} containerClassName="mt-0 col-span-full" key={component} />
        ))}
        {chartList
          .filter((c) => !c.includes("interactive"))
          .map((component) => (
            <Demo className="p-0!" component={component} containerClassName="mt-0" key={component} />
          ))}
      </div>
    </div>
  )
}
