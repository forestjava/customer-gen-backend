import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateWithoutAlertsInput } from "../inputs/PriorityCreateWithoutAlertsInput";
import { PriorityUpdateWithoutAlertsInput } from "../inputs/PriorityUpdateWithoutAlertsInput";

@TypeGraphQL.InputType("PriorityUpsertWithoutAlertsInput", {
  isAbstract: true
})
export class PriorityUpsertWithoutAlertsInput {
  @TypeGraphQL.Field(_type => PriorityUpdateWithoutAlertsInput, {
    nullable: false
  })
  update!: PriorityUpdateWithoutAlertsInput;

  @TypeGraphQL.Field(_type => PriorityCreateWithoutAlertsInput, {
    nullable: false
  })
  create!: PriorityCreateWithoutAlertsInput;
}
