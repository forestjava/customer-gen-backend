import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Formation } from "../models/Formation";
import { SmartPole } from "../models/SmartPole";
import { ZoneCount } from "../resolvers/outputs/ZoneCount";

@TypeGraphQL.ObjectType("Zone", {
  isAbstract: true
})
export class Zone {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  formationId?: number | null;

  formation?: Formation | null;

  smartPoles?: SmartPole[];

  @TypeGraphQL.Field(_type => ZoneCount, {
    nullable: true
  })
  _count?: ZoneCount | null;
}
