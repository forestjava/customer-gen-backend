import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceUpdateOneWithoutEventsNestedInput } from "../inputs/DeviceUpdateOneWithoutEventsNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriorityUpdateOneWithoutEventsNestedInput } from "../inputs/PriorityUpdateOneWithoutEventsNestedInput";

@TypeGraphQL.InputType("EventUpdateInput", {
  isAbstract: true
})
export class EventUpdateInput {
  @TypeGraphQL.Field(_type => PriorityUpdateOneWithoutEventsNestedInput, {
    nullable: true
  })
  priority?: PriorityUpdateOneWithoutEventsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  moment?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceUpdateOneWithoutEventsNestedInput, {
    nullable: true
  })
  device?: DeviceUpdateOneWithoutEventsNestedInput | undefined;
}
