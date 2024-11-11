import { graphql } from '@/gql'

export const GET_ITEM = graphql(/* GraphQL */ `
  query GetItem($id: Int!) {
    item(id: $id) {
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
`)