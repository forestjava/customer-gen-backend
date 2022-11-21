import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertListRelationFilter } from "../inputs/AlertListRelationFilter";
import { DeviceTypeRelationFilter } from "../inputs/DeviceTypeRelationFilter";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SmartPoleRelationFilter } from "../inputs/SmartPoleRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("DeviceWhereInput", {
  isAbstract: true
})
export class DeviceWhereInput {
  @TypeGraphQL.Field(_type => [DeviceWhereInput], {
    nullable: true
  })
  AND?: DeviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereInput], {
    nullable: true
  })
  OR?: DeviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereInput], {
    nullable: true
  })
  NOT?: DeviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  serial?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  uuid?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  typeId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeRelationFilter, {
    nullable: true
  })
  type?: DeviceTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  connectParamIndex?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AlertListRelationFilter, {
    nullable: true
  })
  alerts?: AlertListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EventListRelationFilter, {
    nullable: true
  })
  events?: EventListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  smartPoleId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SmartPoleRelationFilter, {
    nullable: true
  })
  smartPole?: SmartPoleRelationFilter | undefined;
}
