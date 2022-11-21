import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRoleCreateOrConnectWithoutUsersInput } from "../inputs/UserRoleCreateOrConnectWithoutUsersInput";
import { UserRoleCreateWithoutUsersInput } from "../inputs/UserRoleCreateWithoutUsersInput";
import { UserRoleWhereUniqueInput } from "../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.InputType("UserRoleCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class UserRoleCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUsersInput, {
    nullable: true
  })
  create?: UserRoleCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: true
  })
  connect?: UserRoleWhereUniqueInput | undefined;
}
