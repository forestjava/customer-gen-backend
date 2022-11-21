import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("DeviceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DeviceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeviceScalarWhereWithAggregatesInput[] | undefined;

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
  serial?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  uuid?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  typeId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  connectParamIndex?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  smartPoleId?: IntNullableWithAggregatesFilter | undefined;
}
