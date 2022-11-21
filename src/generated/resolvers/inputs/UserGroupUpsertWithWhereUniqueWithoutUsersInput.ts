import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupCreateWithoutUsersInput } from "../inputs/UserGroupCreateWithoutUsersInput";
import { UserGroupUpdateWithoutUsersInput } from "../inputs/UserGroupUpdateWithoutUsersInput";
import { UserGroupWhereUniqueInput } from "../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserGroupUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class UserGroupUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => UserGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserGroupUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: UserGroupUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => UserGroupCreateWithoutUsersInput, {
    nullable: false
  })
  create!: UserGroupCreateWithoutUsersInput;
}
