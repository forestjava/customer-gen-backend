import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionAvgOrderByAggregateInput } from "../inputs/SolutionAvgOrderByAggregateInput";
import { SolutionCountOrderByAggregateInput } from "../inputs/SolutionCountOrderByAggregateInput";
import { SolutionMaxOrderByAggregateInput } from "../inputs/SolutionMaxOrderByAggregateInput";
import { SolutionMinOrderByAggregateInput } from "../inputs/SolutionMinOrderByAggregateInput";
import { SolutionSumOrderByAggregateInput } from "../inputs/SolutionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SolutionOrderByWithAggregationInput", {
  isAbstract: true
})
export class SolutionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SolutionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SolutionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SolutionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SolutionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SolutionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SolutionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SolutionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SolutionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SolutionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SolutionSumOrderByAggregateInput | undefined;
}
