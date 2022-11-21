import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceOrderByRelationAggregateInput } from "../inputs/DeviceOrderByRelationAggregateInput";
import { ZoneOrderByWithRelationInput } from "../inputs/ZoneOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SmartPoleOrderByWithRelationInput", {
  isAbstract: true
})
export class SmartPoleOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  connectLocationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  connectDeviceId?: "asc" | "desc" | undefined;

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
  latitude?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  longitude?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  zoneId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ZoneOrderByWithRelationInput, {
    nullable: true
  })
  zone?: ZoneOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => DeviceOrderByRelationAggregateInput, {
    nullable: true
  })
  devices?: DeviceOrderByRelationAggregateInput | undefined;
}
