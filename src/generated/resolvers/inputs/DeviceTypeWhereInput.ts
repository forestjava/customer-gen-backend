import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceListRelationFilter } from "../inputs/DeviceListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("DeviceTypeWhereInput", {
  isAbstract: true
})
export class DeviceTypeWhereInput {
  @TypeGraphQL.Field(_type => [DeviceTypeWhereInput], {
    nullable: true
  })
  AND?: DeviceTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTypeWhereInput], {
    nullable: true
  })
  OR?: DeviceTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTypeWhereInput], {
    nullable: true
  })
  NOT?: DeviceTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DeviceListRelationFilter, {
    nullable: true
  })
  devices?: DeviceListRelationFilter | undefined;
}
