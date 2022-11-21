import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateNestedOneWithoutAlertsInput } from "../inputs/DeviceCreateNestedOneWithoutAlertsInput";
import { PriorityCreateNestedOneWithoutAlertsInput } from "../inputs/PriorityCreateNestedOneWithoutAlertsInput";

@TypeGraphQL.InputType("AlertCreateInput", {
  isAbstract: true
})
export class AlertCreateInput {
  @TypeGraphQL.Field(_type => PriorityCreateNestedOneWithoutAlertsInput, {
    nullable: true
  })
  priority?: PriorityCreateNestedOneWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateNestedOneWithoutAlertsInput, {
    nullable: true
  })
  device?: DeviceCreateNestedOneWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;
}
