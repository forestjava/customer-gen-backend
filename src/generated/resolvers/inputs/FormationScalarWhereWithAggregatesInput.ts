import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("FormationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FormationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FormationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FormationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FormationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FormationScalarWhereWithAggregatesInput[] | undefined;

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
  address?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  regionId?: IntNullableWithAggregatesFilter | undefined;
}
