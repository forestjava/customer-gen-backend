import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityAvgAggregate } from "../outputs/PriorityAvgAggregate";
import { PriorityCountAggregate } from "../outputs/PriorityCountAggregate";
import { PriorityMaxAggregate } from "../outputs/PriorityMaxAggregate";
import { PriorityMinAggregate } from "../outputs/PriorityMinAggregate";
import { PrioritySumAggregate } from "../outputs/PrioritySumAggregate";

@TypeGraphQL.ObjectType("AggregatePriority", {
  isAbstract: true
})
export class AggregatePriority {
  @TypeGraphQL.Field(_type => PriorityCountAggregate, {
    nullable: true
  })
  _count!: PriorityCountAggregate | null;

  @TypeGraphQL.Field(_type => PriorityAvgAggregate, {
    nullable: true
  })
  _avg!: PriorityAvgAggregate | null;

  @TypeGraphQL.Field(_type => PrioritySumAggregate, {
    nullable: true
  })
  _sum!: PrioritySumAggregate | null;

  @TypeGraphQL.Field(_type => PriorityMinAggregate, {
    nullable: true
  })
  _min!: PriorityMinAggregate | null;

  @TypeGraphQL.Field(_type => PriorityMaxAggregate, {
    nullable: true
  })
  _max!: PriorityMaxAggregate | null;
}
