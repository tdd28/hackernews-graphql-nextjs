import List from "@/components/List";
import { ListType } from "@/gql/graphql";

export default function Home() {
  return <List type={ListType.Topstories} />
}
