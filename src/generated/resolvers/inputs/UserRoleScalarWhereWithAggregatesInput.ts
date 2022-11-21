import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("UserRoleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserRoleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}