import { server, context } from "@/graphql";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const graphqlHandler = startServerAndCreateNextHandler(server, { context });

const handler = (req: Request) => graphqlHandler(req)

export { handler as GET, handler as POST }