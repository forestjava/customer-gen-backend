import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionScalarWhereInput } from "../inputs/SolutionScalarWhereInput";
import { SolutionUpdateManyMutationInput } from "../inputs/SolutionUpdateManyMutationInput";

@TypeGraphQL.InputType("SolutionUpdateManyWithWhereWithoutFormationsInput", {
  isAbstract: true
})
export class SolutionUpdateManyWithWhereWithoutFormationsInput {
  @TypeGraphQL.Field(_type => SolutionScalarWhereInput, {
    nullable: false
  })
  where!: SolutionScalarWhereInput;

  @TypeGraphQL.Field(_type => SolutionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SolutionUpdateManyMutationInput;
}
