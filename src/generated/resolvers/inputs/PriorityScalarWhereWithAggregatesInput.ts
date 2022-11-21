import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("PriorityScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PriorityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PriorityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PriorityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriorityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PriorityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriorityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PriorityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
