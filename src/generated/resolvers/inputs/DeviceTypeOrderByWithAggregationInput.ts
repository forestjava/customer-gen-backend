import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeAvgOrderByAggregateInput } from "../inputs/DeviceTypeAvgOrderByAggregateInput";
import { DeviceTypeCountOrderByAggregateInput } from "../inputs/DeviceTypeCountOrderByAggregateInput";
import { DeviceTypeMaxOrderByAggregateInput } from "../inputs/DeviceTypeMaxOrderByAggregateInput";
import { DeviceTypeMinOrderByAggregateInput } from "../inputs/DeviceTypeMinOrderByAggregateInput";
import { DeviceTypeSumOrderByAggregateInput } from "../inputs/DeviceTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeviceTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class DeviceTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DeviceTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DeviceTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DeviceTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DeviceTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DeviceTypeSumOrderByAggregateInput | undefined;
}
