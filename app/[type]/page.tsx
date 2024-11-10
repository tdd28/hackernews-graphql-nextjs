import Items from "@/components/Items"
import { ListType } from "@/gql/graphql"

const listTypeParams = {
  new: ListType.Newstories,
  ask: ListType.Askstories
}

export const dynamic = 'force-dynamic'
export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(listTypeParams).map(type => ({ type }))
}

interface ListProps {
  params: Promise<{ type: keyof typeof listTypeParams }>
}

export default async function List({ params }: ListProps) {
  const { type } = await params 
  
  return <Items type={listTypeParams[type]} />
}