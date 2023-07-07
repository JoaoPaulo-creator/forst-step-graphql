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
    return prisma.appointment.findMany({
      include: {
        customer: true,
      },
    });
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg("data", () => CreateAppointmentInput) data: CreateAppointmentInput
  ) {
    const appointment = prisma.appointment.create({
      data: {
        title: data.title,
        description: data.description,
        customer: {
          connect: {
            id: data.customerId,
          },
        },
      },
      include: {
        customer: true,
      },
    });

    return appointment;
  }

  @Mutation(() => Appointment)
  async cancelAppointment(@Arg("id", () => String) appointmentId: string) {
    const appointment = prisma.appointment.findUniqueOrThrow({
      where: { id: appointmentId },
    });

    if (appointment) {
      return prisma.appointment.delete({ where: { id: appointmentId } });
    }

    throw new Error("Appointment not found!");
  }

  @FieldResolver(() => CustomerModel)
  async customer(@Root() appointment: Appointment) {
    return prisma.appointment
      .findUnique({
        where: {
          id: appointment.id,
        },
      })
      .customer();
  }
}
