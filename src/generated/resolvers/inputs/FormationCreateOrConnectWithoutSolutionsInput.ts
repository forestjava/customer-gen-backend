import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateWithoutSolutionsInput } from "../inputs/FormationCreateWithoutSolutionsInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationCreateOrConnectWithoutSolutionsInput", {
  isAbstract: true
})
export class FormationCreateOrConnectWithoutSolutionsInput {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationCreateWithoutSolutionsInput, {
    nullable: false
  })
  create!: FormationCreateWithoutSolutionsInput;
}
