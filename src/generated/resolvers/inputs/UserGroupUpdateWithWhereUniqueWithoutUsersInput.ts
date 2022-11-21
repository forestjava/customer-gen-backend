import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupUpdateWithoutUsersInput } from "../inputs/UserGroupUpdateWithoutUsersInput";
import { UserGroupWhereUniqueInput } from "../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserGroupUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class UserGroupUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => UserGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserGroupUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: UserGroupUpdateWithoutUsersInput;
}
