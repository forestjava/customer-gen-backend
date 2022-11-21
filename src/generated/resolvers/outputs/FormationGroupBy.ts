import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationAvgAggregate } from "../outputs/FormationAvgAggregate";
import { FormationCountAggregate } from "../outputs/FormationCountAggregate";
import { FormationMaxAggregate } from "../outputs/FormationMaxAggregate";
import { FormationMinAggregate } from "../outputs/FormationMinAggregate";
import { FormationSumAggregate } from "../outputs/FormationSumAggregate";

@TypeGraphQL.ObjectType("FormationGroupBy", {
  isAbstract: true
})
export class FormationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  regionId!: number | null;

  @TypeGraphQL.Field(_type => FormationCountAggregate, {
    nullable: true
  })
  _count!: FormationCountAggregate | null;

  @TypeGraphQL.Field(_type => FormationAvgAggregate, {
    nullable: true
  })
  _avg!: FormationAvgAggregate | null;

  @TypeGraphQL.Field(_type => FormationSumAggregate, {
    nullable: true
  })
  _sum!: FormationSumAggregate | null;

  @TypeGraphQL.Field(_type => FormationMinAggregate, {
    nullable: true
  })
  _min!: FormationMinAggregate | null;

  @TypeGraphQL.Field(_type => FormationMaxAggregate, {
    nullable: true
  })
  _max!: FormationMaxAggregate | null;
}
