import type { PropsWithChildren } from "react"
import { ChartNavs } from "@/components/layouts/chart-navs"
import { Hero, HeroTitle, MainContent } from "@/components/layouts/hero"
import { CLI } from "@/components/mdx/cli"

export default function ChartLayout(props: PropsWithChildren) {
  return (
    <>
      <Hero>
        <header>
          <HeroTitle>Charts</HeroTitle>
          <div className="block max-w-2xl text-base text-muted-foreground leading-relaxed lg:text-xl">
            A collection of ready-to-use chart components built with{" "}
            <a className="font-medium text-foreground" href="https://recharts.org/" rel="noopener" target="_blank">
              Recharts
            </a>
            . From basic charts to rich data displays, copy and paste into your apps.
          </div>
        </header>
        <div className="max-w-3xl">
          <CLI command="add" items={["charts"]} />
        </div>
      </Hero>
      <MainContent className="py-6">
        <ChartNavs />
        {props.children}
      </MainContent>
    </>
  )
}
