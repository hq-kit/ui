import type { ReactNode } from "react"
import Aside from "@/components/layouts/aside"
import { Toaster } from "@/components/ui/toast"

export default ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <div className="relative mx-auto flex w-full flex-auto lg:max-w-(--breakpoint-2xl) xl:border-x">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <Aside />
        </div>
        <div className="w-full min-w-0">{children}</div>
      </div>
    </>
  )
}
