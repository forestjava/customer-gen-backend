import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("UserGroupScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserGroupScalarWhereWithAggregatesInput[] | undefined;

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
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  color?: StringNullableWithAggregatesFilter | undefined;
}
