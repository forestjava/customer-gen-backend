import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RegionListRelationFilter } from "../inputs/RegionListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CompanyWhereInput", {
  isAbstract: true
})
export class CompanyWhereInput {
  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  AND?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  OR?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  NOT?: CompanyWhereInput[] | undefined;

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
  icon?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  logo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RegionListRelationFilter, {
    nullable: true
  })
  regions?: RegionListRelationFilter | undefined;
}
