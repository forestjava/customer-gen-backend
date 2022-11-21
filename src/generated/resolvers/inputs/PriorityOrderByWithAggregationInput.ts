import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityAvgOrderByAggregateInput } from "../inputs/PriorityAvgOrderByAggregateInput";
import { PriorityCountOrderByAggregateInput } from "../inputs/PriorityCountOrderByAggregateInput";
import { PriorityMaxOrderByAggregateInput } from "../inputs/PriorityMaxOrderByAggregateInput";
import { PriorityMinOrderByAggregateInput } from "../inputs/PriorityMinOrderByAggregateInput";
import { PrioritySumOrderByAggregateInput } from "../inputs/PrioritySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PriorityOrderByWithAggregationInput", {
  isAbstract: true
})
export class PriorityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PriorityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PriorityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PriorityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PriorityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PriorityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PriorityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PriorityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PriorityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrioritySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PrioritySumOrderByAggregateInput | undefined;
}
