import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRoleWhereInput } from "../inputs/UserRoleWhereInput";

@TypeGraphQL.InputType("UserRoleRelationFilter", {
  isAbstract: true
})
export class UserRoleRelationFilter {
  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  is?: UserRoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  isNot?: UserRoleWhereInput | undefined;
}
