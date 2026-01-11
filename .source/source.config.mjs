// source.config.ts
import { transformerMetaHighlight } from "@shikijs/transformers";
import { remarkHeading, remarkImage } from "fumadocs-core/mdx-plugins";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      references: z.array(z.string()).optional(),
      published: z.boolean().default(true)
    }),
    async: false
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha"
      },
      langs: ["ts", "tsx", "json", "css", "bash"],
      defaultLanguage: "tsx",
      transformers: [
        transformerMetaHighlight(),
        {
          code(node) {
            const meta = this.options.meta || {};
            const rawMeta = meta.__raw || "";
            node.properties["data-line-numbers"] = rawMeta.includes("showLineNumbers");
          }
        }
      ]
    },
    remarkPlugins: [[remarkHeading, { generateToc: true }], remarkImage]
  }
});
export {
  source_config_default as default,
  docs
};
