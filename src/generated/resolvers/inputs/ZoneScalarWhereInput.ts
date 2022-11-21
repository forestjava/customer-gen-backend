import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ZoneScalarWhereInput", {
  isAbstract: true
})
export class ZoneScalarWhereInput {
  @TypeGraphQL.Field(_type => [ZoneScalarWhereInput], {
    nullable: true
  })
  AND?: ZoneScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneScalarWhereInput], {
    nullable: true
  })
  OR?: ZoneScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneScalarWhereInput], {
    nullable: true
  })
  NOT?: ZoneScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  formationId?: IntNullableFilter | undefined;
}
