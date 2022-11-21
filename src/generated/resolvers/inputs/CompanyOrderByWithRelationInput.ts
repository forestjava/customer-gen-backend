import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionOrderByRelationAggregateInput } from "../inputs/RegionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CompanyOrderByWithRelationInput", {
  isAbstract: true
})
export class CompanyOrderByWithRelationInput {
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
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  logo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionOrderByRelationAggregateInput, {
    nullable: true
  })
  regions?: RegionOrderByRelationAggregateInput | undefined;
}
