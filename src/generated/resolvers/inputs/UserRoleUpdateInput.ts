import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutRoleNestedInput } from "../inputs/UserUpdateManyWithoutRoleNestedInput";

@TypeGraphQL.InputType("UserRoleUpdateInput", {
  isAbstract: true
})
export class UserRoleUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateManyWithoutRoleNestedInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutRoleNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;
}
