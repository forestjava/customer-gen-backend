import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertOrderByRelationAggregateInput } from "../inputs/AlertOrderByRelationAggregateInput";
import { EventOrderByRelationAggregateInput } from "../inputs/EventOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PriorityOrderByWithRelationInput", {
  isAbstract: true
})
export class PriorityOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlertOrderByRelationAggregateInput, {
    nullable: true
  })
  alerts?: AlertOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventOrderByRelationAggregateInput, {
    nullable: true
  })
  events?: EventOrderByRelationAggregateInput | undefined;
}
