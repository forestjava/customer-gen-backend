import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateWithoutAlertsInput } from "../inputs/PriorityCreateWithoutAlertsInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.InputType("PriorityCreateOrConnectWithoutAlertsInput", {
  isAbstract: true
})
export class PriorityCreateOrConnectWithoutAlertsInput {
  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: false
  })
  where!: PriorityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PriorityCreateWithoutAlertsInput, {
    nullable: false
  })
  create!: PriorityCreateWithoutAlertsInput;
}
