import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RegionRelationFilter } from "../inputs/RegionRelationFilter";
import { SolutionListRelationFilter } from "../inputs/SolutionListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ZoneListRelationFilter } from "../inputs/ZoneListRelationFilter";

@TypeGraphQL.InputType("FormationWhereInput", {
  isAbstract: true
})
export class FormationWhereInput {
  @TypeGraphQL.Field(_type => [FormationWhereInput], {
    nullable: true
  })
  AND?: FormationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereInput], {
    nullable: true
  })
  OR?: FormationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereInput], {
    nullable: true
  })
  NOT?: FormationWhereInput[] | undefined;

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
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SolutionListRelationFilter, {
    nullable: true
  })
  solutions?: SolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ZoneListRelationFilter, {
    nullable: true
  })
  zones?: ZoneListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  regionId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RegionRelationFilter, {
    nullable: true
  })
  region?: RegionRelationFilter | undefined;
}
