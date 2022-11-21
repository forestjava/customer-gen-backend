import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertOrderByRelationAggregateInput } from "../inputs/AlertOrderByRelationAggregateInput";
import { DeviceTypeOrderByWithRelationInput } from "../inputs/DeviceTypeOrderByWithRelationInput";
import { EventOrderByRelationAggregateInput } from "../inputs/EventOrderByRelationAggregateInput";
import { SmartPoleOrderByWithRelationInput } from "../inputs/SmartPoleOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeviceOrderByWithRelationInput", {
  isAbstract: true
})
export class DeviceOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => DeviceTypeOrderByWithRelationInput, {
    nullable: true
  })
  type?: DeviceTypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  connectParamIndex?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlertOrderByRelationAggregateInput, {
    nullable: true
  })
  alerts?: AlertOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventOrderByRelationAggregateInput, {
    nullable: true
  })
  events?: EventOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  smartPoleId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SmartPoleOrderByWithRelationInput, {
    nullable: true
  })
  smartPole?: SmartPoleOrderByWithRelationInput | undefined;
}
