import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("RegionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RegionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RegionScalarWhereWithAggregatesInput[] | undefined;

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
  companyId?: IntNullableWithAggregatesFilter | undefined;
}
