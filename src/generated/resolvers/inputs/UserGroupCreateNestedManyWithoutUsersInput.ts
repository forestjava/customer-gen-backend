import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupCreateOrConnectWithoutUsersInput } from "../inputs/UserGroupCreateOrConnectWithoutUsersInput";
import { UserGroupCreateWithoutUsersInput } from "../inputs/UserGroupCreateWithoutUsersInput";
import { UserGroupWhereUniqueInput } from "../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserGroupCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class UserGroupCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [UserGroupCreateWithoutUsersInput], {
    nullable: true
  })
  create?: UserGroupCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: UserGroupCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: UserGroupWhereUniqueInput[] | undefined;
}
