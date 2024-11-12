import { CORE_COMMENT_FIELDS } from "@/documents/fragments/comment"
import { PAGE_INFO_FIELDS } from "@/documents/fragments/relay"
import { FragmentType, useFragment } from "@/gql"
import { GetItemCommentsQuery, Item } from "@/gql/graphql"
import { FetchMoreQueryOptions } from "@apollo/client"

interface CommentListProps {
  data: NonNullable<(GetItemCommentsQuery['item'] & { __typename: 'Story' })['comments']>
  fetchMore: (opts: FetchMoreQueryOptions<{ after: number }>) => void
}

export default function CommentList({ data, fetchMore }: CommentListProps) {
  const { hasNextPage, endCursor } = useFragment(PAGE_INFO_FIELDS, data.pageInfo)

  return (
    <div>
      <h2>Comments</h2>
      <ol className="list-decimal list-inside">
        {data.edges.map(({ node }) => <CommentItem item={node} key={node.id} />)}
      </ol>
      {hasNextPage && (
        <button onClick={() => fetchMore({ variables: { after: endCursor } })}>More</button>
      )}
    </div>
  )
}

function CommentItem({ item }: {
  item: Pick<Item, 'id'> & FragmentType<typeof CORE_COMMENT_FIELDS>
}) {
  const { text } = useFragment(CORE_COMMENT_FIELDS, item)

  return (
    <li key={item.id}>
      {text}
    </li>
  )
}