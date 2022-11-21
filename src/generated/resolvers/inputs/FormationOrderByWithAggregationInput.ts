import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationAvgOrderByAggregateInput } from "../inputs/FormationAvgOrderByAggregateInput";
import { FormationCountOrderByAggregateInput } from "../inputs/FormationCountOrderByAggregateInput";
import { FormationMaxOrderByAggregateInput } from "../inputs/FormationMaxOrderByAggregateInput";
import { FormationMinOrderByAggregateInput } from "../inputs/FormationMinOrderByAggregateInput";
import { FormationSumOrderByAggregateInput } from "../inputs/FormationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FormationOrderByWithAggregationInput", {
  isAbstract: true
})
export class FormationOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  regionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FormationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FormationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FormationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FormationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FormationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FormationSumOrderByAggregateInput | undefined;
}
