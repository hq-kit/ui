import { source } from "./source"

const pages = source.getPages()

const pagesByUrl = new Map(pages.map((page) => [page.url, page]))

export function parseSearchItem(item: { id: string; content: string; type: string; url: string }) {
  const pageUrl = item.url.split("#")[0]
  const page = pagesByUrl.get(pageUrl)

  return {
    ...item,
    page: page
      ? {
          title: page.data.title,
          url: page.url
        }
      : undefined
  }
}
