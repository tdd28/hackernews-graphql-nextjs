import { CORE_JOB_FIELDS } from "@/documents/fragments/job"
import { CORE_STORY_FIELDS } from "@/documents/fragments/story"
import { FragmentType, useFragment } from "@/gql"
import { Item as ItemType } from "@/gql/graphql"
import Link from "next/link"

interface StoryProps {
  item: ItemType & FragmentType<typeof CORE_STORY_FIELDS>
}

export function Story({ item }: StoryProps) {
  const frag = useFragment(CORE_STORY_FIELDS, item)

  return (
    <li>
      <Link href={`/item/${item.id}`}>
        {frag.title}
      </Link>
    </li>
  )
}

interface JobProps {
  item: FragmentType<typeof CORE_JOB_FIELDS>
}

export function Job({ item }: JobProps) {
  const frag = useFragment(CORE_JOB_FIELDS, item)

  return (
    <li>
      {frag.title}
    </li>
  )
}

const Item = {
  Story,
  Job
}

export default Item