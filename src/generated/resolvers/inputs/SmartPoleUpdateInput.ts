import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceUpdateManyWithoutSmartPoleNestedInput } from "../inputs/DeviceUpdateManyWithoutSmartPoleNestedInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ZoneUpdateOneWithoutSmartPolesNestedInput } from "../inputs/ZoneUpdateOneWithoutSmartPolesNestedInput";

@TypeGraphQL.InputType("SmartPoleUpdateInput", {
  isAbstract: true
})
export class SmartPoleUpdateInput {
  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  connectLocationId?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  connectDeviceId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  serial?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  latitude?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  longitude?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ZoneUpdateOneWithoutSmartPolesNestedInput, {
    nullable: true
  })
  zone?: ZoneUpdateOneWithoutSmartPolesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DeviceUpdateManyWithoutSmartPoleNestedInput, {
    nullable: true
  })
  devices?: DeviceUpdateManyWithoutSmartPoleNestedInput | undefined;
}
