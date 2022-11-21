import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { UserRoleCount } from "../resolvers/outputs/UserRoleCount";

@TypeGraphQL.ObjectType("UserRole", {
  isAbstract: true
})
export class UserRole {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  users?: User[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => UserRoleCount, {
    nullable: true
  })
  _count?: UserRoleCount | null;
}
