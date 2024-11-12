import List from "@/components/List"
import { ListType } from "@/gql/graphql"

const listTypeParams = {
  newest: ListType.Newstories,
  ask: ListType.Askstories,
  show: ListType.Showstories,
  jobs: ListType.Jobstories,
}

export const dynamic = 'force-dynamic'
export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(listTypeParams).map(type => ({ type }))
}

interface Props {
  params: Promise<{ type: keyof typeof listTypeParams }>
}

export default async function ListPage({ params }: Props) {
  const { type } = await params

  return <List type={listTypeParams[type]} />
}