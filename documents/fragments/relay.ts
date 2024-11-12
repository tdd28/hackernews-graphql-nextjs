import { graphql } from "@/gql";

export const PAGE_INFO_FIELDS = graphql(/* GraphQL */ `
  fragment PageInfoFields on PageInfo {
    hasNextPage
    endCursor
  }  
`)