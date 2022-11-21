import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("UserGroupWhereInput", {
  isAbstract: true
})
export class UserGroupWhereInput {
  @TypeGraphQL.Field(_type => [UserGroupWhereInput], {
    nullable: true
  })
  AND?: UserGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupWhereInput], {
    nullable: true
  })
  OR?: UserGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupWhereInput], {
    nullable: true
  })
  NOT?: UserGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  color?: StringNullableFilter | undefined;
}
