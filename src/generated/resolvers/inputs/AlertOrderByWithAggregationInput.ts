import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertAvgOrderByAggregateInput } from "../inputs/AlertAvgOrderByAggregateInput";
import { AlertCountOrderByAggregateInput } from "../inputs/AlertCountOrderByAggregateInput";
import { AlertMaxOrderByAggregateInput } from "../inputs/AlertMaxOrderByAggregateInput";
import { AlertMinOrderByAggregateInput } from "../inputs/AlertMinOrderByAggregateInput";
import { AlertSumOrderByAggregateInput } from "../inputs/AlertSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AlertOrderByWithAggregationInput", {
  isAbstract: true
})
export class AlertOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priorityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlertCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AlertCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlertAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AlertAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlertMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AlertMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlertMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AlertMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlertSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AlertSumOrderByAggregateInput | undefined;
}
