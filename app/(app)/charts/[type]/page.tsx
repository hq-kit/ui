import { Demo } from "@/components/mdx/demo"
import { previews } from "@/components/samples/generated/previews"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

interface ChartPageProps {
  params: Promise<{
    type: string
  }>
}

export default async function ChartPage({ params }: ChartPageProps) {
  const { type } = await params
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
