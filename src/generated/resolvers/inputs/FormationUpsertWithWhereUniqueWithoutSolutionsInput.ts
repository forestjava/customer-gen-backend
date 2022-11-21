import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateWithoutSolutionsInput } from "../inputs/FormationCreateWithoutSolutionsInput";
import { FormationUpdateWithoutSolutionsInput } from "../inputs/FormationUpdateWithoutSolutionsInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationUpsertWithWhereUniqueWithoutSolutionsInput", {
  isAbstract: true
})
export class FormationUpsertWithWhereUniqueWithoutSolutionsInput {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationUpdateWithoutSolutionsInput, {
    nullable: false
  })
  update!: FormationUpdateWithoutSolutionsInput;

  @TypeGraphQL.Field(_type => FormationCreateWithoutSolutionsInput, {
    nullable: false
  })
  create!: FormationCreateWithoutSolutionsInput;
}
