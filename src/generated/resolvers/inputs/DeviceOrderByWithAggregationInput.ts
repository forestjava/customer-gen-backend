import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceAvgOrderByAggregateInput } from "../inputs/DeviceAvgOrderByAggregateInput";
import { DeviceCountOrderByAggregateInput } from "../inputs/DeviceCountOrderByAggregateInput";
import { DeviceMaxOrderByAggregateInput } from "../inputs/DeviceMaxOrderByAggregateInput";
import { DeviceMinOrderByAggregateInput } from "../inputs/DeviceMinOrderByAggregateInput";
import { DeviceSumOrderByAggregateInput } from "../inputs/DeviceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeviceOrderByWithAggregationInput", {
  isAbstract: true
})
export class DeviceOrderByWithAggregationInput {
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
  serial?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uuid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  connectParamIndex?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  smartPoleId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeviceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DeviceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DeviceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DeviceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DeviceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DeviceSumOrderByAggregateInput | undefined;
}
