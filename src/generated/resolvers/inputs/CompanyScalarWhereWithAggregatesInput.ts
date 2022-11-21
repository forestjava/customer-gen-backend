import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("CompanyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CompanyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CompanyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CompanyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CompanyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CompanyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  icon?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  logo?: StringNullableWithAggregatesFilter | undefined;
}
