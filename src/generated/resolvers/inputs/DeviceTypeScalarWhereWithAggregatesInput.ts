import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("DeviceTypeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DeviceTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeviceTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeviceTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeviceTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeviceTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
