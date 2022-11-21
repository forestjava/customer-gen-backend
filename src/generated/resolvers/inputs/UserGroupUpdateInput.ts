import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutGroupsNestedInput } from "../inputs/UserUpdateManyWithoutGroupsNestedInput";

@TypeGraphQL.InputType("UserGroupUpdateInput", {
  isAbstract: true
})
export class UserGroupUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateManyWithoutGroupsNestedInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  color?: NullableStringFieldUpdateOperationsInput | undefined;
}
