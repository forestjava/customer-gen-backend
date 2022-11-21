import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationListRelationFilter } from "../inputs/FormationListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SolutionWhereInput", {
  isAbstract: true
})
export class SolutionWhereInput {
  @TypeGraphQL.Field(_type => [SolutionWhereInput], {
    nullable: true
  })
  AND?: SolutionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionWhereInput], {
    nullable: true
  })
  OR?: SolutionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionWhereInput], {
    nullable: true
  })
  NOT?: SolutionWhereInput[] | undefined;

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
}
