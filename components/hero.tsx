import type { ReactNode } from "react"

const Hero = ({ children }: { children: ReactNode }) => (
  <div className="bg-background relative isolate overflow-hidden">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-10 -z-10 hidden transform-gpu overflow-hidden blur-3xl sm:-top-56 sm:block"
    >
      <div
        className="from-info to-primary relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75 dark:opacity-[0.17]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
    <svg
      aria-hidden="true"
      className="stroke-muted absolute inset-0 -z-10 hidden h-full w-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] sm:block"
    >
      <defs>
        <pattern
          height={200}
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          patternUnits="userSpaceOnUse"
          width={200}
          x="50%"
          y={-1}
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" height="100%" strokeWidth={0} width="100%" />
    </svg>
    <div className="container border-b pt-10 pb-6 lg:pb-6 xl:border-x">{children}</div>
  </div>
)

export default Hero
