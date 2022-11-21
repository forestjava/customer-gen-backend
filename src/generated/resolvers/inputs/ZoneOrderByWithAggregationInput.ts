import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneAvgOrderByAggregateInput } from "../inputs/ZoneAvgOrderByAggregateInput";
import { ZoneCountOrderByAggregateInput } from "../inputs/ZoneCountOrderByAggregateInput";
import { ZoneMaxOrderByAggregateInput } from "../inputs/ZoneMaxOrderByAggregateInput";
import { ZoneMinOrderByAggregateInput } from "../inputs/ZoneMinOrderByAggregateInput";
import { ZoneSumOrderByAggregateInput } from "../inputs/ZoneSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ZoneOrderByWithAggregationInput", {
  isAbstract: true
})
export class ZoneOrderByWithAggregationInput {
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
  formationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ZoneCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ZoneCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZoneAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ZoneAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZoneMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ZoneMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZoneMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ZoneMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZoneSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ZoneSumOrderByAggregateInput | undefined;
}
