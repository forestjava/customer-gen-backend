import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateWithoutPriorityInput } from "../inputs/AlertCreateWithoutPriorityInput";
import { AlertUpdateWithoutPriorityInput } from "../inputs/AlertUpdateWithoutPriorityInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertUpsertWithWhereUniqueWithoutPriorityInput", {
  isAbstract: true
})
export class AlertUpsertWithWhereUniqueWithoutPriorityInput {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlertUpdateWithoutPriorityInput, {
    nullable: false
  })
  update!: AlertUpdateWithoutPriorityInput;

  @TypeGraphQL.Field(_type => AlertCreateWithoutPriorityInput, {
    nullable: false
  })
  create!: AlertCreateWithoutPriorityInput;
}
