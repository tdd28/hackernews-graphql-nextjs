import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'graphql/typeDefs.ts',
  documents: ['documents/**/*.ts'],
  generates: {
    './graphql/types/resolvers.ts': {
      config: {
        useIndexSignature: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './gql/': {
      preset: 'client'
    },
    './gql/introspection.json': {
       plugins: ['fragment-matcher']
    }
  },
};
export default config;