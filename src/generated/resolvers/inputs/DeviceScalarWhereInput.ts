import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("DeviceScalarWhereInput", {
  isAbstract: true
})
export class DeviceScalarWhereInput {
  @TypeGraphQL.Field(_type => [DeviceScalarWhereInput], {
    nullable: true
  })
  AND?: DeviceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarWhereInput], {
    nullable: true
  })
  OR?: DeviceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarWhereInput], {
    nullable: true
  })
  NOT?: DeviceScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  connectParamIndex?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  smartPoleId?: IntNullableFilter | undefined;
}
