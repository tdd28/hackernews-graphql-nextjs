import { graphql } from "@/gql";

export const CORE_SROTY_FIELDS = graphql(/* GraphQL */ `
  fragment CoreStoryFields on Story {
    title
  }  
`)