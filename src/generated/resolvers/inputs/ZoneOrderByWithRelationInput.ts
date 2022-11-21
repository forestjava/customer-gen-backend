import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationOrderByWithRelationInput } from "../inputs/FormationOrderByWithRelationInput";
import { SmartPoleOrderByRelationAggregateInput } from "../inputs/SmartPoleOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ZoneOrderByWithRelationInput", {
  isAbstract: true
})
export class ZoneOrderByWithRelationInput {
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
  formationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FormationOrderByWithRelationInput, {
    nullable: true
  })
  formation?: FormationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleOrderByRelationAggregateInput, {
    nullable: true
  })
  smartPoles?: SmartPoleOrderByRelationAggregateInput | undefined;
}
