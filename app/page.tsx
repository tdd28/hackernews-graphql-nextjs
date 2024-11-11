import Items from "@/components/Items";
import { ListType } from "@/gql/graphql";

export default function Home() {
  return <Items type={ListType.Topstories} />
}
