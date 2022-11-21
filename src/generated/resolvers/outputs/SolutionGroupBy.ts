import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionAvgAggregate } from "../outputs/SolutionAvgAggregate";
import { SolutionCountAggregate } from "../outputs/SolutionCountAggregate";
import { SolutionMaxAggregate } from "../outputs/SolutionMaxAggregate";
import { SolutionMinAggregate } from "../outputs/SolutionMinAggregate";
import { SolutionSumAggregate } from "../outputs/SolutionSumAggregate";

@TypeGraphQL.ObjectType("SolutionGroupBy", {
  isAbstract: true
})
export class SolutionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => SolutionCountAggregate, {
    nullable: true
  })
  _count!: SolutionCountAggregate | null;

  @TypeGraphQL.Field(_type => SolutionAvgAggregate, {
    nullable: true
  })
  _avg!: SolutionAvgAggregate | null;

  @TypeGraphQL.Field(_type => SolutionSumAggregate, {
    nullable: true
  })
  _sum!: SolutionSumAggregate | null;

  @TypeGraphQL.Field(_type => SolutionMinAggregate, {
    nullable: true
  })
  _min!: SolutionMinAggregate | null;

  @TypeGraphQL.Field(_type => SolutionMaxAggregate, {
    nullable: true
  })
  _max!: SolutionMaxAggregate | null;
}
