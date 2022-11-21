import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceListRelationFilter } from "../inputs/DeviceListRelationFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ZoneRelationFilter } from "../inputs/ZoneRelationFilter";

@TypeGraphQL.InputType("SmartPoleWhereInput", {
  isAbstract: true
})
export class SmartPoleWhereInput {
  @TypeGraphQL.Field(_type => [SmartPoleWhereInput], {
    nullable: true
  })
  AND?: SmartPoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleWhereInput], {
    nullable: true
  })
  OR?: SmartPoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleWhereInput], {
    nullable: true
  })
  NOT?: SmartPoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  connectLocationId?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  connectDeviceId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  serial?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  latitude?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  longitude?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  zoneId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ZoneRelationFilter, {
    nullable: true
  })
  zone?: ZoneRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DeviceListRelationFilter, {
    nullable: true
  })
  devices?: DeviceListRelationFilter | undefined;
}
