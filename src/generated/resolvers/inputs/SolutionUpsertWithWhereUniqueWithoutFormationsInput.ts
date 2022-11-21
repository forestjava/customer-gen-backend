import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionCreateWithoutFormationsInput } from "../inputs/SolutionCreateWithoutFormationsInput";
import { SolutionUpdateWithoutFormationsInput } from "../inputs/SolutionUpdateWithoutFormationsInput";
import { SolutionWhereUniqueInput } from "../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.InputType("SolutionUpsertWithWhereUniqueWithoutFormationsInput", {
  isAbstract: true
})
export class SolutionUpsertWithWhereUniqueWithoutFormationsInput {
  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: false
  })
  where!: SolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SolutionUpdateWithoutFormationsInput, {
    nullable: false
  })
  update!: SolutionUpdateWithoutFormationsInput;

  @TypeGraphQL.Field(_type => SolutionCreateWithoutFormationsInput, {
    nullable: false
  })
  create!: SolutionCreateWithoutFormationsInput;
}
