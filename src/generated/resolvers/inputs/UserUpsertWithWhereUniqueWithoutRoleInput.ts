import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserUpdateWithoutRoleInput } from "../inputs/UserUpdateWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutRoleInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRoleInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRoleInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRoleInput, {
    nullable: false
  })
  create!: UserCreateWithoutRoleInput;
}
