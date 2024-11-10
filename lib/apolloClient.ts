import { HttpLink } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";
import introspection from '@/gql/introspection.json'

const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL
const url = vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000'

export function makeClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${url}/api/graphql`
    }),
    cache: new InMemoryCache({
      possibleTypes: introspection.possibleTypes,
      typePolicies: {
        Query: {
          fields: {
            items: relayStylePagination(["type"])
          }
        }
      }
    })
  })
}