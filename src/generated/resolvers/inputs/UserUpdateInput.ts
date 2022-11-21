import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserGroupUpdateManyWithoutUsersNestedInput } from "../inputs/UserGroupUpdateManyWithoutUsersNestedInput";
import { UserRoleUpdateOneWithoutUsersNestedInput } from "../inputs/UserRoleUpdateOneWithoutUsersNestedInput";

@TypeGraphQL.InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleUpdateOneWithoutUsersNestedInput, {
    nullable: true
  })
  role?: UserRoleUpdateOneWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserGroupUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  groups?: UserGroupUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  jobTitle?: NullableStringFieldUpdateOperationsInput | undefined;
}
