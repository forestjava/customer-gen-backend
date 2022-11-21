import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertScalarWhereInput } from "../inputs/AlertScalarWhereInput";
import { AlertUpdateManyMutationInput } from "../inputs/AlertUpdateManyMutationInput";

@TypeGraphQL.InputType("AlertUpdateManyWithWhereWithoutDeviceInput", {
  isAbstract: true
})
export class AlertUpdateManyWithWhereWithoutDeviceInput {
  @TypeGraphQL.Field(_type => AlertScalarWhereInput, {
    nullable: false
  })
  where!: AlertScalarWhereInput;

  @TypeGraphQL.Field(_type => AlertUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlertUpdateManyMutationInput;
}
