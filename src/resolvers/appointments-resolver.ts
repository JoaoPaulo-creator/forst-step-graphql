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

// Passando esse tipo de retorno, para que seja possivel utilizar o decorador @FieldResolver
@Resolver(() => Appointment)
export class AppointMentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg("data", () => CreateAppointmentInput) data: CreateAppointmentInput
  ) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  }

  @FieldResolver(() => CustomerModel)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);

    return {
      name: "Joao Paulo",
    };
  }
}
