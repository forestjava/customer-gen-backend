import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertUpdateManyWithoutPriorityNestedInput } from "../inputs/AlertUpdateManyWithoutPriorityNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PriorityUpdateWithoutEventsInput", {
  isAbstract: true
})
export class PriorityUpdateWithoutEventsInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AlertUpdateManyWithoutPriorityNestedInput, {
    nullable: true
  })
  alerts?: AlertUpdateManyWithoutPriorityNestedInput | undefined;
}
