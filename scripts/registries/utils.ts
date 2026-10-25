function getUIComponents(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  const components = content.match(regex)

  return Array.from(new Set(components?.filter((c) => c.includes("/ui")).map((c) => c.split("/").pop())))
}

function getChildComponents(content: string) {
  const regex = /(?<=from\s+['"]\.\/)([^'"]+)/g
  const childrens = content.match(regex)
  return Array.from(new Set(childrens))
}

function getDeps(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  const excludes = [
    "react",
    "class-variance-authority",
    "@/hooks/use-mobile",
    "@internationalized/date",
    "@react-aria/collections",
    "@react-aria/i18n",
    "@react-types/overlays",
    "next/navigation",
    "next/link"
  ]

  const replacement = [
    { from: "motion/react", to: "motion" },
    { from: "recharts", to: "recharts" },
    { from: "react-aria", to: "react-aria-components" },
    { from: "react-aria-components", to: "react-aria-components" }
  ]

  const deps = content
    .match(regex)
    ?.filter((dep) => !excludes.includes(dep) && !dep.includes("./") && !dep.includes("@/components/"))
    .map((dep) => {
      for (const { from, to } of replacement) {
        if (dep.startsWith(from)) {
          return to
        }
      }

      return dep
    })

  return Array.from(new Set(deps))
}

function checkUtils(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  return content.match(regex)?.includes("cn")
}

function checkHooks(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  return content.match(regex)?.includes("@/hooks/use-mobile")
}

function cleanRegistry(content: string) {
  return content.replaceAll(',"registryDependencies":[]', "").replaceAll(',"dependencies":[]', "")
}

export { checkHooks, checkUtils, cleanRegistry, getChildComponents, getDeps, getUIComponents }
