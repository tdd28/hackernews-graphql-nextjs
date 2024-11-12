import List from "@/components/List";
import { ListType } from "@/gql/graphql";

export const dynamic = 'force-dynamic'

export default function Home() {
  return <List type={ListType.Topstories} />
}
