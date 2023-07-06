import { Field, ObjectType } from "type-graphql";
import { CustomerModel } from "./customer-model";

/**
 *
 * Essa classe é um tipo de entidade, mas que diz respeito ao tipo de informação a ser retornada no front-end
 * e não uma entidade a nivel de banco
 *
 */

@ObjectType()
export class Appointment {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => CustomerModel)
  customer: CustomerModel;
}
