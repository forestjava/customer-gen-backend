import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRoleCreateWithoutUsersInput } from "../inputs/UserRoleCreateWithoutUsersInput";
import { UserRoleWhereUniqueInput } from "../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.InputType("UserRoleCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class UserRoleCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: false
  })
  where!: UserRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUsersInput, {
    nullable: false
  })
  create!: UserRoleCreateWithoutUsersInput;
}
