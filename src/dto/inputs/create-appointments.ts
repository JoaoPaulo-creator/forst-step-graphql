import { Field, InputType } from "type-graphql";

/**
 *
 * Inputs sao parametros que devem ser passados para uma mutation
 *
 */

@InputType()
export class CreateAppointmentInput {
  @Field(() => String)
  customerId: string;

  @Field(() => String)
  description?: string;

  @Field(() => String)
  title!: string;
}
