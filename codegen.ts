import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'graphql/typeDefs.ts',
  generates: {
    './graphql/types/resolvers.ts': {
      config: {
        useIndexSignature: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;