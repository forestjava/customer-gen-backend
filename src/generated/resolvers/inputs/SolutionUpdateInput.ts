import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationUpdateManyWithoutSolutionsNestedInput } from "../inputs/FormationUpdateManyWithoutSolutionsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SolutionUpdateInput", {
  isAbstract: true
})
export class SolutionUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FormationUpdateManyWithoutSolutionsNestedInput, {
    nullable: true
  })
  formations?: FormationUpdateManyWithoutSolutionsNestedInput | undefined;
}
