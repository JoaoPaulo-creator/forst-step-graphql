import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { CreateAppointmentInput } from "../dto/inputs/create-appointments";
import { Appointment } from "../dto/models/appointment-model";
import { CustomerModel } from "../dto/models/customer-model";
import { prisma } from "../lib/prisma-service";

// Passando esse tipo de retorno, para que seja possivel utilizar o decorador @FieldResolver
@Resolver(() => Appointment)
export class AppointMentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return prisma.appointments.findMany({
      include: {
        customer: true,
      },
    });
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg("data", () => CreateAppointmentInput) data: CreateAppointmentInput
  ) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    const teste = { data, ...appointment };

    return teste;
  }

  @FieldResolver(() => CustomerModel)
  async customer(@Root() appointment: Appointment) {
    return prisma.appointments.findMany({
      include: {
        customer: true,
      },
    });
  }
}
