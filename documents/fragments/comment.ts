import { graphql } from "@/gql";

export const CORE_COMMENT_FIELDS = graphql(/* GraphQL */ `
  fragment CoreCommentFields on Comment {
    text
    deleted
  }  
`)