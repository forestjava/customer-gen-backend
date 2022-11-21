import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateNestedManyWithoutSolutionsInput } from "../inputs/FormationCreateNestedManyWithoutSolutionsInput";

@TypeGraphQL.InputType("SolutionCreateInput", {
  isAbstract: true
})
export class SolutionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => FormationCreateNestedManyWithoutSolutionsInput, {
    nullable: true
  })
  formations?: FormationCreateNestedManyWithoutSolutionsInput | undefined;
}
