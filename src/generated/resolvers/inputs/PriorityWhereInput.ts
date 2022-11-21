import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertListRelationFilter } from "../inputs/AlertListRelationFilter";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PriorityWhereInput", {
  isAbstract: true
})
export class PriorityWhereInput {
  @TypeGraphQL.Field(_type => [PriorityWhereInput], {
    nullable: true
  })
  AND?: PriorityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriorityWhereInput], {
    nullable: true
  })
  OR?: PriorityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriorityWhereInput], {
    nullable: true
  })
  NOT?: PriorityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AlertListRelationFilter, {
    nullable: true
  })
  alerts?: AlertListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EventListRelationFilter, {
    nullable: true
  })
  events?: EventListRelationFilter | undefined;
}
