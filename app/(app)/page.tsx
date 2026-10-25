import { CardsDemo } from "@/components/cards"
import { CLI } from "@/components/mdx/cli"

export default () => {
  return (
    <>
      <div className="container border-b pt-10 pb-6 xl:border-x">
        <div>
          <h1 className="mb-2 max-w-xl space-x-3 text-2xl whitespace-nowrap lg:mb-6 lg:text-5xl">
            <strong className="text-foreground font-black">HQ</strong>
            <span className="text-foreground/50">React UI</span>
          </h1>
          <p className="text-muted-foreground block max-w-2xl text-base leading-relaxed lg:text-xl">
            This UI Design is basically built on top of{" "}
            <strong className="text-foreground font-medium">React Aria Components</strong>, all about keeping the web
            accessible. Easy to customize and just copy & paste into your React projects.
          </p>
        </div>
        <div className="mt-2 max-w-3xl">
          <CLI command="init" />
        </div>
      </div>
      <div className="scroll-fade 3xl:[--gap:--spacing(12)] container w-full p-0! [--gap:--spacing(4)] md:[--gap:--spacing(10)] xl:border-x">
        <CardsDemo />
      </div>
    </>
  )
}
