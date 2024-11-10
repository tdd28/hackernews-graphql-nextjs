/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Item = {
  by: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  type: ItemType;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  edges: Array<ItemEdge>;
  pageInfo: PageInfo;
};

export type ItemEdge = {
  __typename?: 'ItemEdge';
  cursor: Scalars['Int']['output'];
  node: Item;
};

export enum ItemType {
  Comment = 'comment',
  Job = 'job',
  Poll = 'poll',
  Pollopt = 'pollopt',
  Story = 'story'
}

export enum ListType {
  Askstories = 'askstories',
  Jobstories = 'jobstories',
  Newstories = 'newstories',
  Showstories = 'showstories',
  Topstories = 'topstories'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  items: ItemConnection;
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  type: ListType;
};

export type Story = Item & {
  __typename?: 'Story';
  by: Scalars['String']['output'];
  descendants: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  kids: Array<Scalars['Int']['output']>;
  score: Scalars['Int']['output'];
  text?: Maybe<Scalars['String']['output']>;
  time: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: ItemType;
  url?: Maybe<Scalars['String']['output']>;
};

export type CoreStoryFieldsFragment = { __typename?: 'Story', title: string } & { ' $fragmentName'?: 'CoreStoryFieldsFragment' };

export type GetItemsQueryVariables = Exact<{
  type: ListType;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetItemsQuery = { __typename?: 'Query', items: { __typename?: 'ItemConnection', edges: Array<{ __typename?: 'ItemEdge', node: (
        { __typename?: 'Story', id: number, type: ItemType, by: string }
        & { ' $fragmentRefs'?: { 'CoreStoryFieldsFragment': CoreStoryFieldsFragment } }
      ) }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: number } } };

export const CoreStoryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreStoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<CoreStoryFieldsFragment, unknown>;
export const GetItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreStoryFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreStoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<GetItemsQuery, GetItemsQueryVariables>;