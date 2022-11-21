import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionOrderByWithRelationInput } from "../inputs/RegionOrderByWithRelationInput";
import { SolutionOrderByRelationAggregateInput } from "../inputs/SolutionOrderByRelationAggregateInput";
import { ZoneOrderByRelationAggregateInput } from "../inputs/ZoneOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FormationOrderByWithRelationInput", {
  isAbstract: true
})
export class FormationOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  solutions?: SolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZoneOrderByRelationAggregateInput, {
    nullable: true
  })
  zones?: ZoneOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  regionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionOrderByWithRelationInput | undefined;
}
