import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { UserGroupCount } from "../resolvers/outputs/UserGroupCount";

@TypeGraphQL.ObjectType("UserGroup", {
  isAbstract: true
})
export class UserGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  users?: User[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | null;

  @TypeGraphQL.Field(_type => UserGroupCount, {
    nullable: true
  })
  _count?: UserGroupCount | null;
}
