import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyAvgOrderByAggregateInput } from "../inputs/CompanyAvgOrderByAggregateInput";
import { CompanyCountOrderByAggregateInput } from "../inputs/CompanyCountOrderByAggregateInput";
import { CompanyMaxOrderByAggregateInput } from "../inputs/CompanyMaxOrderByAggregateInput";
import { CompanyMinOrderByAggregateInput } from "../inputs/CompanyMinOrderByAggregateInput";
import { CompanySumOrderByAggregateInput } from "../inputs/CompanySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CompanyOrderByWithAggregationInput", {
  isAbstract: true
})
export class CompanyOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => CompanyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CompanyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CompanyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CompanyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CompanyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CompanyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CompanyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CompanyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CompanySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CompanySumOrderByAggregateInput | undefined;
}
