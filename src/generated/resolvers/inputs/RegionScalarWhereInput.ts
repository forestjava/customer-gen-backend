import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RegionScalarWhereInput", {
  isAbstract: true
})
export class RegionScalarWhereInput {
  @TypeGraphQL.Field(_type => [RegionScalarWhereInput], {
    nullable: true
  })
  AND?: RegionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarWhereInput], {
    nullable: true
  })
  OR?: RegionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarWhereInput], {
    nullable: true
  })
  NOT?: RegionScalarWhereInput[] | undefined;

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
  companyId?: IntNullableFilter | undefined;
}
