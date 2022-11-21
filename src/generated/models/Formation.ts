import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Region } from "../models/Region";
import { Solution } from "../models/Solution";
import { Zone } from "../models/Zone";
import { FormationCount } from "../resolvers/outputs/FormationCount";

@TypeGraphQL.ObjectType("Formation", {
  isAbstract: true
})
export class Formation {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  solutions?: Solution[];

  zones?: Zone[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  regionId?: number | null;

  region?: Region | null;

  @TypeGraphQL.Field(_type => FormationCount, {
    nullable: true
  })
  _count?: FormationCount | null;
}
