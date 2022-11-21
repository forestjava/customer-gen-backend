import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupWhereInput } from "../inputs/UserGroupWhereInput";

@TypeGraphQL.InputType("UserGroupListRelationFilter", {
  isAbstract: true
})
export class UserGroupListRelationFilter {
  @TypeGraphQL.Field(_type => UserGroupWhereInput, {
    nullable: true
  })
  every?: UserGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserGroupWhereInput, {
    nullable: true
  })
  some?: UserGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserGroupWhereInput, {
    nullable: true
  })
  none?: UserGroupWhereInput | undefined;
}
