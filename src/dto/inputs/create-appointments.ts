import { Field, InputType } from "type-graphql";
import { CustomerModel } from "../models/customer-model";
import { CustomerInput } from "./customer-input";

/**
 *
 * Inputs sao parametros que devem ser passados para uma mutation
 *
 */

@InputType()
export class CreateAppointmentInput {
  @Field(() => CustomerInput)
  customerId: CustomerInput;

  @Field(() => Date)
  startsAt: Date;

  @Field(() => Date)
  endsAt: Date;
}
