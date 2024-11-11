import gql from "graphql-tag";

export default gql`
  type Query {
    items(type: ListType! first: Int after: Int): ItemConnection!
  }

  type ItemConnection {
    edges: [ItemEdge!]!
    pageInfo: PageInfo!
  }

  type ItemEdge {
    node: Item!
    cursor: Int!
  }

  type Story implements Item {
    id: Int!
    type: ItemType!
    by: String!
    time: Int!
    descendants: Int!
    kids: [Int!]!
    score: Int!
    text: String
    title: String!
    url: String
  }
  
  type Job implements Item {
    id: Int!
    type: ItemType!
    by: String!
    time: Int!
    score: Int!
    text: String!
    title: String!
    url: String!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: Int!
  }

  interface Item {
    id: Int!
    type: ItemType!
    by: String!
    time: Int!
  }

  enum ListType {
    topstories
    newstories
    askstories
    showstories
    jobstories
  }

  enum ItemType {
    job
    story
    comment
    poll
    pollopt
  }  
`;