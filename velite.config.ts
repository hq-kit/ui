import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { defineConfig, s } from "velite"

const rehypePrettyCodeOptions = {
  keepBackground: true,
  theme: { light: "catppuccin-latte", dark: "catppuccin-mocha" }
}

export default defineConfig({
  collections: {
    docs: {
      name: "Docs",
      pattern: "docs/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          description: s.string(),
          content: s.mdx(),
          references: s.array(s.string()).optional(),
          status: s.enum(["stable", "alpha", "beta", "new"]).optional().default("stable"),
          published: s.boolean().default(true),
          slug: s.path(),
          toc: s.toc(),
          order: s.number().default(0),
          raw: s.raw()
        })
        // more additional fields (computed fields)
        .transform((data) => ({ ...data, permalink: `/${data.slug}` }))
    }
  },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions], rehypeAutolinkHeadings, rehypeSlug]
  }
})
