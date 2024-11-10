import { Resolvers } from "./types/resolvers";

const resolvers: Resolvers = {
  Query: {
    hello: () => 'world',
  },
};

export default resolvers