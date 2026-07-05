import { Hero, HeroTitle, MainContent } from "@/components/layouts/hero"
import { CLI } from "@/components/mdx/cli"
import Sink from "@/components/sink"

export default function Page() {
  return (
    <>
      <Hero>
        <header>
          <HeroTitle>HQ KIT - UI Components</HeroTitle>
          <div className="block max-w-2xl text-base text-muted-foreground leading-relaxed lg:text-xl">
            This UI Design is basically built on top of{" "}
            <strong className="font-medium text-foreground">React Aria Components</strong>, all about keeping the web
            accessible. Easy to customize and just copy & paste into your React projects.
          </div>
        </header>
        <div className="max-w-3xl">
          <CLI command="init" />
        </div>
      </Hero>
      <MainContent>
        <Sink />
      </MainContent>
    </>
  )
}
