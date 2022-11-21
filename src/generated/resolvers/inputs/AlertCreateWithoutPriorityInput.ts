import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateNestedOneWithoutAlertsInput } from "../inputs/DeviceCreateNestedOneWithoutAlertsInput";

@TypeGraphQL.InputType("AlertCreateWithoutPriorityInput", {
  isAbstract: true
})
export class AlertCreateWithoutPriorityInput {
  @TypeGraphQL.Field(_type => DeviceCreateNestedOneWithoutAlertsInput, {
    nullable: true
  })
  device?: DeviceCreateNestedOneWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;
}
