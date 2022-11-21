import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceUpdateOneWithoutAlertsNestedInput } from "../inputs/DeviceUpdateOneWithoutAlertsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriorityUpdateOneWithoutAlertsNestedInput } from "../inputs/PriorityUpdateOneWithoutAlertsNestedInput";

@TypeGraphQL.InputType("AlertUpdateInput", {
  isAbstract: true
})
export class AlertUpdateInput {
  @TypeGraphQL.Field(_type => PriorityUpdateOneWithoutAlertsNestedInput, {
    nullable: true
  })
  priority?: PriorityUpdateOneWithoutAlertsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DeviceUpdateOneWithoutAlertsNestedInput, {
    nullable: true
  })
  device?: DeviceUpdateOneWithoutAlertsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;
}
