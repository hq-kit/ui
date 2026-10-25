export default function Loading() {
  return (
    <div className="flex w-full items-start">
      {/* Center */}
      <div className="w-full min-w-0 py-8 sm:pt-10 sm:pb-24 xl:border-x">
        <div className="mx-auto sm:px-6 xl:max-w-3xl">
          {/* Header (Title & Action Buttons) */}
          <div className="mb-3 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-center">
            {/* Title Skeleton */}
            <div className="h-9 w-48 rounded-md bg-muted" />

            {/* Buttons Skeleton */}
            <div className="flex items-center gap-x-1.5">
              <div className="h-9 w-24 rounded-md bg-muted" />
              <div className="h-9 w-28 rounded-md bg-muted" />
            </div>
          </div>

          {/* Content / MDX Body Skeleton */}
          <div className="space-y-6">
            {/* Subheading / Section */}
            <div className="space-y-3">
              <div className="h-7 w-36 rounded-md bg-muted" />
              <div className="h-4 w-full rounded-md bg-muted" />
              <div className="h-4 w-3/4 rounded-md bg-muted" />
            </div>

            {/* Code Block / Component Box Skeleton */}
            <div className="h-40 w-full rounded-lg border border-border/50 bg-muted/60" />

            {/* Paragraph Text Skeleton */}
            <div className="space-y-2 pt-4">
              <div className="h-4 w-full rounded-md bg-muted" />
              <div className="h-4 w-5/6 rounded-md bg-muted" />
            </div>

            {/* Another Code / Preview Box Skeleton */}
            <div className="h-64 w-full rounded-lg border border-border/50 bg-muted/60" />
          </div>

          {/* Pager Skeleton */}
          <div className="mt-12 flex justify-between border-border border-t pt-6">
            <div className="h-10 w-28 rounded-md bg-muted" />
            <div className="h-10 w-28 rounded-md bg-muted" />
          </div>
        </div>
      </div>

      {/* Right side (Table of Contents / TOC Skeleton) */}
      <div className="sticky top-16 hidden flex-1 flex-col xl:flex">
        <aside className="w-80">
          <nav className="h-[calc(100vh-22rem)] overflow-y-auto p-6">
            <h2 className="mb-4 text-muted-foreground text-sm/6">On this page</h2>
            <div className="flex flex-col gap-y-2.5">
              <div className="h-4 w-32 rounded-md bg-muted" />
              <div className="ml-3 h-4 w-20 rounded-md bg-muted" />
              <div className="ml-3 h-4 w-24 rounded-md bg-muted" />
              <div className="h-4 w-28 rounded-md bg-muted" />
              <div className="h-4 w-22 rounded-md bg-muted" />
              <div className="h-4 w-30 rounded-md bg-muted" />
            </div>
          </nav>
        </aside>
      </div>
    </div>
  )
}
