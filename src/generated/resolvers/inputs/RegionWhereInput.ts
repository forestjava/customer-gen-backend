import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { FormationListRelationFilter } from "../inputs/FormationListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RegionWhereInput", {
  isAbstract: true
})
export class RegionWhereInput {
  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  AND?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  OR?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  NOT?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FormationListRelationFilter, {
    nullable: true
  })
  formations?: FormationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  companyId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyRelationFilter, {
    nullable: true
  })
  company?: CompanyRelationFilter | undefined;
}
