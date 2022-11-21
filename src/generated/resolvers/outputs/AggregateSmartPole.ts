import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleAvgAggregate } from "../outputs/SmartPoleAvgAggregate";
import { SmartPoleCountAggregate } from "../outputs/SmartPoleCountAggregate";
import { SmartPoleMaxAggregate } from "../outputs/SmartPoleMaxAggregate";
import { SmartPoleMinAggregate } from "../outputs/SmartPoleMinAggregate";
import { SmartPoleSumAggregate } from "../outputs/SmartPoleSumAggregate";

@TypeGraphQL.ObjectType("AggregateSmartPole", {
  isAbstract: true
})
export class AggregateSmartPole {
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
