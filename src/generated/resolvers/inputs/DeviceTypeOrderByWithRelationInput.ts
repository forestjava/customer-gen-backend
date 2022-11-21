import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceOrderByRelationAggregateInput } from "../inputs/DeviceOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeviceTypeOrderByWithRelationInput", {
  isAbstract: true
})
export class DeviceTypeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeviceOrderByRelationAggregateInput, {
    nullable: true
  })
  devices?: DeviceOrderByRelationAggregateInput | undefined;
}
