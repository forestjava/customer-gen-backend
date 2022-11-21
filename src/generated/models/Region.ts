import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Company } from "../models/Company";
import { Formation } from "../models/Formation";
import { RegionCount } from "../resolvers/outputs/RegionCount";

@TypeGraphQL.ObjectType("Region", {
  isAbstract: true
})
export class Region {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  formations?: Formation[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  companyId?: number | null;

  company?: Company | null;

  @TypeGraphQL.Field(_type => RegionCount, {
    nullable: true
  })
  _count?: RegionCount | null;
}
