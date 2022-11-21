import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertAvgAggregate } from "../outputs/AlertAvgAggregate";
import { AlertCountAggregate } from "../outputs/AlertCountAggregate";
import { AlertMaxAggregate } from "../outputs/AlertMaxAggregate";
import { AlertMinAggregate } from "../outputs/AlertMinAggregate";
import { AlertSumAggregate } from "../outputs/AlertSumAggregate";

@TypeGraphQL.ObjectType("AggregateAlert", {
  isAbstract: true
})
export class AggregateAlert {
  @TypeGraphQL.Field(_type => AlertCountAggregate, {
    nullable: true
  })
  _count!: AlertCountAggregate | null;

  @TypeGraphQL.Field(_type => AlertAvgAggregate, {
    nullable: true
  })
  _avg!: AlertAvgAggregate | null;

  @TypeGraphQL.Field(_type => AlertSumAggregate, {
    nullable: true
  })
  _sum!: AlertSumAggregate | null;

  @TypeGraphQL.Field(_type => AlertMinAggregate, {
    nullable: true
  })
  _min!: AlertMinAggregate | null;

  @TypeGraphQL.Field(_type => AlertMaxAggregate, {
    nullable: true
  })
  _max!: AlertMaxAggregate | null;
}
