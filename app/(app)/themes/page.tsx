import { CLI } from "@/components/mdx/cli"

export default () => {
  return (
    <>
      <div className="container border-b pt-10 pb-6 xl:border-x">
        <div>
          <h1 className="mb-2 max-w-xl text-2xl whitespace-nowrap lg:mb-6 lg:text-5xl">
            <strong className="text-foreground font-black">The</strong>
            <span className="text-foreground/50 font-semibold">mes</span>
          </h1>
          <p className="text-muted-foreground block max-w-2xl text-base leading-relaxed lg:text-xl">
            This UI Design is basically built on top of{" "}
            <strong className="text-foreground font-medium">React Aria Components</strong>, all about keeping the web
            accessible. Easy to customize and just copy & paste into your React projects.
          </p>
        </div>
        <div className="mt-2 max-w-3xl">
          <CLI command="add" items={["default"]} />
        </div>
      </div>
      <div></div>
    </>
  )
}
