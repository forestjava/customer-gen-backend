import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("SmartPoleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SmartPoleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SmartPoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SmartPoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SmartPoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SmartPoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  connectLocationId?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  connectDeviceId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  serial?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  latitude?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  longitude?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  zoneId?: IntNullableWithAggregatesFilter | undefined;
}
