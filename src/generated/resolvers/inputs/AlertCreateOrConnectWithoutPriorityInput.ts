import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateWithoutPriorityInput } from "../inputs/AlertCreateWithoutPriorityInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertCreateOrConnectWithoutPriorityInput", {
  isAbstract: true
})
export class AlertCreateOrConnectWithoutPriorityInput {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlertCreateWithoutPriorityInput, {
    nullable: false
  })
  create!: AlertCreateWithoutPriorityInput;
}
