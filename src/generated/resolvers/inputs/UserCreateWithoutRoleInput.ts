import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupCreateNestedManyWithoutUsersInput } from "../inputs/UserGroupCreateNestedManyWithoutUsersInput";

@TypeGraphQL.InputType("UserCreateWithoutRoleInput", {
  isAbstract: true
})
export class UserCreateWithoutRoleInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => UserGroupCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  groups?: UserGroupCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jobTitle?: string | undefined;
}
