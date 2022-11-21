import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleAvgAggregate } from "../outputs/SmartPoleAvgAggregate";
import { SmartPoleCountAggregate } from "../outputs/SmartPoleCountAggregate";
import { SmartPoleMaxAggregate } from "../outputs/SmartPoleMaxAggregate";
import { SmartPoleMinAggregate } from "../outputs/SmartPoleMinAggregate";
import { SmartPoleSumAggregate } from "../outputs/SmartPoleSumAggregate";

@TypeGraphQL.ObjectType("SmartPoleGroupBy", {
  isAbstract: true
})
export class SmartPoleGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  connectLocationId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  connectDeviceId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serial!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  latitude!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  longitude!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  zoneId!: number | null;

  @TypeGraphQL.Field(_type => SmartPoleCountAggregate, {
    nullable: true
  })
  _count!: SmartPoleCountAggregate | null;

  @TypeGraphQL.Field(_type => SmartPoleAvgAggregate, {
    nullable: true
  })
  _avg!: SmartPoleAvgAggregate | null;

  @TypeGraphQL.Field(_type => SmartPoleSumAggregate, {
    nullable: true
  })
  _sum!: SmartPoleSumAggregate | null;

  @TypeGraphQL.Field(_type => SmartPoleMinAggregate, {
    nullable: true
  })
  _min!: SmartPoleMinAggregate | null;

  @TypeGraphQL.Field(_type => SmartPoleMaxAggregate, {
    nullable: true
  })
  _max!: SmartPoleMaxAggregate | null;
}
