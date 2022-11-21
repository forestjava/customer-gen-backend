import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupCreateWithoutUsersInput } from "../inputs/UserGroupCreateWithoutUsersInput";
import { UserGroupWhereUniqueInput } from "../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserGroupCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class UserGroupCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => UserGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserGroupCreateWithoutUsersInput, {
    nullable: false
  })
  create!: UserGroupCreateWithoutUsersInput;
}
