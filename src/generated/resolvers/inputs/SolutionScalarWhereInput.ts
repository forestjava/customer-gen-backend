import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SolutionScalarWhereInput", {
  isAbstract: true
})
export class SolutionScalarWhereInput {
  @TypeGraphQL.Field(_type => [SolutionScalarWhereInput], {
    nullable: true
  })
  AND?: SolutionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionScalarWhereInput], {
    nullable: true
  })
  OR?: SolutionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionScalarWhereInput], {
    nullable: true
  })
  NOT?: SolutionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
