import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("EventScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EventScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  priorityId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  moment?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  message?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  deviceId?: IntNullableWithAggregatesFilter | undefined;
}
