import { server, context } from "@/graphql";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const handler = startServerAndCreateNextHandler(server, { context });

export { handler as GET, handler as POST };
