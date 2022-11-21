import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneAvgAggregate } from "../outputs/ZoneAvgAggregate";
import { ZoneCountAggregate } from "../outputs/ZoneCountAggregate";
import { ZoneMaxAggregate } from "../outputs/ZoneMaxAggregate";
import { ZoneMinAggregate } from "../outputs/ZoneMinAggregate";
import { ZoneSumAggregate } from "../outputs/ZoneSumAggregate";

@TypeGraphQL.ObjectType("AggregateZone", {
  isAbstract: true
})
export class AggregateZone {
  @TypeGraphQL.Field(_type => ZoneCountAggregate, {
    nullable: true
  })
  _count!: ZoneCountAggregate | null;

  @TypeGraphQL.Field(_type => ZoneAvgAggregate, {
    nullable: true
  })
  _avg!: ZoneAvgAggregate | null;

  @TypeGraphQL.Field(_type => ZoneSumAggregate, {
    nullable: true
  })
  _sum!: ZoneSumAggregate | null;

  @TypeGraphQL.Field(_type => ZoneMinAggregate, {
    nullable: true
  })
  _min!: ZoneMinAggregate | null;

  @TypeGraphQL.Field(_type => ZoneMaxAggregate, {
    nullable: true
  })
  _max!: ZoneMaxAggregate | null;
}
