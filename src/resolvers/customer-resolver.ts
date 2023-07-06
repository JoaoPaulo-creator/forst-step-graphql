import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { CustomerModel } from "../dto/models/customer-model";
import { CustomerInput } from "../dto/inputs/customer-input";
import { Context, prisma } from "../lib/prisma-service";
import { PrismaClient } from "@prisma/client";

@Resolver()
export class CustomerResolver {
  @Mutation(() => CustomerModel)
  async createCustomer(
    @Arg("data", () => CustomerInput) dataCustomer: CustomerInput
  ) {
    return prisma.customer.create({
      data: {
        email: dataCustomer.email,
        name: dataCustomer.name,
      },
    });
  }

  @Query(() => [CustomerModel])
  async findCustomer() {
    return prisma.customer.findMany({ include: { appointments: true } });
  }
}
