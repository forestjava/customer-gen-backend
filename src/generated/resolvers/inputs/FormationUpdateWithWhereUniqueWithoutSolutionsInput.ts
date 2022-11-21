import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationUpdateWithoutSolutionsInput } from "../inputs/FormationUpdateWithoutSolutionsInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationUpdateWithWhereUniqueWithoutSolutionsInput", {
  isAbstract: true
})
export class FormationUpdateWithWhereUniqueWithoutSolutionsInput {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationUpdateWithoutSolutionsInput, {
    nullable: false
  })
  data!: FormationUpdateWithoutSolutionsInput;
}
