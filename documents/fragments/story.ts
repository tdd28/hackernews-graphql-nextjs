import { graphql } from "@/gql";

export const CORE_STORY_FIELDS = graphql(/* GraphQL */ `
  fragment CoreStoryFields on Story {
    title
  }  
`)