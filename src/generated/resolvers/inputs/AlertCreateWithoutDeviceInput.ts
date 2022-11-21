import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateNestedOneWithoutAlertsInput } from "../inputs/PriorityCreateNestedOneWithoutAlertsInput";

@TypeGraphQL.InputType("AlertCreateWithoutDeviceInput", {
  isAbstract: true
})
export class AlertCreateWithoutDeviceInput {
  @TypeGraphQL.Field(_type => PriorityCreateNestedOneWithoutAlertsInput, {
    nullable: true
  })
  priority?: PriorityCreateNestedOneWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;
}
