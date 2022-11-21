import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateManyWithoutPriorityNestedInput } from "../inputs/EventUpdateManyWithoutPriorityNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PriorityUpdateWithoutAlertsInput", {
  isAbstract: true
})
export class PriorityUpdateWithoutAlertsInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateManyWithoutPriorityNestedInput, {
    nullable: true
  })
  events?: EventUpdateManyWithoutPriorityNestedInput | undefined;
}
