import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationRelationFilter } from "../inputs/FormationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SmartPoleListRelationFilter } from "../inputs/SmartPoleListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ZoneWhereInput", {
  isAbstract: true
})
export class ZoneWhereInput {
  @TypeGraphQL.Field(_type => [ZoneWhereInput], {
    nullable: true
  })
  AND?: ZoneWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneWhereInput], {
    nullable: true
  })
  OR?: ZoneWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneWhereInput], {
    nullable: true
  })
  NOT?: ZoneWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => FormationRelationFilter, {
    nullable: true
  })
  formation?: FormationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SmartPoleListRelationFilter, {
    nullable: true
  })
  smartPoles?: SmartPoleListRelationFilter | undefined;
}
