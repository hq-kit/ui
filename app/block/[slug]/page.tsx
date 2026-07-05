import { previews } from "@/components/samples/generated/previews"
import View from "../view"

type Props = {
  params: Promise<{ slug: string }>
}

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  const blocks = Object.keys(previews).filter((p) => p.includes("page"))
  return blocks.map((b) => ({ slug: b.split("/")[0] }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  if (!slug || slug.length === 0) return <div className="p-4">Not found</div>

  return (
    <View component={`${slug}/layout`}>
      <View component={`${slug}/page`} />
    </View>
  )
}
