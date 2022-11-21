import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceOrderByWithRelationInput } from "../inputs/DeviceOrderByWithRelationInput";
import { PriorityOrderByWithRelationInput } from "../inputs/PriorityOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EventOrderByWithRelationInput", {
  isAbstract: true
})
export class EventOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priorityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PriorityOrderByWithRelationInput, {
    nullable: true
  })
  priority?: PriorityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  moment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeviceOrderByWithRelationInput, {
    nullable: true
  })
  device?: DeviceOrderByWithRelationInput | undefined;
}
