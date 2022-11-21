import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupAvgOrderByAggregateInput } from "../inputs/UserGroupAvgOrderByAggregateInput";
import { UserGroupCountOrderByAggregateInput } from "../inputs/UserGroupCountOrderByAggregateInput";
import { UserGroupMaxOrderByAggregateInput } from "../inputs/UserGroupMaxOrderByAggregateInput";
import { UserGroupMinOrderByAggregateInput } from "../inputs/UserGroupMinOrderByAggregateInput";
import { UserGroupSumOrderByAggregateInput } from "../inputs/UserGroupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserGroupOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserGroupOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  color?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserGroupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserGroupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserGroupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserGroupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserGroupSumOrderByAggregateInput | undefined;
}
