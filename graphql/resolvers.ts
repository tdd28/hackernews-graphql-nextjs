import { Context } from "./context";
import { Resolvers } from "./types/resolvers";

const resolvers: Resolvers<Context> = {
  Query: {
    hello: () => 'world',
  },
};

export default resolvers