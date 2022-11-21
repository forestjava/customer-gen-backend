import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionUpdateWithoutFormationsInput } from "../inputs/SolutionUpdateWithoutFormationsInput";
import { SolutionWhereUniqueInput } from "../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.InputType("SolutionUpdateWithWhereUniqueWithoutFormationsInput", {
  isAbstract: true
})
export class SolutionUpdateWithWhereUniqueWithoutFormationsInput {
  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: false
  })
  where!: SolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SolutionUpdateWithoutFormationsInput, {
    nullable: false
  })
  data!: SolutionUpdateWithoutFormationsInput;
}
