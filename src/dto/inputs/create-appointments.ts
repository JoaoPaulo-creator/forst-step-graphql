import { Field, InputType } from "type-graphql";

/**
 *
 * Inputs sao parametros que devem ser passados para uma mutation.
 * Exemplo: Para criar um appointment, sera necessario passar um payload, e essas informacoes do payload
 * serao os campos informados nessa classe
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
