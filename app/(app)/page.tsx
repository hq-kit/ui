import { Hero, HeroDescription, HeroHeader, HeroTitle } from "@/components/layouts/hero"
import { CLI } from "@/components/mdx/cli"
import Sink from "@/components/sink"
import SinkNavs from "@/components/sink/sink-navs"

export default async function Page({ searchParams }: { searchParams: Promise<{ components: string }> }) {
  const { components } = await searchParams
  return (
    <>
      <Hero>
        <HeroHeader>
          <HeroTitle>HQ KIT - UI Components</HeroTitle>
          <HeroDescription>
            This UI Design is basically built on top of{" "}
            <strong className="font-medium text-foreground">React Aria Components</strong>, all about keeping the web
            accessible. Easy to customize and just copy & paste into your React projects.
          </HeroDescription>
        </HeroHeader>
        <div className="max-w-3xl">
          <CLI command="init" />
        </div>
      </Hero>
      <div className="mx-auto w-full max-w-7xl 3xl:[--gap:--spacing(12)] [--gap:--spacing(4)] lg:max-w-(--breakpoint-xl) xl:border-x 2xl:max-w-(--breakpoint-2xl) md:[--gap:--spacing(10)] style-lyra:md:[--gap:--spacing(6)] style-mira:md:[--gap:--spacing(6)]">
        <SinkNavs />
        <div className="scroll-fade scrollbar-fade contain-[paint] m-0 h-svh overflow-auto p-(--gap)">
          <Sink component={components} />
        </div>
      </div>
    </>
  )
}
