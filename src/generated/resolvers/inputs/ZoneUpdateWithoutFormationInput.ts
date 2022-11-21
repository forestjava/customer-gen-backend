import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SmartPoleUpdateManyWithoutZoneNestedInput } from "../inputs/SmartPoleUpdateManyWithoutZoneNestedInput";

@TypeGraphQL.InputType("ZoneUpdateWithoutFormationInput", {
  isAbstract: true
})
export class ZoneUpdateWithoutFormationInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleUpdateManyWithoutZoneNestedInput, {
    nullable: true
  })
  smartPoles?: SmartPoleUpdateManyWithoutZoneNestedInput | undefined;
}
