"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const Preview1 = dynamic(() => import("./preview/index"), { ssr: false })
const Preview2 = dynamic(() => import("./preview-02/index"), { ssr: false })

export default function Sink({ component }: { component: string }) {
  return (
    <Suspense fallback={<Skeleton className="min-h-svh w-full" />}>
      {(() => {
        switch (component) {
          case "preview-1":
            return <Preview1 />
          case "preview-2":
            return <Preview2 />
          default:
            return <Preview1 />
        }
      })()}
    </Suspense>
  )
}
