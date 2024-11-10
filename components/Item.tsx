import { CORE_SROTY_FIELDS } from "@/documents/fragments/story"
import { FragmentType, useFragment } from "@/gql"

interface StoryProps {
  item: FragmentType<typeof CORE_SROTY_FIELDS>
}

export function Story({ item }: StoryProps) {
  const frag = useFragment(CORE_SROTY_FIELDS, item)

  return (
    <li>
      {frag.title}
    </li>
  )
}

const Item = {
  Story
}

export default Item