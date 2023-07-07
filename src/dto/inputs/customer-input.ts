import { Field, InputType } from "type-graphql";

/**
 *
 * Inputs sao parametros que devem ser passados para uma mutation.
 * Exemplo: Para criar um customer, sera necessario passar um payload, e essas informacoes do payload
 * serao os campos informados nessa classe
 *
 */

@InputType()
export class CustomerInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
