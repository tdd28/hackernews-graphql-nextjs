"use client"

import { GET_ITEMS } from "@/documents/queries/items"
import { ItemType, ListType } from "@/gql/graphql"
import { useSuspenseQuery } from "@apollo/client"
import Item from "./Item"

interface ItemsProps {
  type: ListType
}

export default function Items({ type }: ItemsProps) {
 const { data, fetchMore } = useSuspenseQuery(GET_ITEMS, { variables: { type } })

  return (
    <div>
      <ol className="list-decimal list-inside">
        {data.items.edges.map(({ node }) => {
          switch (node.type) {
            case ItemType.Story:
              return <Item.Story key={node.id} item={node} />
            default:
              return null
          }
        })}
      </ol>
      {data.items.pageInfo.hasNextPage && (
        <button 
          onClick={() => fetchMore({
            variables: {
              after: data.items.pageInfo.endCursor
            }
          })}
        >
          More
        </button>
      )}
    </div>
  ) 
}