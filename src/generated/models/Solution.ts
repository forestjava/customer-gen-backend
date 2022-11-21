import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Formation } from "../models/Formation";
import { SolutionCount } from "../resolvers/outputs/SolutionCount";

@TypeGraphQL.ObjectType("Solution", {
  isAbstract: true
})
export class Solution {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  formations?: Formation[];

  @TypeGraphQL.Field(_type => SolutionCount, {
    nullable: true
  })
  _count?: SolutionCount | null;
}
