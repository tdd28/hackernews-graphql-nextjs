import { graphql } from '@/gql'

export const GET_ITEMS = graphql(/* GraphQL */ `
  query GetItems($type: ListType!, $first: Int, $after: Int) {
    items(type: $type, first: $first, after: $after) {
      edges {
        node {
          id
          type
          by
          ... on Story {
            ...CoreStoryFields
          }
          ... on Job {
            ...CoreJobFields
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`)