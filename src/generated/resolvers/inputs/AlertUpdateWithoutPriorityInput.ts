import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceUpdateOneWithoutAlertsNestedInput } from "../inputs/DeviceUpdateOneWithoutAlertsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AlertUpdateWithoutPriorityInput", {
  isAbstract: true
})
export class AlertUpdateWithoutPriorityInput {
  @TypeGraphQL.Field(_type => DeviceUpdateOneWithoutAlertsNestedInput, {
    nullable: true
  })
  device?: DeviceUpdateOneWithoutAlertsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;
}
