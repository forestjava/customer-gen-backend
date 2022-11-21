import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceUpdateManyWithoutTypeNestedInput } from "../inputs/DeviceUpdateManyWithoutTypeNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DeviceTypeUpdateInput", {
  isAbstract: true
})
export class DeviceTypeUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  devices?: DeviceUpdateManyWithoutTypeNestedInput | undefined;
}
