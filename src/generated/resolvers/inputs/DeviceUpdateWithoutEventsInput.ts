import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertUpdateManyWithoutDeviceNestedInput } from "../inputs/AlertUpdateManyWithoutDeviceNestedInput";
import { DeviceTypeUpdateOneWithoutDevicesNestedInput } from "../inputs/DeviceTypeUpdateOneWithoutDevicesNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SmartPoleUpdateOneWithoutDevicesNestedInput } from "../inputs/SmartPoleUpdateOneWithoutDevicesNestedInput";

@TypeGraphQL.InputType("DeviceUpdateWithoutEventsInput", {
  isAbstract: true
})
export class DeviceUpdateWithoutEventsInput {
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

  @TypeGraphQL.Field(_type => SmartPoleUpdateOneWithoutDevicesNestedInput, {
    nullable: true
  })
  smartPole?: SmartPoleUpdateOneWithoutDevicesNestedInput | undefined;
}