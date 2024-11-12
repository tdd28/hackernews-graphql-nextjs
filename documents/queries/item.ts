import { graphql } from '@/gql'

export const GET_ITEM = graphql(/* GraphQL */ `
  query GetItem($id: Int!) {
    item(id: $id) {
      id
      type
      by
      time
      ... on Story {
        ...CoreStoryFields
      }
      ... on Job {
        ...CoreJobFields
      }
    }
  }
`)

export const GET_ITEM_COMMENTS = graphql(/* GraphQL */ `
  query GetItemComments($id: Int!, $first: Int, $after: Int) {
    item(id: $id) {
      id
      ... on Story {
        comments(first: $first, after: $after) {
          edges {
            node {
              id
              ...CoreCommentFields
            }
          }
          pageInfo {
            ...PageInfoFields
          }
        }
      }
    }
  }
`)