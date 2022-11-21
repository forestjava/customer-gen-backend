import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("UserRoleWhereInput", {
  isAbstract: true
})
export class UserRoleWhereInput {
  @TypeGraphQL.Field(_type => [UserRoleWhereInput], {
    nullable: true
  })
  AND?: UserRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleWhereInput], {
    nullable: true
  })
  OR?: UserRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleWhereInput], {
    nullable: true
  })
  NOT?: UserRoleWhereInput[] | undefined;

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
}
