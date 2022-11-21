import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertAvgAggregate } from "../outputs/AlertAvgAggregate";
import { AlertCountAggregate } from "../outputs/AlertCountAggregate";
import { AlertMaxAggregate } from "../outputs/AlertMaxAggregate";
import { AlertMinAggregate } from "../outputs/AlertMinAggregate";
import { AlertSumAggregate } from "../outputs/AlertSumAggregate";

@TypeGraphQL.ObjectType("AlertGroupBy", {
  isAbstract: true
})
export class AlertGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priorityId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deviceId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message!: string | null;

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
