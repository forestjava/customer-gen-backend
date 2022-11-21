import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleAvgOrderByAggregateInput } from "../inputs/SmartPoleAvgOrderByAggregateInput";
import { SmartPoleCountOrderByAggregateInput } from "../inputs/SmartPoleCountOrderByAggregateInput";
import { SmartPoleMaxOrderByAggregateInput } from "../inputs/SmartPoleMaxOrderByAggregateInput";
import { SmartPoleMinOrderByAggregateInput } from "../inputs/SmartPoleMinOrderByAggregateInput";
import { SmartPoleSumOrderByAggregateInput } from "../inputs/SmartPoleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SmartPoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class SmartPoleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  connectLocationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  connectDeviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serial?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  latitude?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  longitude?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  zoneId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SmartPoleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SmartPoleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SmartPoleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SmartPoleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SmartPoleSumOrderByAggregateInput | undefined;
}
