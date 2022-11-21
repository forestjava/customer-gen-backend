import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertUpdateWithoutPriorityInput } from "../inputs/AlertUpdateWithoutPriorityInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertUpdateWithWhereUniqueWithoutPriorityInput", {
  isAbstract: true
})
export class AlertUpdateWithWhereUniqueWithoutPriorityInput {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlertUpdateWithoutPriorityInput, {
    nullable: false
  })
  data!: AlertUpdateWithoutPriorityInput;
}
