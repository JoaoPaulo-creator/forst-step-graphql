import { ApolloServer } from "apollo-server";
import path from "node:path";

import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppointMentsResolver } from "./resolvers/appointments-resolver";
import { CustomerResolver } from "./resolvers/customer-resolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [AppointMentsResolver, CustomerResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at: ${url}`);
}

main();
