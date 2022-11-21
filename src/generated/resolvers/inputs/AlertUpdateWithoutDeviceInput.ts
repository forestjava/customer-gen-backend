import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriorityUpdateOneWithoutAlertsNestedInput } from "../inputs/PriorityUpdateOneWithoutAlertsNestedInput";

@TypeGraphQL.InputType("AlertUpdateWithoutDeviceInput", {
  isAbstract: true
})
export class AlertUpdateWithoutDeviceInput {
  @TypeGraphQL.Field(_type => PriorityUpdateOneWithoutAlertsNestedInput, {
    nullable: true
  })
  priority?: PriorityUpdateOneWithoutAlertsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;
}
