import { Item } from "./types/resolvers"

type ConnectionResolver<T> = (id: number) => Promise<T>
interface ConnectionArgs {
  first?: number | null
  after?: number | null
}

export async function connection<T extends Item>(ids: number[], resolver: ConnectionResolver<T>, { first, after }: ConnectionArgs = {}) {
  const start = after ? ids.indexOf(after) + 1 : 0
  const end = start + (first || 10)

  const chunkIds = ids.slice(start, end)
  const items = await Promise.all(chunkIds.map(resolver))

  const actualEndIndex = start + items.length - 1

  return {
    edges: items.map(item => ({
      node: item,
      cursor: item.id
    })),
    pageInfo: {
      hasNextPage: !!ids[actualEndIndex + 1],
      endCursor: ids[actualEndIndex]
    }
  }
}