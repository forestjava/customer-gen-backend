import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRoleAvgOrderByAggregateInput } from "../inputs/UserRoleAvgOrderByAggregateInput";
import { UserRoleCountOrderByAggregateInput } from "../inputs/UserRoleCountOrderByAggregateInput";
import { UserRoleMaxOrderByAggregateInput } from "../inputs/UserRoleMaxOrderByAggregateInput";
import { UserRoleMinOrderByAggregateInput } from "../inputs/UserRoleMinOrderByAggregateInput";
import { UserRoleSumOrderByAggregateInput } from "../inputs/UserRoleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserRoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserRoleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserRoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserRoleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserRoleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserRoleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserRoleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserRoleSumOrderByAggregateInput | undefined;
}
