import { Field, ObjectType } from "type-graphql";

/**
 *
 * Essa classe é um tipo de entidade, mas que diz respeito ao tipo de informação a ser retornada no front-end
 * e não uma entidade a nivel de banco
 *
 */

@ObjectType()
export class Appointment {
  @Field(() => Date)
  startsAt: Date;

  @Field(() => Date)
  endsAt: Date;
}
