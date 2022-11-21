import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertScalarWhereInput } from "../inputs/AlertScalarWhereInput";
import { AlertUpdateManyMutationInput } from "../inputs/AlertUpdateManyMutationInput";

@TypeGraphQL.InputType("AlertUpdateManyWithWhereWithoutPriorityInput", {
  isAbstract: true
})
export class AlertUpdateManyWithWhereWithoutPriorityInput {
  @TypeGraphQL.Field(_type => AlertScalarWhereInput, {
    nullable: false
  })
  where!: AlertScalarWhereInput;

  @TypeGraphQL.Field(_type => AlertUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlertUpdateManyMutationInput;
}
