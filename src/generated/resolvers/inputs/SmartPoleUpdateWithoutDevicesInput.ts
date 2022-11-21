import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ZoneUpdateOneWithoutSmartPolesNestedInput } from "../inputs/ZoneUpdateOneWithoutSmartPolesNestedInput";

@TypeGraphQL.InputType("SmartPoleUpdateWithoutDevicesInput", {
  isAbstract: true
})
export class SmartPoleUpdateWithoutDevicesInput {
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
}
