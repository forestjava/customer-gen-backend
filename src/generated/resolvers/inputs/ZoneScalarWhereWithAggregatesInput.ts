import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ZoneScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ZoneScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ZoneScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ZoneScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ZoneScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ZoneScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  formationId?: IntNullableWithAggregatesFilter | undefined;
}
