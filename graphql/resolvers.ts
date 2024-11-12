import { ItemType } from "./types/resolvers";
import { connection } from "./utils";
import type { Context } from "./context";
import type { Comment, Resolvers } from "./types/resolvers";

const resolvers: Resolvers<Context> = {
  Query: {
    async items(_, { type, first, after }, { datasources }) {
      const ids = await datasources.hackerNewsAPI.getItems(type)
      return connection(ids, datasources.hackerNewsAPI.getItem, { first, after })
    },
    item(_, { id }, { datasources }) {
      return datasources.hackerNewsAPI.getItem(id)
    }
  },
  Story: {
    comments(parent, { first, after }, { datasources }) {
      if (!parent.kids) return null
      return connection(parent.kids, datasources.hackerNewsAPI.getItem<Comment>, { first, after })
    }
  },
  Item: {
    __resolveType(item) {
      switch (item.type) {
        case ItemType.Story:
          return 'Story'
        case ItemType.Job:
          return 'Job'
        case ItemType.Comment:
          return 'Comment'
        default:
          throw `unknown item type: ${item.type}`
      }
    }
  }
};

export default resolvers