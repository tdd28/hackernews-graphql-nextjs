/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment CoreJobFields on Job {\n    title\n  }  \n": types.CoreJobFieldsFragmentDoc,
    "\n  fragment CoreStoryFields on Story {\n    title\n  }  \n": types.CoreStoryFieldsFragmentDoc,
    "\n  query GetItem($id: Int!) {\n    item(id: $id) {\n      id\n      type\n      by\n      ... on Story {\n        ...CoreStoryFields\n      }\n      ... on Job {\n        ...CoreJobFields\n      }\n    }\n  }\n": types.GetItemDocument,
    "\n  query GetItems($type: ListType!, $first: Int, $after: Int) {\n    items(type: $type, first: $first, after: $after) {\n      edges {\n        node {\n          id\n          type\n          by\n          ... on Story {\n            ...CoreStoryFields\n          }\n          ... on Job {\n            ...CoreJobFields\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n": types.GetItemsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CoreJobFields on Job {\n    title\n  }  \n"): (typeof documents)["\n  fragment CoreJobFields on Job {\n    title\n  }  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CoreStoryFields on Story {\n    title\n  }  \n"): (typeof documents)["\n  fragment CoreStoryFields on Story {\n    title\n  }  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetItem($id: Int!) {\n    item(id: $id) {\n      id\n      type\n      by\n      ... on Story {\n        ...CoreStoryFields\n      }\n      ... on Job {\n        ...CoreJobFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetItem($id: Int!) {\n    item(id: $id) {\n      id\n      type\n      by\n      ... on Story {\n        ...CoreStoryFields\n      }\n      ... on Job {\n        ...CoreJobFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetItems($type: ListType!, $first: Int, $after: Int) {\n    items(type: $type, first: $first, after: $after) {\n      edges {\n        node {\n          id\n          type\n          by\n          ... on Story {\n            ...CoreStoryFields\n          }\n          ... on Job {\n            ...CoreJobFields\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetItems($type: ListType!, $first: Int, $after: Int) {\n    items(type: $type, first: $first, after: $after) {\n      edges {\n        node {\n          id\n          type\n          by\n          ... on Story {\n            ...CoreStoryFields\n          }\n          ... on Job {\n            ...CoreJobFields\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;