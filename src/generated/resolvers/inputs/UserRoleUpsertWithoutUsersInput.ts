import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRoleCreateWithoutUsersInput } from "../inputs/UserRoleCreateWithoutUsersInput";
import { UserRoleUpdateWithoutUsersInput } from "../inputs/UserRoleUpdateWithoutUsersInput";

@TypeGraphQL.InputType("UserRoleUpsertWithoutUsersInput", {
  isAbstract: true
})
export class UserRoleUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => UserRoleUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: UserRoleUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUsersInput, {
    nullable: false
  })
  create!: UserRoleCreateWithoutUsersInput;
}
