import { docs } from "@/.velite"

export const getPageBySlug = (slug: string[]) => docs.find((doc) => doc.slug === `docs/${slug.join("/")}`)
