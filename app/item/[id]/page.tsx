"use client"

import CommentList from "@/components/CommentList"
import { CORE_STORY_FIELDS } from "@/documents/fragments/story"
import { GET_ITEM, GET_ITEM_COMMENTS } from "@/documents/queries/item"
import { FragmentType, useFragment } from "@/gql"
import { Item } from "@/gql/graphql"
import { useSuspenseQuery } from "@apollo/client"
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core"
import { use } from "react"

interface Props {
  params: Promise<{ id: string }>
}
export default function ItemPage({ params }: Props) {
  const { id } = use(params)
  const { data: { item } } = useSuspenseQuery(GET_ITEM, { variables: { id: +id } })

  switch (item.__typename) {
    case 'Story':
      return <Story item={item} />
  }
}

interface ItemProps<Document extends DocumentTypeDecoration<unknown, unknown>> {
  item: Item & FragmentType<Document>
}
function Story({ item }: ItemProps<typeof CORE_STORY_FIELDS>) {
  const { title } = useFragment(CORE_STORY_FIELDS, item)
  const { data, fetchMore } = useSuspenseQuery(GET_ITEM_COMMENTS, { variables: { id: item.id } })

  return (
    <div>
      <h1>{title}</h1>
      {data.item.__typename === 'Story' && data.item.comments && (
        <CommentList
          data={data.item.comments}
          fetchMore={fetchMore}
        />
      )}

    </div>
  )
}