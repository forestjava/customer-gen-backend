import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("SolutionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SolutionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SolutionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SolutionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SolutionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SolutionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
