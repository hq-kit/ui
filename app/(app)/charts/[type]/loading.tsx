import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="grid flex-1 gap-12 lg:gap-24">
      <div className="grid flex-1 scroll-mt-20 items-stretch gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        <Skeleton className="col-span-full h-115!" />
        {Array.from({ length: 9 }).map((_, i) => (
          <Skeleton className="h-115!" key={i} />
        ))}
      </div>
    </div>
  )
}
