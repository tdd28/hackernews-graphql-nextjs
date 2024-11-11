import { Context } from "./context";
import { ItemType, Resolvers } from "./types/resolvers";

const resolvers: Resolvers<Context> = {
  Query: {
    items: async (_, { type, first, after }, { datasources }) => {
      const allIds = await datasources.hackerNewsAPI.getItems(type)

      const start = after ? allIds.indexOf(after) + 1 : 0
      const end = start + (first || 10)

      const chunkIds = allIds.slice(start, end)
      const items = await Promise.all(chunkIds.map(datasources.hackerNewsAPI.getItem))

      const actualEndIndex = start + items.length - 1

      return {
        edges: items.map(item => ({
          node: item,
          cursor: item.id
        })),
        pageInfo: {
          hasNextPage: !!allIds[actualEndIndex + 1],
          endCursor: allIds[actualEndIndex]
        }
      }
    }
  },
  Item: {
    __resolveType(item) {
      switch (item.type) {
        case ItemType.Story:
          return 'Story'
        case ItemType.Job:
          return 'Job'
        default:
          throw `unknown item type: ${item.type}`
      }
    }
  }
};

export default resolvers