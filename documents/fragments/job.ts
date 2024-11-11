import { graphql } from "@/gql";

export const CORE_JOB_FIELDS = graphql(/* GraphQL */ `
  fragment CoreJobFields on Job {
    title
  }  
`)