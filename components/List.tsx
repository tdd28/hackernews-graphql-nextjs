"use client"

import { GET_ITEMS } from "@/documents/queries/items"
import { Item, ListType } from "@/gql/graphql"
import { useSuspenseQuery } from "@apollo/client"
import { FragmentType, useFragment } from "@/gql"
import { PAGE_INFO_FIELDS } from "@/documents/fragments/relay"
import { CORE_STORY_FIELDS } from "@/documents/fragments/story"
import Link from "next/link"
import { CORE_JOB_FIELDS } from "@/documents/fragments/job"
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core"

interface ListProps {
  type: ListType
}

export default function List({ type }: ListProps) {
  const { data, fetchMore } = useSuspenseQuery(GET_ITEMS, { variables: { type } })
  const pageInfo = useFragment(PAGE_INFO_FIELDS, data.items.pageInfo)

  return (
    <div>
      <ol className="list-decimal list-inside">
        {data.items.edges.map(({ node }) => {
          switch (node.__typename) {
            case 'Story':
              return <Story key={node.id} item={node} />
            case 'Job':
              return <Job key={node.id} item={node} />
            default:
              return null
          }
        })}
      </ol>
      {pageInfo.hasNextPage && (
        <button
          onClick={() => fetchMore({
            variables: {
              after: pageInfo.endCursor
            }
          })}
        >
          More
        </button>
      )}
    </div>
  )
}

interface ItemProps<Document extends DocumentTypeDecoration<unknown, unknown>> {
  item: Item & FragmentType<Document>
}

export function Story({ item }: ItemProps<typeof CORE_STORY_FIELDS>) {
  const frag = useFragment(CORE_STORY_FIELDS, item)

  return (
    <li>
      <Link href={`/item/${item.id}`}>
        {frag.title}
      </Link>
    </li>
  )
}

export function Job({ item }: ItemProps<typeof CORE_JOB_FIELDS>) {
  const frag = useFragment(CORE_JOB_FIELDS, item)

  return (
    <li>
      {frag.title}
    </li>
  )
}