import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationScalarWhereInput } from "../inputs/FormationScalarWhereInput";
import { FormationUpdateManyMutationInput } from "../inputs/FormationUpdateManyMutationInput";

@TypeGraphQL.InputType("FormationUpdateManyWithWhereWithoutSolutionsInput", {
  isAbstract: true
})
export class FormationUpdateManyWithWhereWithoutSolutionsInput {
  @TypeGraphQL.Field(_type => FormationScalarWhereInput, {
    nullable: false
  })
  where!: FormationScalarWhereInput;

  @TypeGraphQL.Field(_type => FormationUpdateManyMutationInput, {
    nullable: false
  })
  data!: FormationUpdateManyMutationInput;
}
