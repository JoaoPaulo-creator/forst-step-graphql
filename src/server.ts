import { ApolloServer } from "apollo-server";
import path from "node:path";

import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppointMentsResolver as AppointmentsResolver } from "./resolvers/appointments-resolver";
import { CustomerResolver } from "./resolvers/customer-resolver";
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver, CustomerResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema, context: { prisma } });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at: ${url}`);
}

main();
