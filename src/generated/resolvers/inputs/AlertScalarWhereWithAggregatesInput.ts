import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("AlertScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AlertScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AlertScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AlertScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AlertScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AlertScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  priorityId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  deviceId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  message?: StringNullableWithAggregatesFilter | undefined;
}
