import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionWhereInput } from "../inputs/SolutionWhereInput";

@TypeGraphQL.InputType("SolutionListRelationFilter", {
  isAbstract: true
})
export class SolutionListRelationFilter {
  @TypeGraphQL.Field(_type => SolutionWhereInput, {
    nullable: true
  })
  every?: SolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SolutionWhereInput, {
    nullable: true
  })
  some?: SolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SolutionWhereInput, {
    nullable: true
  })
  none?: SolutionWhereInput | undefined;
}
