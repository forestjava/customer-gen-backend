import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertUpdateManyWithoutDeviceNestedInput } from "../inputs/AlertUpdateManyWithoutDeviceNestedInput";
import { DeviceTypeUpdateOneWithoutDevicesNestedInput } from "../inputs/DeviceTypeUpdateOneWithoutDevicesNestedInput";
import { EventUpdateManyWithoutDeviceNestedInput } from "../inputs/EventUpdateManyWithoutDeviceNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DeviceUpdateWithoutSmartPoleInput", {
  isAbstract: true
})
export class DeviceUpdateWithoutSmartPoleInput {
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

  @TypeGraphQL.Field(_type => AlertUpdateManyWithoutDeviceNestedInput, {
    nullable: true
  })
  alerts?: AlertUpdateManyWithoutDeviceNestedInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateManyWithoutDeviceNestedInput, {
    nullable: true
  })
  events?: EventUpdateManyWithoutDeviceNestedInput | undefined;
}