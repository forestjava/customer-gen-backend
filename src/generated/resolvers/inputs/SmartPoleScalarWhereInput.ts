import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SmartPoleScalarWhereInput", {
  isAbstract: true
})
export class SmartPoleScalarWhereInput {
  @TypeGraphQL.Field(_type => [SmartPoleScalarWhereInput], {
    nullable: true
  })
  AND?: SmartPoleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleScalarWhereInput], {
    nullable: true
  })
  OR?: SmartPoleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleScalarWhereInput], {
    nullable: true
  })
  NOT?: SmartPoleScalarWhereInput[] | undefined;

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
}
