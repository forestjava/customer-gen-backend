import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeUpdateOneWithoutDevicesNestedInput } from "../inputs/DeviceTypeUpdateOneWithoutDevicesNestedInput";
import { EventUpdateManyWithoutDeviceNestedInput } from "../inputs/EventUpdateManyWithoutDeviceNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SmartPoleUpdateOneWithoutDevicesNestedInput } from "../inputs/SmartPoleUpdateOneWithoutDevicesNestedInput";

@TypeGraphQL.InputType("DeviceUpdateWithoutAlertsInput", {
  isAbstract: true
})
export class DeviceUpdateWithoutAlertsInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  serial?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  uuid?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeUpdateOneWithoutDevicesNestedInput, {
    nullable: true
  })
  type?: DeviceTypeUpdateOneWithoutDevicesNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  connectParamIndex?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateManyWithoutDeviceNestedInput, {
    nullable: true
  })
  events?: EventUpdateManyWithoutDeviceNestedInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleUpdateOneWithoutDevicesNestedInput, {
    nullable: true
  })
  smartPole?: SmartPoleUpdateOneWithoutDevicesNestedInput | undefined;
}
